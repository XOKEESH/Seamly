document.getElementById('createProjectButton').addEventListener('click', function() {
    document.querySelector('.main-container').style.display = 'none' 
    document.getElementById('createProjectDiv').style.display = 'flex' 
    document.querySelector('footer').style.display = 'block' 
    document.querySelector('.sidebar').style.display = 'flex' 
})

document.getElementById('cancelButton').addEventListener('click', function() {
    document.querySelector('.main-container').style.display = 'block' 
    document.getElementById('createProjectDiv').style.display = 'none' 
})

let userProfile = null 

async function fetchUserProfile(userId) {
    try {
        const response = await fetch(`http://localhost:3001/users/${userId}`)
        if (!response.ok) throw new Error('Network response was not ok')
        userProfile = await response.json()
    } catch (error) {
        console.error('Error fetching user profile:', error)
    }
}

async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:3001/projects')
        if (!response.ok) throw new Error('Network response was not ok')
        const projects = await response.json()
        renderProjects(projects)
    } catch (error) {
        console.error('Error fetching projects:', error)
    }
}

function renderProjects(projects) {
    const projectItems = document.querySelectorAll('.project-item')

    projects.forEach((project, index) => {
        if (projectItems[index]) {
            const projectItem = projectItems[index]
            projectItem.dataset.projectId = project._id 

            const imageContainer = projectItem.querySelector('.image-container')
            const cardCopy = projectItem.querySelector('.card-copy')

            const imgElement = imageContainer.querySelector('img')
            imgElement.src = project.images && project.images.length > 0 ? project.images[0] : '/path/to/default/image.jpg'

            const statusSpan = imageContainer.querySelector('span')
            if (statusSpan) {
                const statusClass = `status-span-${project.status.replace(' ', '-').toLowerCase()}`
                statusSpan.className = statusClass
            }

            const titleElement = cardCopy.querySelector('.project-title')
            titleElement.textContent = project.title

            const usernameElement = cardCopy.querySelector('.username')
            usernameElement.textContent = project.userId 

            projectItem.addEventListener('click', () => {
                fetchProjectDetails(project._id)
            })
        }
    })
}

async function fetchProjectDetails(projectId) {
    try {
        const response = await fetch(`http://localhost:3001/projects/${projectId}`)
        if (!response.ok) throw new Error(`Failed to fetch project details: ${response.statusText}`)
        const project = await response.json()

        console.log('Fetched project:', project)
        
        await fetchUserProfile(project.userId)
        
        if (project.fabricIds && project.fabricIds.length > 0) {
            await fetchFabricDetails(project.fabricIds[0])
        } else {
            console.error('No fabric IDs found for this project')
        }
        
        await fetchPatternDetails(project.patternId)
        displayProjectDetails(project)
        fetchLikes(projectId)
    } catch (error) {
        console.error('Error fetching project details:', error)
    }
}

function displayProjectDetails(project) {
    document.getElementById('detail-title').textContent = project.title
    document.getElementById('detail-description').textContent = project.description
    document.getElementById('detail-status').textContent = `Status: ${project.status}`
    document.getElementById('detail-type').textContent = `Type: ${project.projectType}`
    document.getElementById('detail-date-created').textContent = `Created on: ${new Date(project.dateCreated).toLocaleDateString()}`
    document.getElementById('detail-finish-date').textContent = project.finishDate ? `Finish Date: ${new Date(project.finishDate).toLocaleDateString()}` : 'Finish Date: Not specified'

    const detailImages = document.getElementById('carouselInner')
    detailImages.innerHTML = ''
    
    project.images.forEach((img, index) => {
        const carouselItem = document.createElement('div')
        carouselItem.classList.add('carousel-item')
        if (index === 0) carouselItem.classList.add('active')
    
        const imgElement = document.createElement('img')
        imgElement.src = img
        imgElement.alt = `Project Image ${index + 1}`
        imgElement.style.width = '100%'
    
        carouselItem.appendChild(imgElement)
        detailImages.appendChild(carouselItem)
    })
    
    let currentIndex = 0
    updateCarousel()
    
    const prevButton = document.getElementById('prevButton')
    const nextButton = document.getElementById('nextButton')
    
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : project.images.length - 1
        updateCarousel()
    })
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex < project.images.length - 1) ? currentIndex + 1 : 0
        updateCarousel()
    })
    
    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item')
        items.forEach((item, index) => {
            item.style.display = index === currentIndex ? 'block' : 'none'
        })
    }
    
    fetchLikedBy(project.likedBy)
    fetchComments(project.comments)

    const detailContainer = document.getElementById('projectDetailContainer')
    detailContainer.style.display = 'block'
    document.querySelector('.main-container').style.display = 'none'
    document.querySelector('footer').style.display = 'block'
    document.querySelector('.sidebar').style.display = 'flex'

    document.querySelector('.liked-by-section').style.display = 'block'
    document.querySelector('.comments-section').style.display = 'block'
    document.querySelector('.new-comment-section').style.display = 'block'
    document.querySelector('#closeDetailsButton').style.display = 'block'
}

async function fetchLikes(projectId) {
    try {
        const response = await fetch(`http://localhost:3001/projects/${projectId}`)
        if (!response.ok) throw new Error('Network response was not ok')
        const project = await response.json()
        document.getElementById('likeCount').textContent = project.likes
        fetchLikedBy(project.likedBy)
    } catch (error) {
        console.error('Error fetching likes:', error)
    }
}

async function handleLike(projectId) {
    const userId = userProfile._id 
    try {
        const response = await fetch(`http://localhost:3001/projects/${projectId}/like`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userId }),
        })
        if (!response.ok) throw new Error('Network response was not ok')
        fetchLikes(projectId)
    } catch (error) {
        console.error('Error liking project:', error)
    }
}

document.getElementById('likeButton').addEventListener('click', function() {
    const projectId = document.querySelector('.project-detail-content').dataset.projectId
    handleLike(projectId)
})

document.querySelector('.likes-container').addEventListener('click', function() {
    const popup = document.getElementById('likedUsersPopup')
    popup.classList.toggle('liked-users-popup-hidden')
})

async function fetchLikedBy(userIds) {
    const likedUsersList = document.getElementById('likedUsersList')
    likedUsersList.innerHTML = ''

    const uniqueUserIds = new Set(userIds)
    const addedUsernames = new Set()

    for (const userId of uniqueUserIds) {
        try {
            const response = await fetch(`http://localhost:3001/users/${userId}`)
            if (!response.ok) throw new Error('Network response was not ok')
            const user = await response.json()

            if (!addedUsernames.has(user.username)) {
                const userElement = document.createElement('li')
                userElement.textContent = user.username
                likedUsersList.appendChild(userElement)
                addedUsernames.add(user.username)
            }
        } catch (error) {
            console.error('Error fetching liked by user:', error)
        }
    }
}

async function fetchComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer')
    commentsContainer.innerHTML = ''

    for (const comment of comments) {
        try {
            const response = await fetch(`http://localhost:3001/users/${comment.userId}`)
            const user = await response.json()

            const commentElement = document.createElement('div')
            commentElement.classList.add('comment')

            const userPic = document.createElement('img')
            userPic.src = user.profilePicture
            userPic.alt = user.username
            userPic.style.width = '40px'
            userPic.style.borderRadius = '50%'

            const usernameElement = document.createElement('span')
            usernameElement.textContent = user.username
            usernameElement.style.fontWeight = 'bold'

            const commentText = document.createElement('p')
            commentText.textContent = comment.comment

            commentElement.appendChild(userPic)
            commentElement.appendChild(usernameElement)
            commentElement.appendChild(commentText)

            commentsContainer.appendChild(commentElement)
        } catch (error) {
            console.error('Error fetching user for comment:', error)
        }
    }
}

async function fetchFabricDetails(fabricId) {
    if (!fabricId) {
        console.error('No fabric ID provided')
        return
    }

    try {
        const response = await fetch(`http://localhost:3001/fabrics/${fabricId}`)
        if (!response.ok) throw new Error(`Failed to fetch fabric with ID ${fabricId}: ${response.status}`)
        
        const fabric = await response.json()

        if (fabric) {
            const fabricImageElement = document.getElementById('MCfabric-image')
            if (fabricImageElement && fabric.imageURL) {
                fabricImageElement.src = fabric.imageURL
            }
            document.getElementById('MCfabric-name').textContent = fabric.fabricName || 'Unknown Fabric'
            document.getElementById('MCfabric-type').textContent = `Type: ${fabric.type || 'N/A'}`
            document.getElementById('MCfabric-stretch').textContent = `Stretch: ${fabric.stretch ? 'Yes' : 'No'}`
            document.getElementById('MCfabric-sheerness').textContent = `Sheerness: ${fabric.sheerness || 'N/A'}`
            document.getElementById('MCfabric-color').textContent = `Color Family: ${fabric.colors || 'N/A'}`
            document.getElementById('MCfabric-decsription').textContent = `Description: ${fabric.description}`

        } else {
            throw new Error(`Invalid fabric data for ID ${fabricId}`)
        }
    } catch (error) {
        console.error('Error fetching fabric details:', error)
    }
}

async function fetchPatternDetails(patternId) {
    try {
        const response = await fetch(`http://localhost:3001/patterns/${patternId}`)
        if (!response.ok) throw new Error(`Failed to fetch pattern with ID ${patternId}: ${response.status}`)
        const pattern = await response.json()

        if (pattern && pattern.patternImg) {
            const patternImageElement = document.getElementById('MCpattern-image')
            if (patternImageElement) patternImageElement.src = pattern.patternImg
            document.getElementById('MCpattern-title').textContent = pattern.title || 'Unknown Pattern'
            document.getElementById('MCpattern-brand').textContent = `By: ${pattern.brand || 'N/A'}`
            document.getElementById('MCpattern-skill-level').textContent = `Skill Level: ${pattern.skillLevel || 'N/A'}`
        } else {
            throw new Error(`Invalid pattern data for ID ${patternId}`)
        }
    } catch (error) {
        console.error('Error fetching pattern details:', error)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    fetchProjects()
    
    const detailContainer = document.getElementById('projectDetailContainer')
    detailContainer.style.display = 'none'

    document.querySelector('.liked-by-section').style.display = 'none'
    document.querySelector('.comments-section').style.display = 'none'
    document.querySelector('.new-comment-section').style.display = 'none'
    document.querySelector('#closeDetailsButton').style.display = 'none'
})

document.getElementById('closeDetailsButton').addEventListener('click', function() {
    const detailContainer = document.getElementById('projectDetailContainer')
    detailContainer.style.display = 'none'
    document.querySelector('.main-container').style.display = 'block'
    document.querySelector('footer').style.display = 'block'
    document.querySelector('.sidebar').style.display = 'flex'

    document.querySelector('.liked-by-section').style.display = 'none'
    document.querySelector('.comments-section').style.display = 'none'
    document.querySelector('.new-comment-section').style.display = 'none'
    document.querySelector('#closeDetailsButton').style.display = 'none'
})
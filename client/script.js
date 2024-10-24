// document.addEventListener('DOMContentLoaded', function() {
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

async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:3001/projects')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const projects = await response.json()
        console.log('Fetched Projects:', projects) 
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
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const project = await response.json()
        console.log('Fetched Project:', project)
        displayProjectDetails(project)
    } catch (error) {
        console.error('Error fetching project details:', error)
    }
}

function displayProjectDetails(project) {
    console.log('Displaying project details:', project)

    document.getElementById('detail-title').textContent = project.title
    document.getElementById('detail-description').textContent = project.description
    document.getElementById('detail-status').textContent = `Status: ${project.status}`
    document.getElementById('detail-type').textContent = `Type: ${project.projectType}`
    document.getElementById('detail-date-created').textContent = `Created on: ${new Date(project.dateCreated).toLocaleDateString()}`
    document.getElementById('detail-finish-date').textContent = project.finishDate ? `Finish Date: ${new Date(project.finishDate).toLocaleDateString()}` : 'Finish Date: Not specified'

    const detailImages = document.getElementById('detail-images')
    detailImages.innerHTML = '' 
    project.images.forEach(img => {
        const imgElement = document.createElement('img')
        imgElement.src = img
        imgElement.style.width = '100%' 
        detailImages.appendChild(imgElement)
    })

    fetchLikedBy(project.likedBy)
    fetchComments(project.comments)

    // Show the detail container
    const detailContainer = document.getElementById('projectDetailContainer')
    detailContainer.style.display = 'flex' // Change this line
    document.querySelector('.main-container').style.display = 'none' // Hide main content
    document.querySelector('footer').style.display = 'block' // Show footer
    document.querySelector('.sidebar').style.display = 'flex' // Show sidebar
}

async function fetchLikedBy(userIds) {
    const likedByContainer = document.getElementById('likedByContainer')
    likedByContainer.innerHTML = ''
    
    for (const userId of userIds) {
        try {
            const response = await fetch(`http://localhost:3001/users/${userId}`)
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            const user = await response.json()
            const userElement = document.createElement('div')
            userElement.textContent = user.username
            likedByContainer.appendChild(userElement)
        } catch (error) {
            console.error('Error fetching liked by user:', error)
        }
    }
}

function fetchComments(comments) {
    const commentsContainer = document.getElementById('commentsContainer')
    commentsContainer.innerHTML = ''

    comments.forEach(comment => {
        const commentElement = document.createElement('div')
        commentElement.textContent = comment.comment 
        commentsContainer.appendChild(commentElement)
    })
}

document.addEventListener('DOMContentLoaded', fetchProjects) 

document.getElementById('closeDetailsButton').addEventListener('click', function() {
    document.getElementById('projectDetailContainer').style.display = 'none' // Hide details
    document.querySelector('.main-container').style.display = 'block' // Show main content again
})
// })

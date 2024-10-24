document.getElementById('createProjectButton').addEventListener('click', function() {
    document.querySelector('.main-container').style.display = 'none' // Hide the main content
    document.getElementById('createProjectDiv').style.display = 'flex' // Show the create project form
    document.querySelector('footer').style.display = 'block' // Ensure footer stays visible
    document.querySelector('.sidebar').style.display = 'flex' // Ensure sidebar stays visible
})

document.getElementById('cancelButton').addEventListener('click', function() {
    document.querySelector('.main-container').style.display = 'block' // Show the main content again
    document.getElementById('createProjectDiv').style.display = 'none' // Hide the form
})

async function fetchProjects() {
    try {
        const response = await fetch('http://localhost:3001/projects')
        if (!response.ok) {
            throw new Error('Network response was not ok')
        }
        const projects = await response.json()
        console.log('Fetched Projects:', projects) // Debugging log
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
            const imageContainer = projectItem.querySelector('.image-container')
            const cardCopy = projectItem.querySelector('.card-copy')

            // Update the image source
            const imgElement = imageContainer.querySelector('img')
            if (project.images && project.images.length > 0) {
                imgElement.src = project.images[0] // Use the first image
            } else {
                imgElement.src = '/path/to/default/image.jpg' // Fallback
            }

            // Update the status span
            const statusSpan = imageContainer.querySelector('span')
            if (statusSpan) {
                const statusClass = `status-span-${project.status.replace(' ', '-').toLowerCase()}`
                statusSpan.className = statusClass
            }

            // Update project title and username
            const titleElement = cardCopy.querySelector('.project-title')
            const usernameElement = cardCopy.querySelector('.username')

            if (titleElement) {
                titleElement.textContent = project.title // Set title
            } else {
                console.warn(`No title element found for project at index: ${index}`)
            }

            if (usernameElement) {
                usernameElement.textContent = project.userId // Update username appropriately
            } else {
                console.warn(`No username element found for project at index: ${index}`)
            }
        } else {
            console.warn(`No project item found for index: ${index}`)
        }
    })
}

// Call fetchProjects on page load or when appropriate
document.addEventListener('DOMContentLoaded', fetchProjects)
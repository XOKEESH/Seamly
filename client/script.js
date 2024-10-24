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

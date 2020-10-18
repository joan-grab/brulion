document.getElementById('portfolio-content').addEventListener('click', event => {
    console.log(event.target.className);
    if (event.target.className === 'project' || 
        event.target.parentElement.className === 'project-image' ||
        event.target.parentElement.className === 'project-title')  { 
        document.getElementById('portfolio-page').style.position='fixed';
        document.getElementById('project-view').style.display='block';
        console.log(event.target.dataset.id);
    }
});

document.getElementById('close').addEventListener('click', event => {
    console.log(event.target.className);
    if (event.target.id === 'port-close') { 
        document.getElementById('portfolio-page').style.position='static';
        document.getElementById('project-view').style.display='none';
    }
});

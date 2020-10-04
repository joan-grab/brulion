document.getElementById('gallery').addEventListener('click', event => {
    console.log(event.target.className);
    if (event.target.className === 'hover-content' || 
        event.target.className === 'title' ||
        event.target.className === 'fas')  { 
        window.scrollTo(0, 0);
        document.getElementById('home').style.position='fixed';
        document.getElementById('project-view').style.display='block';
        console.log(event.target.dataset.id);
    }
});

document.getElementById('close').addEventListener('click', event => {
    console.log(event.target.className);
    if (event.target.className === 'fa') { 
        document.getElementById('home').style.position='static';
        document.getElementById('project-view').style.display='none';
    }
});
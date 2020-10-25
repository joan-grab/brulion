const openGallery = document.getElementById('gallery');

if (openGallery !== null) {
    openGallery.addEventListener('click', event => {
        console.log(event.target.className);
        if (event.target.className === 'hover-content' || 
            event.target.parentElement.className === 'title' ||
            event.target.className === 'fas')  { 
            window.scrollTo(0, 0);
            document.getElementById('home').style.position='fixed';
            document.getElementById('project-view').style.display='block';
            console.log(event.target.dataset.id);
        }
    });
}

const closeGallery = document.getElementById('close');

if (closeGallery !== null) {
    closeGallery.addEventListener('click', event => {
        console.log(event.target.className);
        if (event.target.id === 'home-close') { 
            document.getElementById('home').style.position='static';
            document.getElementById('project-view').style.display='none';
        }
    });
}

const openPortfolio = document.getElementById('portfolio-content');

if (openPortfolio !== null) {
    openPortfolio.addEventListener('click', event => {
        console.log(event.target.className);
        if (event.target.className === 'project' || 
            event.target.className === 'project-image' ||
            event.target.parentElement.className === 'project-image' ||
            event.target.className === 'project-title' ||
            event.target.parentElement.className === 'project-title')  { 
            document.getElementById('portfolio-page').style.position='fixed';
            document.getElementById('project-view').style.display='block';
            console.log(event.target.dataset.id);
        }
    });
}

const closePortfolio = document.getElementById('close');

if (closePortfolio !== null) {
    document.getElementById('close').addEventListener('click', event => {
        console.log(event.target.className);
        if (event.target.id === 'port-close') { 
            document.getElementById('portfolio-page').style.position='static';
            document.getElementById('project-view').style.display='none';
        }
    });
}


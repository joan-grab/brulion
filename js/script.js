const openGallery = document.getElementById('gallery');

if (openGallery !== null) {
    openGallery.addEventListener('click', event => {
        if (event.target.className === 'hover-content' || 
            event.target.parentElement.className === 'title' ||
            event.target.className === 'fas')  { 
            window.scrollTo(0, 0);
            document.getElementById('home').style.position='fixed';
            document.getElementById('project-view-home').style.display='block';
        }
    });
}

const closeGallery = document.getElementById('project-view-home');

if (closeGallery !== null) {
    closeGallery.addEventListener('click', event => {
        if (event.target.id === 'project-view-home' ||
            event.target.id === 'home-close' ) { 
            document.getElementById('home').style.position='static';
            document.getElementById('project-view-home').style.display='none';
        }
    });
}

const openPortfolio = document.getElementById('portfolio-content');

if (openPortfolio !== null) {
    openPortfolio.addEventListener('click', event => {
        if (event.target.className === 'project' || 
            event.target.className === 'project-image' ||
            event.target.parentElement.className === 'project-image' ||
            event.target.className === 'project-title' ||
            event.target.parentElement.className === 'project-title')  { 
            document.getElementById('portfolio-page').style.position='fixed';
            document.getElementById('project-view-portfolio').style.display='block';
        }
    });
}

const closePortfolio = document.getElementById('project-view-portfolio');

if (closePortfolio !== null) {
    closePortfolio.addEventListener('click', event => {
        if (event.target.id === 'project-view-portfolio' ||
            event.target.id === 'port-close' ) { 
            document.getElementById('portfolio-page').style.position='static';
            document.getElementById('project-view-portfolio').style.display='none';
        }
    });
}


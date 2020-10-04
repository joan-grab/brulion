document.getElementById('gallery').addEventListener('click', event => {
    console.log(event.target.className);
    if (event.target.className === 'hover-content') { 
         // document.getElementById('home').style.z-index='0'; 
        document.getElementById('project-view').style.display='block';
        console.log(event.target.dataset.id);
    }
});

document.getElementById('close').addEventListener('click', event => {
    console.log(event.target.className);
    if (event.target.className === 'fa') { 
         // document.getElementById('home').style.z-index='0'; 
        document.getElementById('project-view').style.display='none';
    }
});
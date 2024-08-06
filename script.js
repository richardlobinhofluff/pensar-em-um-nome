document.getElementById('fetchButton').addEventListener('click',fetchDogImages);

function fetchDogImages() {
    fetch('https://api.thedogapi.com/v1/images/search?limit=10')
        . then(Response=> Response.json())
        . then(data =>{
            const gallery = document.getElementById('gallery');
            gallery.innerHTML = ''; //Clear previous images
            data.forEach(dog=>{
                const img = document.createElement('img');
                img.src = dog.url;
                gallery.appendChild(img);
            })
        })
        .catch(error => console.error('Error frtching dog images:', error));
}
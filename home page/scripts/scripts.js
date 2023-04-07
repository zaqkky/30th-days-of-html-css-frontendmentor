
const thumbnailsContainer = document.getElementById('thumbnailsContainer');


fetch('../desafios.json')
    .then(response => response.json())
    .then(data => {
        const challenge = data[0]; // especifica o primeiro objeto do array
        console.log("name:" + challenge.name)
        console.log("description: " + challenge.description)
        console.log("thumbnail: " + challenge.thumbnail)
        console.log("liveDemoUrl: " + challenge.liveDemoUrl)

        //iterar sobre os dados do json usando forEach
        data.forEach(challenge => {
            const thumbnail = document.createElement('div');
            thumbnail.classList.add('thumbnail');

            const img = document.createElement('img');
            img.src = challenge.thumbnail;
            thumbnail.appendChild(img);

            const name = document.createElement('h4');
            name.textContent = challenge.name
            thumbnail.appendChild(name);

            const description = document.createElement('p');
            description.textContent = challenge.description
            thumbnail.appendChild(description);

            const link = document.createElement('a');
            link.href = challenge.liveDemoUrl
            link.textContent = 'live Demo';
            thumbnail.appendChild(link);

            thumbnailsContainer.appendChild(thumbnail);
        })

    });
fetch('./projects.json')
    .then(response => response.json())
    .then(projects => {
        const grid = document.querySelector('.category-grid');
        projects.forEach(project => {
            const item = document.createElement('div');
            item.className = 'category-item';
            item.dataset.href = project.href; // Change this line to use 'href'

            const defaultImg = document.createElement('img');
            defaultImg.src = './ASSETS/screen.png';
            defaultImg.alt = project.name; // Change this line to use 'name'
            item.appendChild(defaultImg);

            const hoverImg = document.createElement('img');
            hoverImg.src = project.thumbnail;
            hoverImg.alt = `${project.name} Hover`; // Change this line to use 'name'
            hoverImg.className = 'category-image-hover';
            item.appendChild(hoverImg);

            const title = document.createElement('div');
            title.className = 'category-title';
            title.textContent = project.name; // Change this line to use 'name'
            item.appendChild(title);

            // Add a click event listener to the project div
            item.addEventListener('click', () => {
                window.location.href = item.dataset.href;
            });

            grid.appendChild(item);
        });
    });

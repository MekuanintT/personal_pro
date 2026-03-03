const galleryItems = document.querySelectorAll('.gallery-item');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

let currentIndex = 0;

galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.style.display="flex";
        lightboxImg.src=img.src;
        currentIndex = index;
        ;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    lightboxImg.src = galleryItems[currentIndex].src;
});

document.addEventListener('keydown', (e) => {
    if (lightbox.style.display !== 'flex') return;

    switch (e.key) {
        case 'ArrowRight':
            nextBtn.click();
            break;
        case 'ArrowLeft':
            prevBtn.click();
            break;
        case 'Escape':
            closeBtn.click();
            break;
    }
});

function filterImages(category) {
    const cat = category.toLowerCase();

    galleryItems.forEach(img => {
        if (cat === 'all') {
            img.style.display = 'block';
        } else {
            img.style.display = img.classList.contains(cat) ? 'block' : 'none';
        }
    });
}


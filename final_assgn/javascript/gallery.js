const galleryContainer = document.querySelector('.gallery-container');
const imageBox = document.querySelectorAll('.image-box');
const modal = document.createElement('div');
const modalImg = document.createElement('img');

modal.classList.add('modal');
modal.appendChild(modalImg);
document.body.appendChild(modal);

imageBox.forEach((box) => {
  box.addEventListener('click', () => { 
    const imgSrc = box.querySelector('img').getAttribute('src'); 
    modalImg.setAttribute('src', imgSrc); 
    modal.style.display = 'block'; 
  });

  box.addEventListener('click', () => { 
    const imgSrc = box.querySelector('img').getAttribute('src'); 
    modalImg.setAttribute('src', imgSrc); modal.style.display = 'block'; 
  });

  modal.addEventListener('click', () => { 
    modal.style.display = 'none'; 
  }); 
});


document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      modal.style.display = 'none';
    }
  });
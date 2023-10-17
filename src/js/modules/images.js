const images = () => {
    const imgPopUP = document.createElement('div'),
          workSection = document.querySelector('.works'),
          bigImg = document.createElement('img');

    imgPopUP.classList.add('popup');
    workSection.appendChild(imgPopUP);

    imgPopUP.style.justifyContent = 'center';
    imgPopUP.style.alignItems = 'center';
    imgPopUP.style.display = 'none'

    workSection.addEventListener('click', (e) => {
        e.preventDefault();
        let target = e.target;

        if (target && target.classList.contains('preview')) {
            imgPopUP.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImg.setAttribute('src', path);
        }

        if (target && target.matches('div.popup')) {
            imgPopUP.style.display = 'none';
        }
    })
};

export default images;
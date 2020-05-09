import HappyImg from './img/project-1.jpg';

export default () => {
    const img = document.createElement('img');
    img.src = HappyImg;
    img.alt = 'img';
    img.width = 400;

    const body = document.querySelector('body');
    body.appendChild(img);
};

const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulGalleryEl = document.querySelector('.gallery');
ulGalleryEl.style.listStyle = 'none';
ulGalleryEl.style.display = 'flex';
ulGalleryEl.style.gap = '50px';
ulGalleryEl.style.alignItems = 'center';
ulGalleryEl.style.marginTop = '200px';
ulGalleryEl.style.marginLeft = '100px';
ulGalleryEl.style.background = 'rgb(2,0,36)';

const imageHtml = images
  .map(
    element => `
    <li>
      <img src="${element.url}" alt="${element.alt}" width="500">
    </li>`
  )
  .join('');

ulGalleryEl.insertAdjacentHTML('beforeend', imageHtml);

// Ez game
const allCategories = document.querySelector('#categories');
const allItem = allCategories.querySelectorAll('.item');
console.log('Number of categories:', allItem.length);
allItem.forEach(element => {
  console.log('Category:', element.querySelector('h2').textContent);
  const categoryElements = element.querySelectorAll('ul li').length;
  console.log('Elements:', categoryElements);
});
// Ez game

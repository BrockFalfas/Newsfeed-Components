
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence. 
}

// Start Here: Create a reference to the ".menu" class
const menu;
// create a reference to the ".menu-button" class
const menuButton;
// Using your menuButton reference, add a click handler that calls toggleMenu

class Articles {
  constructor(articles) {
    this.articles = articles;
    this.articlesButtons = this.articles.querySelector('.articles-buttons');
    this.articlesBtnOpen = this.articles.querySelector('.articles-btn-open');
    this.articlesBtnClose = this.articles.querySelector('.articles-btn-close');
    this.articlesContent = this.articles.querySelector('.articles-content');
    this.articlesButtons.addEventListener('click', this.togglearticles.bind(this));
    this.articlesButtons.addEventListener('click', () => this.togglearticles());
  }
  togglearticles() {
    this.articlesBtnOpen.classList.toggle('hide-btn');
    this.articlesBtnClose.classList.toggle('hide-btn');
    this.articlesContent.classList.toggle('toggle-on');
  }
 }
 const articless = document.querySelectorAll('.articles');
 articless.forEach(function(articles){
  return new articles(articles);
 });
AOS.init({
  delay:200
});

function changeDarkMode(){

  var content = document.getElementById('content');
  var card = document.getElementsByClassName('card');
  var icon = document.getElementById('switch');

  var i;

  content.classList.toggle('dark-theme');
  icon.classList.toggle('bi-toggle2-on')

  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle('bg-dark-variant');
  }

}
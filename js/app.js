AOS.init({
  delay:200
});

function changeDarkMode(){

  var content = document.getElementById('content');
  var card = document.getElementsByClassName('card');
  var i;

  content.classList.toggle('dark-theme');

  for (let i = 0; i < card.length; i++) {
    card[i].classList.toggle('bg-dark-variant');
  }

}
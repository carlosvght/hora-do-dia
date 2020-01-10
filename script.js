function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('img');
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  msg.innerHTML = `Agora são ${hora} horas e ${min} minutos.`;

  if (hora >= 0 && hora <= 12) {
    img.src = 'img/manha.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (hora > 12 && hora <= 18) {
    img.src = 'img/tarde.jpg'
    document.body.style.background = '#b9846f'
  } else {
    img.src = 'img/noite.jpeg'
    document.body.style.background = '#515154'
  }
}



window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  // canvas
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // background road image
  const img = new Image();
  img.src = './images/road.png';

  const backgroundImage = {
    img: img,
    x:0,
    y: 0,
    speed: +1,

    move: function(){
      this.y += this.speed;
      this.y %= canvas.height;
    },

    draw: function(){
      ctx.drawImage(this.img, this.x, this.y);
      if (this.speed < 0) {
        ctx.drawImage(this.img, this.y + canvas.height, 0);
      } else {
        ctx.drawImage(this.img, this.y - this.img.height, 0);
      }
    },
  }
 


  function startGame() {
    backgroundImage.draw();
}}

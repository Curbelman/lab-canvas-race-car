window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  // canvas
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  // background road image
  const backgroundImg = new Image();
  backgroundImg.src = './images/road.png';

  const backgroundImage = {
    img: backgroundImg,
    x:0,
    y: 0,
    speed: 1,

    draw: function(){
      ctx.drawImage(this.img, this.x, this.y, 500, 700);
    },
  }

  // player car
  class Car {
    constructor(){
      this.x = (canvas.width - 100) / 2;
      this.y = 575;

      const carImg = new Image();
      carImg.src = './images/car.png';
      this.img = carImg;
    }

      draw(){
        ctx.drawImage(this.img, this.x, this.y, 100,100);
      }
  }

  const car = new Car();


 


  function startGame() {
    backgroundImage.draw();
    car.draw();
}}

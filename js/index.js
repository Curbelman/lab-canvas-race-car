window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  // canvas
  const canvas = document.getElementById('canvas');
  const ctx = canvas.getContext('2d');

  function clear(){
    canvas.ctx.clearRect(0,0,canvas.width,canvas.heigth);
  }


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
      this.speedX = 0;

      const carImg = new Image();
      carImg.src = './images/car.png';
      this.img = carImg;
    }

      draw(){
        ctx.drawImage(this.img, this.x, this.y, 100,100);
      }

      newPos(){
        this.x += this.speedX;
      }

      update(){
        ctx.drawImage(this.img, this.x ,this.y, 100, 100);
      }
  }

  function updateGame(){
    clear();
    car.newPos();
    backgroundImage.draw();
    car.update();
  }

  const car = new Car();

  function startGame() {
    backgroundImage.draw();
    car.draw();
    this.interval = setInterval(updateGame, 20)
  }

    document.addEventListener('keydown', e =>{
      switch (e.keycode){
        case 37:
          if (this.x >= 25){
            this.speedX -= 25;
          }
          else {
            this.speedX -= this.x
          }
          break;
        case 39:
          if (this.x <= canvas.width - 125){
            this.speedX += 25;
          }
          else {
            this.speedX = canvas.width - (this.x + 100)
          }
          break;
      }
    })

}

function Plane() {
  this.x = 320;
  this.y = 470;
  this.w = CONFIG.planeSize.width;
  this.h = CONFIG.planeSize.height;
  this.path = imageFromPath(CONFIG.planeIcon);
  this.speed = CONFIG.planeSpeed;
  this.d = CONFIG.padding + this.speed;
  this.lastShoot = Date.now();

}
Plane.prototype.moveLeft = function(){
  if(this.x >= this.d){
    ctx.clearRect(this.x, this.y, this.w, this.h);
    this.x -= this.speed; 
  } 
}
Plane.prototype.moveRight = function(){
  if(this.x + this.w <= canvas.width - this.d){
    ctx.clearRect(this.x, this.y, this.w, this.h);
    this.x += this.speed; 
  }
}
Plane.prototype.shoot = function(){
  if (Date.now() - this.lastShoot > 150) {
    bullets.push(new Bullet());    
    this.lastShoot = new Date();
  }
}

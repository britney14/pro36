class Food {
    constructor(){
    this.foodStock=0;
    this.lastFed;
    this.image=loadImage('Images/Milk.png');
    }
  
   updateFoodStock(foodStock){
    this.foodStock=foodStock;
   }
  
   getFedTime(lastFed){
     this.lastFed=lastFed;
   }
  
    getFoodStock(){
      return this.foodStock;
    }
}
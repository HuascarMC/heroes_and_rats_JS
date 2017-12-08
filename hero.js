const _ = require('lodash');

const Hero = function(name, health, favFood) {
 this.name = name;
 this.health = health;
 this.favFood = favFood;
 this.tasks = [];
}

Hero.prototype.eatUnsafe = function(food) {
 if(food.safe === false) {
  this.health -= 10;
 }
}

Hero.prototype.eat = function(food) {
 if((this.favFood === food.name) && (food.safe === true)) {
  this.health = (food.replenishment * 1.5);
  return;
 } else if (food.safe === false) {
  this.eatUnsafe(food);
  return;
 } else {
  this.health = food.replenishment;
 }
}


Hero.prototype.add = function(task) {
 this.tasks.push(task);
}

Hero.prototype.sortTask = function(byWhat) {
 return this.tasks.sort(function(task, task1) {
  return task.byWhat - task1.byWhat;
 })
}

Hero.prototype.completed = function() {
 completed = [];
 for (let task of this.tasks) {
  if (task.completed === true)
   completed.push(task);
 }
 return completed;
}

Hero.prototype.incompleted = function() {
 incompleted = [];
 for (let task of this.tasks) {
  if(task.completed === false)
   incompleted.push(task);
 }
 return incompleted;
}


module.exports = Hero;

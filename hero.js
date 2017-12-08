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

Hero.prototype.eatFav = function(food) {
  this.health = (food.replenishment * 1.5);
}

Hero.prototype.eat = function(food) {
 if((this.favFood === food.name) && (food.safe === true)) {
  this.eatFav(food);
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

Hero.prototype.sortTaskDif = function() {
 return this.tasks.sort(function(task, task1) {
  return task.difficulty - task1.difficulty;
 })
}

Hero.prototype.sortTaskUrg = function() {
 return this.tasks.sort(function(task, task1) {
  return task.urgency - task1.urgency;
 })
}

Hero.prototype.sortTaskRew = function() {
 return this.tasks.sort(function(task, task1) {
  return task.reward - task1.reward;
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

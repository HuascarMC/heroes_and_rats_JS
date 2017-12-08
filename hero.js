const _ = require('lodash');

const Hero = function(name, health, favFood) {
 this.name = name;
 this.health = health;
 this.favFood = favFood;
 this.tasks = [];
}

Hero.prototype.eat = function(food) {
 if(food.safe === false) {
  this.health -= 10;
 }
 if(this.favFood = food.name) {
  return this.health = (food.replenishment * 1.5);
 }
 this.health = food.replenishment;
}

Hero.prototype.add = function(task) {
 this.tasks.push(task);
}

Hero.prototype.sortTasks = function() {
 this.tasks =  _.sortBy(this.tasks, 0, ['desc', 'asc']);
 return this.tasks;
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

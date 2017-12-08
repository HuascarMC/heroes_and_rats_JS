const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe('hero', function() {
 let hero;

 beforeEach(function() {
  hero = new Hero('Jack Sparrow', 90, 'Rum');
  food = new Food('coconut', 100);
  task = new Task(1, 2, 3, false);
 });

 it('should have a name', function() {
  assert.strictEqual(hero.name, 'Jack Sparrow');
 });

 it('should have health', function() {
  assert.strictEqual(hero.health, 90);
 });

 it('should have a favourite food', function() {
  assert.strictEqual(hero.favFood, 'Rum');
 });

 it('should be able to eat food', function() {
  hero.eat(food);
  assert.strictEqual(hero.health, 100);
 });
});

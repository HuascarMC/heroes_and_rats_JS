const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const Rat = require('../rat.js');

describe('hero', function() {
 let hero;

 beforeEach(function() {
  hero = new Hero('Jack Sparrow', 90, 'Rum');
  food = new Food('coconut', 100);
  food2 = new Food('Rum', 100);
  task = new Task(1, 2, 3, false);
  task1 = new Task(2, 2, 3, true);
  rat = new Rat();
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
  food.setSafety(true);
  hero.eat(food);
  assert.strictEqual(hero.health, 100);
 });

 it('should be able to replensh food value 1.5 if favourte', function() {
  hero.eat(food2);
  assert.strictEqual(hero.health, 150);
 });

 it('should be able to sort task by difficulty', function() {
  hero.add(task);
  hero.add(task1);
  hero.sortTasks();
  assert.deepStrictEqual(hero.tasks, [task, task1]);
 });

 it('should be able to add tasks', function() {
  hero.add(task);
  assert.strictEqual(hero.tasks.length, 1);
 });

 it('should be able to view completed tasks', function() {
  hero.add(task);
  hero.add(task1);
  assert.deepStrictEqual(hero.completed(), [task1]);
 });

 it('should be able to view incompleted tasks', function() {
  hero.add(task);
  hero.add(task1);
  assert.deepStrictEqual(hero.incompleted(), [task]);
 });

 it('should lose health if eats unsafe food', function() {
  rat.touch(food);
  hero.eatUnsafe(food);
  assert.strictEqual(hero.health, 90);
 })
});

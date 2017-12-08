const assert = require('assert');
const Hero = require('../hero.js');

describe('hero', function() {
 let hero;

 beforeEach(function() {
  hero = new Hero('Jack Sparrow', 100, 'Rum');
 });

 it('should have a name', function() {
  assert.strictEquals(hero.name, 'Jack Sparrow');
 })

 it('should have health', function() {
  assert.strictEquals(hero.health, 100);
 })

 it('should have a favourite food', function() {
  assert.strictEquals(hero.favFood, 'Rum');
 })
});

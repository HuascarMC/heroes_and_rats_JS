const assert = require('assert');
const Rat = require('../rat.js');
const Food = require('../food.js');

describe('rat', function() {
 let rat;

 beforeEach(function() {
  rat = new Rat();
  food = new Food('coconut', 100);
 });

 it('should be able to touch food', function() {
 rat.touch(food);
 assert.strictEqual(food.safe, true);
 });
});

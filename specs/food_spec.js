const assert = require('assert');
const Food = require('../food.js')

describe('food', function() {
 food = new Food('coconut', 100);

 it('has a name', function() {
  assert.strictEqual(food.name, 'coconut');
 });

 it('has a replenishment value', function() {
  assert.strictEqual(food.replenishment, 100);
 })
});

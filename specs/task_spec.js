const assert = require('assert');
const Task = require('../task.js');

describe('task', function() {
 let task;

 beforeEach(function() {
  task = new Task(1, 2, 3, false);
 });

 it('should have difficulty level', function() {
  assert.strictEqual(task.difficulty, 1);
 });

 it('should have urgency level', function() {
  assert.strictEqual(task.urgency, 2);
 });

 it('should have reward', function() {
  assert.strictEqual(task.reward, 3);
 });

 it('should have completed boolean', function() {
  assert.strictEqual(task.completed, false);
 });
});

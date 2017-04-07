var assert = require('assert'),
    vows = require('vows'),
    seriousCalculations = require('../');
    seriousCalculationss = require('../');

vows.describe('serious-calculations').addBatch({
  'When performing serious calculations': {
    topic: seriousCalculations.performSeriousCalculations(6,3,4),
    'result should be valid': function calculadora (result) {
      assert.isNumber(result);
      assert.equal(result, 3);
    }
  }
}).export(module);


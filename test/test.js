var assert = require('assert');
const jsdom = require('mocha-jsdom');

global.document = jsdom({url: "http://localhost"});

describe('Test', function(){    
  
  describe('#value', function(){
    it('should be zero initial count value', function(){
      var myCode = require('../proj.js');
      assert.equal(myCode.count, 0);
    });
    it('should be zero initial score value', function(){
      var myCode = require('../proj.js');
      assert.equal(myCode.score, 0);
    });
    it('should be zero initial highscroe value', function(){
      var myCode = require('../proj.js');
      assert.equal(myCode.highscore, 0);
    });
  })
  
  describe('#check timer', function(){
    it('should be ', function(){
      var myCode = require('../proj.js');
      
    })
  })
})
const expect = require('chai').expect;
const jsdom = require('mocha-jsdom');

global.document = jsdom({url: "http://localhost"});

describe('Test', function(){    
  
  describe('# Initial Values', function(){
    it('zero initial count value', function(){
      var myCode = require('../proj.js');
      expect(myCode.count).to.equal(0);
    });
    it('Number initial count type', function(){
      var myCode = require('../proj.js');
      expect(myCode.count).to.be.a('number');
    });

    it('zero initial score value', function(){
      var myCode = require('../proj.js');
      expect(myCode.score).to.equal(0);
    });
    it('Number initial score type', function(){
      var myCode = require('../proj.js');
      expect(myCode.score).to.be.a('number');
    });

    it('zero initial highscroe value', function(){
      var myCode = require('../proj.js');
      expect(myCode.highscore).to.equal(0);
    });
    it('Number initial highscore type', function(){
      var myCode = require('../proj.js');
      expect(myCode.highscore).to.be.a('number');
    });

    it('undefined Timer', function(){
      var myCode = require('../proj.js');
      expect(myCode.timer).to.be.undefined;
    });
    it('undefined Timeout', function(){
      var myCode = require('../proj.js');
      expect(myCode.timer).to.be.undefined;
    });
  });

  describe('# Check Functions', function(){
    it('hideAll()', function(){
      var myCode = require('../proj.js').hideAll();
      
    });
  });

})
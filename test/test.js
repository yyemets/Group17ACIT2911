const expect = require('chai').expect;
const myCode = require('../proj.js');

describe('Test', function(){    
  
  describe('# Initial Values', function(){
    it('zero initial count value', function(){
      expect(myCode.count).to.equal(0);
    });
    it('Number initial count type', function(){
      expect(myCode.count).to.be.a('number');
    });

    it('zero initial score value', function(){
      expect(myCode.score).to.equal(0);
    });
    it('Number initial score type', function(){
      expect(myCode.score).to.be.a('number');
    });

    it('zero initial highscroe value', function(){
      expect(myCode.highscore).to.equal(0);
    });
    it('Number initial highscore type', function(){
      expect(myCode.highscore).to.be.a('number');
    });

    it('30 initial time value', function(){
      expect(myCode.time).to.equal(30);
    });
    it('Number initial time type', function(){
      expect(myCode.time).to.be.a('number');
    });

    it('undefined Timer', function(){
      expect(myCode.timer).to.be.undefined;
    });
    it('undefined Timeout', function(){
      expect(myCode.timer).to.be.undefined;
    });
    it('undefined GameTimer', function(){
      expect(myCode.gameTimer).to.be.undefined;
    });
  });

  describe('# Check Functions', function(){
    it('letsRandomize() should be a number', function () {
      let result = myCode.letsRandomize();
      expect(result).to.be.a('number');
    });

    it('zombiePlacer() ');

    it('countdown() ');

    it('showZ()  ');

    it(' ');
  });
})
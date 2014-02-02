var exclude = require('..')
  , should = require('should')

  , deepEqual = require('deepequal')
;

describe('array-exclude', function () {
    
    it('should copy an array if no arguments are passed', function () {
        
        var arr = [1,2,3,4,5]
          , newArr = exclude(arr)
        ;
        
        newArr.should.not.equal(arr);
        
        newArr.length.should.equal(5);
        
        deepEqual(newArr, arr).should.be.true;
        
    });
    
    it('should exclude the first indexes', function () {
        
        var arr = [1,2,3,4,5]
          , newArr = exclude(arr, 2)
        ;
        
        newArr.length.should.equal(3);
        
        deepEqual(newArr, [3,4,5]).should.be.true;
        
    });
    
    it('should exclude the last indexes', function () {
        
        var arr = [1,2,3,4,5]
          , newArr = exclude(arr, null, 3)
        ;
        
        newArr.length.should.equal(2);
        
        deepEqual(newArr, [1,2]).should.be.true;
        
    });
    
    it('should exclude indexes from both sides', function () {
        
        var arr = [1,2,3,4,5]
          , newArr = exclude(arr, 2, 1)
        ;
        
        newArr.length.should.equal(2);
        
        deepEqual(newArr, [3,4]).should.be.true;
        
    });
    
    it('should convert arguments to an array', function () {
        
        var args = (function () { return arguments; })(1,2,3,4,5)
          , arr = exclude(args, 1, 2)
        ;
        
        arr.should.be.an.instanceOf(Array);
        arr.length.should.equal(2);
        
        deepEqual(arr, [2,3]).should.be.true;
        
        
    });
    
    it('should add to the array with negative excludes', function () {
        
        var arr = [1,2,3,4,5]
          , newArr = exclude(arr, -1, -2)
        ;
        
        newArr.length.should.equal(8);
        
        deepEqual(newArr, [undefined,1,2,3,4,5,undefined,undefined]).should.be.true;
        
    });
    
    it('should default bad values to zero', function () {
        
        var arr = [1,2,3,4,5]
          , newArr = exclude(arr, false, '')
        ;
        
        newArr.length.should.equal(5);
        
        deepEqual(newArr, [1,2,3,4,5]).should.be.true;
        
    });
    
    it('should return an empty array on excessive excludes', function () {
        
        var arr = [1,2,3,4,5]
          , newArr = exclude(arr, 3, 3)
        ;
        
        newArr.length.should.equal(0);
        
        deepEqual(newArr, []).should.be.true;
        
    });
    
});
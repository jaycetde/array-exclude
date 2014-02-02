module.exports = function (arr, first, last) {
    
    if (typeof first !== 'number') first = 0;
    if (typeof last !== 'number') last = 0;
    
    if (arr.length - first - last < 0) return [];
    
    var newArr = new Array(arr.length - first - last)
      , i = arr.length - last
    ;
    
    while (--i >= first) {
        newArr[i - first] = arr[i];
    }
    
    return newArr;
    
};
# array-exclude

Copy an array without the first n and last n indexes

```javascript

var exclude = require('array-exclude')
  , arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
;

var newArr = exclude(arr, 2, 3);
// [ 3, 4, 5, 6, 7 ]

newArr === exclude;
// false

```

## Installation

    $ npm install array-exclude

## Dependencies

none

## API

### exclude(source, [ fromStart ], [ fromEnd ])

  - fromStart - the number of indexes to exclude from the start of the array (default: 0)
  - fromEnd - the number of indexes to exclude from the end of the array (default: 0)
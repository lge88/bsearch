function bsearch( sortedList, val ) {
  var len = sortedList.length;
  if ( val < sortedList[ 0 ] ) { return -1; }
  if ( val >= sortedList[ len -1 ] ) { return len-1; }

  var left = 0;
  var right = len - 1;
  var mid = ( left + right ) >> 1;

  do {
    if ( val < sortedList[ mid ] ) {
      right = mid;
      mid = ( left + right ) >> 1;
    } else {
      left = mid;
      mid = ( left + right ) >> 1;
    }
  } while ( mid !== right && mid !== left );

  return mid;
}

module.exports = exports = bsearch;

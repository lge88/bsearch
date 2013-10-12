
var bsearch = require( 'bsearch' );
var expect = require( 'expect.js' );

describe( 'bsearch', function() {

  it( 'inside the array', function() {
    var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var b = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    expect( bsearch( a, 4.6 ) ).to.be( 3 );
    expect( bsearch( a, 6 ) ).to.be( 5 );
    expect( bsearch( a, 6.7 ) ).to.be( 5 );
    expect( bsearch( b, 4.6 ) ).to.be( 3 );
    expect( bsearch( b, 6 ) ).to.be( 5 );
    expect( bsearch( b, 6.7 ) ).to.be( 5 );
  } );

  it( 'equals first element', function() {
    var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var b = [ 2, 3, 4, 5, 6, 7, 8, 9 ];
    expect( bsearch( a, 1 ) ).to.be( 0 );
    expect( bsearch( b, 2 ) ).to.be( 0 );
  } );

  it( 'less than first element', function() {
    var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var b = [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    expect( bsearch( a, 0 ) ).to.be( -1 );
    expect( bsearch( a, -1 ) ).to.be( -1 );
    expect( bsearch( b, 1 ) ).to.be( -1 );
  } );

  it( 'equals last element', function() {
    var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var b = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    expect( bsearch( a, 10 ) ).to.be( 9 );
    expect( bsearch( b, 9 ) ).to.be( 8 );
  } );

  it( 'larger than last element', function() {
    var a = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
    var b = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
    expect( bsearch( a, 11 ) ).to.be( 9 );
    expect( bsearch( b, 11 ) ).to.be( 8 );
  } );

} );

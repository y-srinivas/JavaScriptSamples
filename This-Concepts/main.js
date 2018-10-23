/**
 * Created by Srinivas Y  on 08/31/2017.
 */

function foo(something) {
    console.log( this.a );
    return this.a + something;
}

var obj = {
    a: 2
};

//Implicit "this" reference
foo( obj ); // undefined


//Explicit "this" reference
foo.call( obj ); // 2

var bar = function() {
    return foo.apply( obj, arguments );
};

var b = bar( 3 ); // 2 3
console.log( b ); // 5
console.log( 4);
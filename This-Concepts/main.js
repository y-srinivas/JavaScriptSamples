/**
 * Created by Srinivas Y  on 08/31/2017.
 */

function foo() {
console.log( this.a );
}

var obj = {
    a: 2
};

//Implicit "this" reference
foo( obj ); // undefined


//Explicit "this" reference
foo.call( obj ); // 2
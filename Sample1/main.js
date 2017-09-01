/**
 * Created by Srinivas Y  on 08/31/2017.
 */
//Implicit "this" reference
function foo() {
console.log( this.a );
}

var obj = {
    a: 2
};

foo( obj ); // undefined


//Explicit "this" reference
function foo() {
    console.log( this.a );
}

var obj = {
    a: 2
};

foo.call( obj ); // 2
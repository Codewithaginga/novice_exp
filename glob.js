var message = 'in global';

console.log('message a is = ' + message);

var a = function () {

    var message  = 'is local';
    console.log('here a is = ' + message);

    function b () {
        console.log('b is = ' + message);
    }

    b();
}


a();



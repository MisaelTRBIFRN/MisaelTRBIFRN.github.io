// file-1.js
function hello() {
    var localMessage = 'Hello!';
}

var globalMessage = 'Hey there!';

// file-2.js
console.log(localMessage); // localMessage is not defined
console.log(globalMessage); // Hey there!
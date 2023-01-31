// use push to added elements to an array as the last element array  
var friendsRoll = [3, 4, 2, 4, 5];
var friendsName = ['Rifat', 'Jamu', 'Mamu', 'Lamu'];

// elements added
friendsRoll.unshift(33); //first added
friendsName.push('Mehedi');

// print 
console.log(friendsRoll);
console.log(friendsName);

// ........................... 

// element pop 

var friendsRoll = [3, 4, 2, 4, 5];
var friendsName = ['Rifat', 'Jamu', 'Mamu', 'Lamu', 'Mehedi'];

// last elements remove
friendsRoll.pop(33);
friendsName.pop('Mehedi'); 

// first element remove 
friendsName.splice(1, 0, 'rana');


// print 
console.log(friendsRoll);
console.log(friendsName);

// When you want to add an element to the end of your array, 
// use push().
// If you need to add an element to the beginning of your array,
//  use unshift().
// If you want to add an element to a particular location of your array, use splice().
// And finally, when you want to maintain your original array, 
// you can use the concat() method.
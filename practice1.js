/*Write a function that takes three strings - a verb, an adjective, and a
 noun - uppercases and interpolates them into the sentence
 "We shall VERB the ADJECTIVE NOUN".*/

let madLib = function(a,b,c) {
  console.log(`We shall ${a.toUpperCase()} the ${b.toUpperCase()} ${c.toUpperCase()}`)
};

madLib('make','best','guac');

/* isSubstring
Input

A String, called searchString.
A String, called subString.
Output: A Boolean. true if the subString is a part of the searchString.*/

let isSubstring = (searchString, subString) => {
  console.log(searchString.includes(subString));
};

isSubstring('Time to program','program');

// function isPalindrome(str) {
//   if(str.length < 3) return false;
//   if(typeof str !== 'string') return false;
//
//   var characters = str.toLowerCase().split('').filter(function (character) {
//     return character.match(/^[a-z]+$/);
//   });
//
//   if (characters.length === 0) return false;
//
//   var forward = characters.join();
//   characters.reverse();
//   var backward = characters.join();
//
//   return forward === backward;
// }


// What i would do

var Palindrome = function() {};

Palindrome.prototype.isPalindrome = function(text) {
  if (!text) return false;
  if ( typeof text !== 'string' ) return false;

  var characters = text.toLowerCase().split('').filter(function (character) {
      return character.match(/^[0-9a-z]+$/);
  });
  if (characters.length === 0) return false;
  var forward = characters.join();
  characters.reverse();
  var backward = characters.join();
  return forward === backward;
};

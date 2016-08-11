// describe('Check palindrome',function(){
//   var str1 = "noon";
//   var str2 = "wrong";
//   var str3 = "c";
//   var str4 = "aa"; // not allowed
//   var str5 = "ab"; // not allowed
//   var str6 = "";
//   var str7 = "123asdf";
//   var notAString = 999;
//   var nonAlphaNumeric = "#a#~a~~!!!";
//
//
//   it('is a valid palindrome',function(){
//     expect(isPalindrome(str1)).toBe(true);
//   });
//
//   it('is not a valid palindrome', function() {
//     expect(isPalindrome(str2)).toBe(false);
//   });
//
//   it('should not allow two chars input', function() {
//     expect(isPalindrome(str3)).toBe(false);
//   });
//
//   it('should not allow non string variable', function() {
//     expect( isPalindrome(notAString) ).toBe(false);
//   });
//
//   it('should not allow NON alpha numeric char', function() {
//     expect( isPalindrome(nonAlphaNumeric) ).toBe(false) ;
//   });
// });

// what i would do

describe('Check palindrome',function(){
  var str1 = "noon";
  var str2 = "wrong";
  var str3 = "c";
  var str4 = "aa"; // not allowed
  var str5 = "ab"; // not allowed
  var str6 = "";
  var str7 = "123asdf";
  var notAString = 999;
  var nonAlphaNumeric = "#a#~a~~!!!";

  beforeEach(function () {
      detector = new Palindrome();
  });

  it('is a valid palindrome',function(){
    expect( detector.isPalindrome(str1) ).toBe(true);
  });

  it('is not a valid palindrome', function() {
    expect( detector.isPalindrome(str2) ).toBe(false);
  });

  it('should not allow two chars input', function() {
    expect( detector.isPalindrome(str3) ).toBe(false);
  });

  it('should not allow non string variable', function() {
    expect( detector.isPalindrome(notAString) ).toBe(false);
  });

  it('should not allow NON alpha numeric char', function() {
    expect( detector.isPalindrome(nonAlphaNumeric) ).toBe(false) ;
  });
});

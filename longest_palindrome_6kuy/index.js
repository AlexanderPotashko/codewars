longestPalindrome=function(s){
  var x, y, substr, maxLength = 0;
  for (x = 0; x < s.length; x++) {
    for (y = 1; y <= s.length; y++) {
      substr = s.substring(x,y); 
      if( substr == substr.split('').reverse().join('') && substr.length > maxLength ) {
        maxLength = substr.length;  
      }; 
    }
  }
  return maxLength;
}

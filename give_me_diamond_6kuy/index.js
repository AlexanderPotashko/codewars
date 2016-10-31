function diamond(n){
  //1, 3, 5, 7, 9, 11, 13, 15, 17, 19 
  // 2n + 1  

  /*
  [N=5]
  k=2, i=0, s=2, *=1
  k=2, i=1, s=1, *=3
  k=2, i=2, s=0, *=5
  k=2, i=3, s=1, *=3
  k=2, i=4, s=2, *=1

  k = ( n - 1 ) / 2
  s = Math.abs( k - i );
  * = n - s * 2 
  */

  var k = (n-1) / 2;
  return ( n < 0 || (n !== 1 && n % 2 === 0)) ? null : '*'.repeat(Math.abs(n)).split('').map((c,i) => ' '.repeat(Math.abs(k - i)) + '*'.repeat(n - Math.abs(k - i) * 2) + '\n').join('');
  
}


function findNb(m) {
    // your code
    // n^3 + (n - 1)^3 + ... + 1^3 = m || -1
    var n = 0, sum = 0;
    while(++n) {
      sum += Math.pow(n, 3);
      if(sum == m) return n;
      if(sum > m) return -1;
    }
}


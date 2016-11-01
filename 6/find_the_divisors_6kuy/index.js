function divisors(integer) {
  var pull = [], i;
  for(i=2; i < integer; i++){
  	if (integer % i === 0) {
  		pull.push(i);  	
    }
  }
  return pull.length === 0 ? integer + ' is prime' : pull;
};

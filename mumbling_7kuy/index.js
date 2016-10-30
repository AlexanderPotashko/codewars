function accum(s) {
	return s.split('').reduce(
  	(prev, curr, i) => {
    	return prev 
      + '-' 
      + curr.toUpperCase() 
      + curr.repeat(i).toLowerCase();
    }
  );
}

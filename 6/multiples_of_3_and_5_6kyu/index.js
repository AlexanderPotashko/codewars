function solution(number){
  var sum = 0, i;
  
  for(i = 1;i< number; i++){
    if(i % 3 == 0 || i % 5 == 0){
      sum += i
    }
  }
  return sum;
}

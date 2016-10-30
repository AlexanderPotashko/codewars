function tickets(peopleInLine){
  var _ = [0,0];
  return peopleInLine.map(
    N => {
      if (N == 25) {
        _[0]++;
        return N;
      }; 

      if (N == 50) {
        if(_[0] > 0) {
          _[0]--;
          _[1]++;
          return N;
        } else {
          return false;
        }
      };

      if (N == 100) {
        if(_[1] > 0 && _[0] > 0) {
          _[0]--;
          _[1]--;
          return N;
        } else if(_[0] > 2){
          _[0] -= 3;
          return N;
        } else {
          return false;
        }
      };
    }
  ).filter(n => !n).length === 0 ? 'YES' : 'NO';
}


function roofFix(s, x){
  return x.split('').map((_, i) => _ === '/' || _ == '\\' ? s[i] === ' ' : true).filter(x => !x).length === 0;
}

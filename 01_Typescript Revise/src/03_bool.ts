function isLegal(age :number): boolean {
  if (age >= 18) {
    return true;
  }
  else {
    return false;
  }
}
console.log(isLegal(18));


//E.g. 2
function isLegal2(age :number): boolean {
  if (age >= 18) {
    return true;
  }
  else {
    return false;
  }
}
let a = isLegal2(18) //you can defined if u want (let a:boolean)
console.log(typeof a);
console.log(a);

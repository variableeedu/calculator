let a = "4-54+6/5-9"; //variable hold the value
let b = a.slice(-1); //remove last
let nl = Number(b);
let ans = isNaN(nl);
if (ans) {
  let res = a.slice(0, -1);
  console.log(res);
  let s = eval(res);
  console.log(s); //remove last
} else {
  let d = eval(a);
  console.log(d); // dont remove
}

// let c="23"
// c=Number(c)
// c = +c
// console.log(typeof c,c)

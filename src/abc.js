// let a = "4-54+6/5-9";
// a variable hold the value
// let b = Number(a.slice(-1)); //remove last and change type
// let ans = isNaN(b);
// if (ans) {
//   console.log(eval(b)); //remove last
// } else {
//   console.log(eval(a)); // dont remove
// }

// export function add(c) {
//   console.log(c * c);
// }
// add(4);

export function eval1(a) {
  console.log(a.slice(-1));
  let b = Number(a.slice(-1));

  console.log(b);
  let ans = isNaN(b);
  console.log(ans);
  if (ans) {
    let res = a.slice(0, -1);
    console.log(res);
    let s = eval(res);

    console.log(s); //remove last
  } else {
    let d = eval(a);

    console.log(eval(d)); // dont remove
  }
}

eval1("4-54+6/5-9-");

// let nl = Number(b);

// let res = a.slice(0, -1);
// console.log(b);
// let s = eval(b);

// let d = eval(a);

// let c="23"
// c=Number(c)
// c = +c
// console.log(typeof c,c)

export function eval1(a:string) {
    console.log(a.slice(-1));
    let b = Number(a.slice(-1));
    //remove last and change type
  
    console.log(b);
    let ans = isNaN(b);
    console.log(ans);
    if (ans) {
      let res = a.slice(0, -1);
      console.log(res);
      let s = eval(res);
  
      return s
    } else {
      let d = eval(a);
  
      return d

    }
  }
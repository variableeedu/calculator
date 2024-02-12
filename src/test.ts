
export function addSymbol(a:string,g:string) {
  console.log(g.slice(-1));
  let b = Number(g.slice(-1));
  let d = isNaN(b);
  console.log(d);
  if (d) {
    let ans = g.slice(0, -1);
    console.log(ans);

    return ans + a;
  } else {
    return g + a;
  }
}

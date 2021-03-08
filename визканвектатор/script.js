let n = 1
function f() {
  console.log("running f()" + n);
  n++;
  if (n <= 10) {
    f();
  }
}
f();
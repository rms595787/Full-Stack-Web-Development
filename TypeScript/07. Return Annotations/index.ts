// Regular Function
function double(x: number): number {
  return x * x;
}

const res = double(2);
console.log(res);

// Arrow Functions
const double2 = (x: number): number => {
  return x * x;
};
const res2 = double2(3);
console.log(res2);

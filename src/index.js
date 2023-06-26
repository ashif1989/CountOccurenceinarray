let array = [1, 2, 3, 5, 1, 2, 3];
count = {};

console.log(count);
for (let arr of array) {
  count[arr] = count[arr] ? count[arr] + 1 : 1;

  console.log(count);
}

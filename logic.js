// Answer 1
arr = [1, 2, 3, 4, 5, 6, 7, 9];
function findNumber(arr, k) {}
function findNumber(arr, k) {
  let newSet = new Set(arr);
  if (newSet.has(k)) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}

// Answer 2
findNumber(arr, 8);

function oddNumbers(l, r) {
  let toReturn = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 == 0) {
      continue;
    } else toReturn.push(i);
  }
  console.log(toReturn);
}

oddNumbers(1, 5);

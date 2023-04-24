for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

let j = 10;

while (j >= 1) {
  console.log(j);
  j--;
}

let k = 1;

do {
  console.log(k);
  k++;
} while (k <= 10);

let l = 10;

do {
  console.log(l);
  l--;
} while (l >= 1);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (const number of numbers) {
  console.log(number);
}

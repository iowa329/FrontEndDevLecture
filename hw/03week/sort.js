let arr = [];

for(let i=0; i<100; i++) {
	arr[i] = Math.floor(Math.random() * 10) * 10 + Math.ceil(Math.random() * 10);
}

arr.sort(compareNumber);
console.log(arr);

function compareNumber(i, j) {
	return i-j;
}

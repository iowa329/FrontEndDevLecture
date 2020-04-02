let arr = [];

for(let i=0; i<100; i++) {
	arr[i] = Math.floor(Math.random() * 10) * 10 + Math.ceil(Math.random() * 10);
}	

let limit = 100;
for(let i=0; i<limit; i++){
	if (arr[i]%2 == 0) {
		arr.splice(i,1);
		i--;
		limit--;
	}
}

console.log(arr);


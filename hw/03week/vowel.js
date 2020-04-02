let str = "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom, let it be.";

for(let i=0; i<str.length; i++) {
	if ( (str[i].search(/[aeiou]/)) != -1 ) {
		console.log(i);
	}
}

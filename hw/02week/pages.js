let studentCount = 31;
let pageSize = 10;
let needPageCount = 0;

needPageCount = parseInt(studentCount / pageSize);
if (studentCount % pageSize != 0)
	needPageCount += 1;

console.log(needPageCount)

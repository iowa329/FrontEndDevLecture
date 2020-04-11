// persons1 배열 생성 및 초기화
let persons1 = [];
for(let i=0; i<10; i++){
    persons1[i] = { name: "홍길동", age: 16 + i };
}

// persons2 빈 배열 생성
let persons2 = [];
function copyPersons1 (s, i) {
    return {name: s, age: i}
}
for(var i=0; i<10; i++){
    persons2[i] = copyPersons1(persons1[i].name, persons1[i].age);
}
// 복사된 값 확인
console.log(persons2);

//원본 배열 값에 변화 주기
persons1[0].name = "Tim Cook";
console.log(persons1);
//달리진 원본 내용이 복사본의 내용에 영향을 줬는지 확인(deep copy 여부 확인)
console.log(persons2);

console.log(persons1 == persons2);
//같은 내용을 참조하고 있는지(deep copy 여부 최종확인) 확인
console.log(persons1[0].name == persons2[0].name);
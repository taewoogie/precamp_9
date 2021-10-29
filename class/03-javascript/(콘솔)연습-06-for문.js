for(let i=0; i<3; i++) {
    console.log('안녕하새우')
}
// 3VM1283:2 안녕하새우
// undefined
for(let i=0; i<7; i++) {
    console.log('안녕하새우')
}
// 7VM1287:2 안녕하새우
// undefined
const classmates = ["철수","영희","훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']
for(let i=0; i<classmates.length; i++) {
    console.log(classmates[i] + '어린이');
}
// VM1522:2 철수어린이
// VM1522:2 영희어린이
// VM1522:2 훈이어린이
// undefined
const classmates2 = [
    { name : '철수' , age : 10 , school : '다람쥐초등학교'} ,
    { name : '영희' , age : 11 , school : '공룡초등학교'} ,
    { name : '훈이' , age : 37 , school : '토끼초등학교'}
];
// undefined
classmates2[0].school
// '다람쥐초등학교'
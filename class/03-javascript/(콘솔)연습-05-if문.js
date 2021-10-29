if(1+1 === 2){
    console.log("정답입니다")
} else {
    console.log("오답입니다!")
}
// VM455:2 정답입니다
// undefined
if(true){
    console.log("정답입니다")
} else {
    console.log("오답입니다!")
}
// VM508:2 정답입니다
// undefined
if(1+1 === 3){
    console.log("정답입니다")
} else {
    console.log("오답입니다!")
}
// VM522:4 오답입니다!
// undefined
let age = 13
// undefined
if( age >= 20 ) {
    console.log("성인입니다.")
} else {
    console.log("미성년자입니다.")
}

// VM771:4 미성년자입니다.
// undefined
const profile = { name : "철수" , age : 7 , school : "다람쥐초등학교" }
// undefined
setTimeout(function() {
    console.log("3초 후에 실행 됩니다");
} , 3000)
// 2
// VM1478:2 3초 후에 실행 됩니다
setInterval(function(){
    console.log("1초마다 실행 됩니다")
} , 1000)

// 3
// 36VM1621:2 1초마다 실행 됩니다

clearInterval(3)
// setInterval() 함수를 쓰면 고유id 가 주어지는데 clearInterval() 함수에 id 값을 넣어 정지 할 수 있다.


// 10초 감소 하면서 카운트 하기
let time = 10
// undefined
setInterval( function() {
    if(time >= 0){
        console.log(time);
        time--
    }
}, 1000)
// 2
// VM2154:3 10
// VM2154:3 9
// VM2154:3 8
// VM2154:3 7
// VM2154:3 6
// VM2154:3 5
// VM2154:3 4
// VM2154:3 3
// VM2154:3 2
// VM2154:3 1
// VM2154:3 0


// 3분 카운트 하기
let time = 180;
// undefined
time
// 180
setInterval( function(){
    const minutes = Math.floor(time / 60);  // 몫
    const seconds = time % 60;              // 나머지

    if(time >= 0){
        console.log(minutes + ":" + seconds);
        time--;
    }
} , 1000)
// 2
// VM2739:6 3:0
// VM2739:6 2:59
// VM2739:6 2:58
// VM2739:6 2:57
// VM2739:6 2:56
// VM2739:6 2:55
// VM2739:6 2:54
// VM2739:6 2:53
// VM2739:6 2:52
// VM2739:6 2:51
// VM2739:6 2:50
// VM2739:6 2:49
// VM2739:6 2:48
// VM2739:6 2:47
// VM2739:6 2:46
// VM2739:6 2:45
// VM2739:6 2:44
// VM2739:6 2:43
// VM2739:6 2:42
// VM2739:6 2:41
// VM2739:6 2:40
// VM2739:6 2:39
// VM2739:6 2:38
// VM2739:6 2:37
clearInterval(2)
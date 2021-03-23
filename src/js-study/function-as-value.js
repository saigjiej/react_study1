// JavaScript에서 함수 선언
let  add = function (a, b) {
    return a + b
};

add(2, 5) // 결과 값 : 5 (함수호출)
let func = add // 결과 값 : 함수 (함수 자체 대입)



let f = function(func) {
    return func(1, 2)
}
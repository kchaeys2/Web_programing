var arr = new Array();
var me = {
    name:"사샤",
    age:99,
    hello:function(name,age){
       return "안녕하세요 제 이름은 "+name+"이고 나이는 "+age+"입니다.";
    }
    
}
function addArr(n){
    for(let i = 1; i<n+1; i++){
        arr.push(i);
        if(arr.length >= 10){
            arr.pop();
            arr.push("끝!");
            break;
        }
    }
}
me.name = "채연";
me.age = function realAge (real){
    return real
}
addArr(19);
console.log(arr);
console.log(me.name);
console.log(me.age(22));
console.log(me.hello(me.name,me.age(22)));

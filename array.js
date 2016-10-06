
//判断a和b的大小，a>b 返回值大于0，a<b 返回值小于0 等于是0
var compare = function(a,b){
    return a-b;
};
var arr = [21,345,546,56,5,75,67,56,7,657,56,7];

//传入arr两个值，使用compare进行比较，返回值大于0 则交换位置，否则不变
arr.sort(compare);
console.log('<-----------------数字数组大小比较------------->');
console.log(arr);

var Objarr = [
    {name:'Lxiao',age:17},
    {name:'冯佳雨',age:15},
    {name:'杨紫月',age:17},
    {name:'罗肖',age:19}
];

var compareObj = function(a,b) {
    return a.age-b.age;
}
//比较对象里面一个属性的大小
Objarr.sort(compareObj);
console.log('<------------------对象比较-------------------->');
console.log(Objarr);


/************************数组单值判断************************/
//判断是否是偶数
function isEnv(x){
    console.log('x:',x)
    return (x%2 == 0) ? true:false;
}
var Envarr = [123,3243,543,5,345,34,5,3534,5,43,6,54,6334];
console.log('arr.every:');
Envarr.every(isEnv);
console.log('arr.some:');
Envarr.some(isEnv);

console.log('map 返回函数对数组元素的判断结果。');
console.log(Envarr.map(isEnv));

console.log('filter 返回满足函数条件的数组元素');
Envarr.filter(isEnv);
console.log(Envarr);


console.log('数组toString:');
console.log(Envarr.toString());

console.log('数组Join：')
console.log(Envarr.join('-'));





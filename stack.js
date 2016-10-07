//定义一个栈的类 ， 用function定义
function Stack() {
    var items = [];
    this.push = function(element){
        items.push(element);
    }
    this.pop = function(){
        return items.pop();
    }
    this.peek = function(){
        return items[items.length-1];
    }
    this.clear = function(){
        items = [];
    }
    this.isEmpty = function(){
        return items.length == 0;
    }
    this.size = function(){
        return items.length;
    }
    this.print = function(){
        console.log(items.join('-'));
    }
}



var stack = new Stack();

console.log(stack.isEmpty());
stack.push(5);
stack.push(123);
console.log('最后一个元素：',stack.peek(),'长度：',stack.size());
stack.push(122);
stack.push(34);
stack.push(3);
stack.pop();
stack.print();


console.log('<--------------十进制转二（多）进制>--------------->');

var devideby2 = function(num){
    var numstack = new Stack();
    var rem,resnum='';
    while(num>0) {
        rem = Math.floor(num%2);
        numstack.push(rem);
        num = Math.floor(num/2);
    }
    while(!numstack.isEmpty()) {
        resnum += numstack.pop().toString();
    }
    return resnum;
};


var num = 13;
console.log('13 转二进制：',devideby2(num));


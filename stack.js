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


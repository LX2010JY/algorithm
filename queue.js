function queue() {
  var items = [];

  /***********************普通版本*************************/
  //添加元素在末尾
  this.enqueue = function(element){
    items.push(element);
  }
  /**********************带优先级的队列*************************/
  //在类里面再定义了一个类，作为items的元素，其中包含两个值，一个是 element，一个是优先级
  function queueElement(element,priority){
    this.element = element;
    this.priority = priority;
  }
  //复杂版的入队
  this.cpxenqueue = function(element,priority){
    var e  = new queueElement(element,priority);
    if(this.isEmpty()){
      items.push(e);
    } else {
      var add=false;
      for(var i=0;i<this.size;i++) {
        if(e.priority<items[i].priority) {
          items.splice(i,0,e);
          add = true;
          break;
        }
      }
      if(!add) {
        items.push(e);
      }
    }
  };
  /************************************************************/
  //获得队列第一个元素， 连带出队
  this.dequeue = function(){
    return items.shift();
  }
  //队列第一个元素
  this.front = function(){
    return items[0];
  }

  //队列是否为空
  this.isEmpty = function(){
    return items.length ==0;
  }
  //队列长度
  this.size = function(){
    return items.length;
  }
  this.print = function(){
    console.log(items.toString());
  }
}

var que = new queue();
que.enqueue('luoxiao');
que.enqueue('冯佳雨');
que.enqueue('紫月');
que.print();

console.log("是空的吗？",que.isEmpty());
console.log('长度是多少？',que.size());
console.log(que.front());
console.log(que.dequeue());
que.print();


console.log("按优先级出队、入队");

var q = new queue();

q.cpxenqueue('哈哈哈哈',2);
q.cpxenqueue('我是老大',1);
q.cpxenqueue('你们在说啥？',5);
q.cpxenqueue('恩恩，你说的都对',4);

var size = q.size();
for(var i=0;i<size;i++)
{
  var data= q.dequeue();
  console.log(i+": 【值: "+data.element+' 优先级：'+data.priority+"】");
}



console.log("/*****************丢手绢游戏(循环队列)*************/");

//一圈孩子围成一个圈，从某一个孩子开始数数，规定一个数字，当一个孩子数到这个数字的时候，这个孩子就被淘汰，剩下的人继续从1开始数，直到只剩下一个人
/*namelist 孩子名单，num 数到多少的时候那个人被淘汰*/
function hotphoto(nameList,num){
    var que = new queue();
    for(var k in nameList){
      que.enqueue(nameList[k]);
    }
    while(que.size()>1) {
      for(var i=1;i<num;i++) {
        que.enqueue(que.dequeue());
      }
      console.log(que.dequeue(),'被淘汰');
    }
    return que.dequeue();
}

var array = ['罗霄','杨菊','陈瑶','代销','王潇','唐洪亮','唐兵','杨阳','杨宏','张莉'];
console.log(hotphoto(array,8)+" 获得胜利.");

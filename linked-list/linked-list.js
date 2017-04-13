//node, each node has a next. head only refers to next til it points to null


//start with a node
let node = function(val){
  this.value = val;
  this.next = null;
};

// then create a constructor function
const SinglyLinkedList = function(arr){
  arr.forEach(val => {
    this.append(val);
  });
};

SinglyLinkedList.prototype.prepend = function(val){
  let node = new Node(val);

  if(!this.head){
    this.head = node;
    return node.val;
  }

  node.next = this.head;
  this.head = node;
  return node.val;
};

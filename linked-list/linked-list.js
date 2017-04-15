//node, each node has a next. head only refers to next til it points to null


//think of this like a phone list in your phone. I want to add/delete people from the list of people inside the memory container that can flex depending on inputs. But, I only have a reference to where i'm at, and where i'm going

//start with a node / person
const Node = function(val){
  this.value = val;
  this.next = null;
};

// then create a constructor function that creates the phone list and takes in an array of people
const SinglyLinkedList = function(arr){
  arr.forEach(val => {
    this.append(val);
  });
};

//prepend a value into the list of people
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

//append a value into the list of people
SinglyLinkedList.prototype.append = function(val){
  let node = new Node(val);
  let lastNode = null;

  if(!this.head){
    this.head = node;
    return node.val;
  }



}

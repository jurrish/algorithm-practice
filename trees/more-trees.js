//TODO _root : points to the root node
//TODO _traverseDF(callback) traverses nodes with DFS
//TODO _traverseBF(callback) traverses nodes with BFS
//TODO _contains(data, traversal) searches for a node in a tree
//TODO add(data, toData, traverse) adds a node to a tree
//TODO remove(child, parent) removes a node from a tree

function Node(data){
  this.data = data;
  this.parent = null;
  this.children = [];
}

//every instance of node contains three properties
//parent is a reference(pointer) to parent
// children is a reference(pointer) to many children

function Tree(data){
  let node = new Node(data);
  this._root = node;
}

//Tree creates a new instance of node with the data that's passed in
//Tree also sets that node to it's _root
//so, if we create an instance of tree with some value, it automatically creates a new node instance
//this sets up our heirarcy because of the properties that live in the constructor of NODE as well as TREE
let tree = new Tree('CEO');
console.log(tree);

//recursion refresher
//recursion is when a function calls itself until it doesnt
//set base case first!
let countDownFrom = (num) => {
  console.log(num);
  if(num === 0) return;
  countDownFrom(num - 1);
};
countDownFrom(10);
//should output :
//10, 9,8,7...

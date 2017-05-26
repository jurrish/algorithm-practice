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

let tree = new Tree('CEO');
console.log(tree);

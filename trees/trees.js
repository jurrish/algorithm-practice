'use strict';

//trees have one root
//a root is a node
//a node has a value prop and children array
//a leaf is a node WITHOUT any children

// let root = {
//   value: null,
//   children: [],
// };

//common question: calculate the edges of a tree
//traverse and start a counter for every child without duplicating


//node constructor. remember to pass in value and children
const TreeNode = module.exports = function(value) {
  this.value = value;
  this.children = [];
};

//append a node
TreeNode.prototype.appendChild = function(node){
  //do a check to see if the argument is actually a node
  if(!(node instanceof TreeNode))
    throw new Error('node must be of type TreeNode');
  this.children.push(node);
};

let treeRoot = new TreeNode(3);
console.log(treeRoot);

//wont work because of our error checking for "instanceof"
// treeRoot.appendChild(40);
// console.log(treeRoot);

//this will work
treeRoot.appendChild(new TreeNode(40));
console.log(treeRoot);

//create the tree
treeRoot.children.forEach(child =>{
  child.appendChild(new TreeNode(Math.random()));
  child.appendChild(new TreeNode(Math.random()));
  child.appendChild(new TreeNode(Math.random()));
});

//print all children out in a console log
TreeNode.prototype.prettyPrint = function(){
  //accumulator for our values
  let result = '';
  //we have a queue with some node or the root (wherever we start)
  let queue = [this];

  //create a helper function that recurses across the tree and does stuff
  let breadthFirstTraversal = () =>{
    //take the top of the tree off
    let next = queue.pop();
    //base case
    if(!next) return;
    result += next.value + ' ';
    //enqueue the children (unshift puts it in the beginning)
    next.children.forEach(child => queue.unshift(child));
    breadthFirstTraversal();
  };
  breadthFirstTraversal();
  console.log(result);
  return result;
};


treeRoot.prettyPrint();

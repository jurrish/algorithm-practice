'use strict';

let Node = function(val){
  this.val = val;
  this.children = [];
};

//create tree constructor
let Tree = module.exports = function(){
  this.root = null;
};

//used to traverse the tree and process during that pre-order traversal. preOrder could be named "traverse".  callback could be renamed "process"
Tree.prototype.preOrder = function(processTheData){
//this is the recursive part. we will always start at the root and work our way down
  _walk(this.root);
  //create helper function
  function _walk(node) {
    //as we walk, we process
    processTheData(node);
    //when we traverse the data we start at the root
    node.children.forEach(_walk);
  }
};

Tree.prototype.add = function(val, parentVal){
  if(!val) return console.error('val required');

  let newNode = new Node(val);
  //if there is no root, create one.
  if(!this.root){
    this.root = new Node(val);
    return;
  }
  //if there is a root, traverse and find where the node.val is equal to the parentVal we want to start at
  this.preOrder(node => {
    if(node.val === parentVal) {
      //push the val into the children array
      node.children.push(newNode);
      return;
    }
  });
};
//ask scott to talk through this again
//get rid of all the parent/child relationships
//prune the branch, not a single deletion!
Tree.prototype.prune = function(val){
  if(!val) return new Error('must pass a val in');
  if(!root) return;
  let current = this.root;
  let parent, index;

  this.preOrder(node => {
    //for all the children of the root, do something
    current.children.forEach((child, idx) => {
      if(child.val === val){
        index = idx;
        parent = current;
        return;
      }
      current = node;
    });
  });
  //slice gives you a ashallow copy of the operation you completed.
  //ie - slice (a snapshot) this number to this number, it gives you back those values
  //SPLICE mutates the array. can be performance costly. think of having an array of 1billion indexes. it has to shift all those indexes
  if(!parent) return new Error('no parent found');
  parent.child.slice(index, 1);
};

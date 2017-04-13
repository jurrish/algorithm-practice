let countDownFrom = (num) => {
  if(num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
};

console.log(countDownFrom(10));


//whenever you use recursion, you can use a loop.

//higher order function practice

//filter

let countDownFrom = (num) => {
  if(num === 0) return;
  console.log(num);
  countDownFrom(num - 1);
};

console.log(countDownFrom(10));

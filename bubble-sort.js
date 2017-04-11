const arr = [1,3,2];


//bubble sort goes through an array and swaps the values if they are out of order

function bubbleSort(arr){
  let i, j, limit;
  limit = arr.length;
  //this will only run while the statement inside is true
  //so, while limit is decremented by 1
  while(limit--){
    for(i=0, j=1; i<limit; i++, j++){
      if(arr[i]>arr[j]){
        //store temp at i
        let temp = arr[i];
        //clone neighbor pair
        arr[i] = arr[j];
        //swap j to temp
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(arr));

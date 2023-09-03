var arr = [5, 6, 3, 1,2, 4];
console.log("We are given a set of array: [5, 6, 3, 1, 2, 4]");
console.log("We are expected to return a bubble sort algorithm of it");
console.log();

bubbleSortAlgo(arr);

function bubbleSortAlgo(arr){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length-i - 1; j++){
            if(arr[j] > arr[j + 1]){
                var tempValue = arr[j];
                arr[j]= arr[j + 1];
                arr[j + 1] = tempValue;
            }
        }
    }
    
    console.log("array is sorted using bubble sort algorithm and the sorted array is; ");
    console.log(arr);
}

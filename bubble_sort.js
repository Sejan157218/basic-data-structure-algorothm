const numbers = [33,43,55,22,11,4,5,6,888,99,90,100];

function bubble_sort(array){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length -1; j++) {
            if(array[j] > array[j+1]){
                [array[j],array[j + 1]] = [array[j+1], array[j]]
            }
            
        }
        
    }
    return array;
}

const sorted = bubble_sort(numbers);
console.log(sorted);
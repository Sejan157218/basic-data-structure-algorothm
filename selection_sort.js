const numbers = [33,43,55,22,11,4,5,6,888,99,90,100];


function selection_sort(array){
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i; j < array.length; j++) {
            if(array[j] < array[min]){
                min=j
            }
        }
        [array[i],array[min] ] = [array[min],array[i] ]
    }
    return array;
}

const sorted = selection_sort(numbers);
console.log(sorted);
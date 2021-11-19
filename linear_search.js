const numbers = [33,43,55,22,11,4,5,6,888,99,90,100];


function linear_search(array,target){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if(element === target){
            return i;
        }
    }
    return -1;
}

const index = linear_search(numbers,888);
console.log(index);
// last in first out => LIFO


class Queue{
    constructor () {
        this.queue = []
    }
    enqueue(element){
        this.queue.push(element)
    }
    dequeue(){
        return this.queue.shift()
    }
}

const users = new Queue ();
users.enqueue('Sejan')
users.enqueue('Sejan1')
users.enqueue('Sejan2')
users.enqueue('Sejan3')
users.enqueue('Sejan4')
users.enqueue('Sejan5')


console.log(users.queue);
users.dequeue();
console.log(users.queue);
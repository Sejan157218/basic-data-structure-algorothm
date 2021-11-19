// last in first out => LIFO


class Stack{
    constructor () {
        this.stack = []
    }
    add(element){
        this.stack.push(element)
    }
    remove(){
        return this.stack.pop()
    }
}

const users = new Stack ();
users.add('Sejan')
users.add('Sejan1')
users.add('Sejan2')
users.add('Sejan3')
users.add('Sejan4')
users.add('Sejan5')


console.log(users.stack);
users.remove();
console.log(users.stack);
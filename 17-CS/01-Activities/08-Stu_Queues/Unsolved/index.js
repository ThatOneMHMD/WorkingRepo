// create the Queue class with two methods to remove and add an element
class Queue {

    constructor(container = []){
        this.container = container;
    };

    addToQueue(i){
        return this.container.push(i);
    };

    removeFromQueue(){
        return this.container.shift();
    };

};

module.exports = Queue;

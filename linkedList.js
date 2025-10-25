function LinkedList() {
    let head = null;
    let tail = null;
    let count = 0;

    const append = (value) => {
        let newNode = Node(value);
        if (head == null) {
            head = newNode;
            tail = newNode;
        }
        else {
            tail.nextNode = newNode;
            tail = newNode;
        }
        count ++;
    }
    const prepend = (value) => {
        let newNode = Node(value);
        if (head == null) {
            head = newNode;
            tail = newNode;
        }
        else {
            newNode.nextNode = head;
            head = newNode;
        }
        count++
    }
    const size = () => {
        return count;
    }
    const getHead = () => {
        return head;
    }
    const getTail = () => {
        return tail;
    }

    const at = (index) => {
        if (head == null) {
            return;
        }
        if (index >= count) {
            return null;
        }
        let tempNode = head;
        let counter = 0
        while (tempNode.nextNode != null && counter < index) { 
            tempNode = tempNode.nextNode;
            counter++
        }
        return tempNode;

    }
    const pop = () => {
        if (tail == null) {
            return;
        }
        if (count == 1) {
            head = null;
            tail = null;
        }
        else {
            //head -> [] -> [] -> [] -> []
            let tempNode = head;
            while (tempNode.nextNode != tail) {
                tempNode = tempNode.nextNode;
            }
            tail = tempNode;
            tempNode.nextNode = null;
        }
        count--;

    }
    const contains = (target) => {
        if (head == null) {return;}
        let tempNode = head;
    
        while (tempNode != null) {
            if (tempNode.value == target) {
                return true;
            }
            tempNode = tempNode.nextNode;
        }
        return false;
        
        
    }
    const find = (target) => {
        if (head == null) {return;}
        let tempNode = head;
        let counter = 0;
       
        while (tempNode != null) {
            if (tempNode.value == target) {
                return counter;;
            }
            tempNode = tempNode.nextNode;
            counter++;
        }
        return false;
    }
    const toString = () => {
        let tempNode = head;
        let string = "";
    
        while (tempNode != null) {
            string += `( ${tempNode.value} ) -> `;
            tempNode = tempNode.nextNode;
        }
    
        string += "null";
    
        return string;
    }

    return {append, prepend, size, getHead, getTail, at, pop, contains, find, toString}
}

function Node(value) {
    let nextNode = null;
    return {value, nextNode}
}


const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());


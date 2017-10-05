function Node(data) {
    this.data = data;
    this.next = null;
}

function SingleLinkedList() {
    this._length = 0;
    this.head = null;
}

SingleLinkedList.prototype.add = function(value) {
    let node = new Node(value),
        currentNode = this.head;

    // If list is empty!
    if (!currentNode) {
        this.head = node;
        this._length++;

        return node;
    }

    //Otherwise, list is not empty traverse to end of list
    while (currentNode.next) {
        currentNode = currentNode.next;
    }

    currentNode.next = node;
    this._length++;

    return node;
}

SingleLinkedList.prototype.searchNodeAt = function(position) {
    let currentNode = this.head,
        length = this._length,
        count = 1,
        message = { failure: 'Failure: The node you are looking for does not exist.' };

    // Check for Invalid Position
    if (length === 0 || position < 1 || position > length) {
      return {
        data: null
      }
      // return (message.failure);
      // throw new Error(message.failure);
    }

    // Traverse to the postion node
    while (count < position) {
        currentNode = currentNode.next;
        count++;
    }

    return currentNode;
}

SingleLinkedList.prototype.containsFrom = function(position, value) {
    let currentNode = this.head,
        length = this._length,
        count = 1;
        message = { failure: 'Failure: The node you are looking for does not exist.' };

    // Check for Invalid Position
    if (length === 0 || position < 1 || position > length) {
      return {
        data: null
      }
      // return (message.failure);
      // throw new Error(message.failure);
    }

    // Traverse to the postion node
    while (count < position) {
        if(currentNode.data === value){
          return true;
        }
        currentNode = currentNode.next;
        count++;
    }
    if(currentNode.data === value){
      return true;
      }

    return false;
}

SingleLinkedList.prototype.remove = function(position) {
    let currentNode = this.head,
        length = this._length,
        count = 0,
        message = { failure: 'Failure: The node you are looking for does not exist.' },
        beforeNodeToDelete = null,
        nodeToDelete = null,
        deletedNode = null;

        // Check for an invalid position
        if (position < 0 || position > length) {
            // return (message.failure);
            throw new Error(message.failure);
        }

        // Removing the first node
    if (position === 1) {
        this.head = currentNode.next;
        deletedNode = currentNode;
        currentNode = null;
        this._length--;

        return deletedNode;
    }

    // traverse to position node
    while (count < position) {
        beforeNodeToDelete = currentNode;
        nodeToDelete = currentNode.next;
        count++;
    }

    beforeNodeToDelete.next = nodeToDelete.next;
    deletedNode = nodeToDelete
    nodeToDelete = null;
    this._length--;

    return deletedNode;
}

SingleLinkedList.prototype.length = function(){
  return this._length;
}

function display(thisList){
  let currentNode = thisList.head,
  count = 1,
  length = thisList._length;

  while(count <= length){
    console.log(currentNode.data);
    currentNode = currentNode.next;
    count++;
  }
}

let myList = new SingleLinkedList();
myList.add("Hiram");
myList.add(4);
myList.add("Thursday");

console.log(myList.containsFrom(1, 4));
console.log(myList.length());
display(myList);

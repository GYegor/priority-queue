const Node = require('./node');

class MaxHeap {
	constructor() {
		this.parentNodes = [];
		this.root = null;
		this.heapSize = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.heapSize += 1;
	}

	pop() {
		if (this.root == null) return;

		let temp =  this.detachRoot();
		this.restoreRootFromLastInsertedNode(temp);
		this.shiftNodeDown(this.root);
		this.heapSize -= 1;
		return temp.data;
	}

	detachRoot() {
		let temp = this.root;
		if (this.parentNodes[0].left !== null && this.parentNodes[0].right !== null) {
			parentNodes.shift();
		}
		this.root = null;
		return temp;
	}

	restoreRootFromLastInsertedNode(detached) {

		this.root = this.parentNodes.pop();
	}



	isEmpty() {
		if (this.heapSize == 0) return true;
		return false;
	}


	size() {

		return this.heapSize;
	}


	clear() {
		this.parentNodes = [];
		this.root = null;
		this.heapSize = 0;
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
			this.parentNodes[0] = this.root;

		} else {
			this.parentNodes.push(node);
			if (this.parentNodes[0].left === null) {
				this.parentNodes[0].left = this.parentNodes[this.parentNodes.length - 1];
				this.parentNodes[this.parentNodes.length - 1].parent = this.parentNodes[0];

			} else

			if (this.parentNodes[0].right === null) {
				this.parentNodes[0].right = this.parentNodes[this.parentNodes.length - 1];
				this.parentNodes[this.parentNodes.length - 1].parent = this.parentNodes[0];
				// this.parentNodes.push();
			}
			// this.parentNodes.push();
		}

		if (this.parentNodes[0].left !== null && this.parentNodes[0].right !== null) {
			this.parentNodes.shift();
		}
		return;
	}

	shiftNodeUp(node) {
		node.swapWithParent();

	}

	shiftNodeDown(node) {
		// if (node.left <= node.right) {
		// node.right.swapWithParent();}
		// 	else {node.left.swapWithParent();}
		// 	if (node.left != null && node.right != null) this.shiftNodeDown(node);
		// 	return;
		// 	// return this.shiftNodeDown(node);

	}
}

module.exports = MaxHeap;
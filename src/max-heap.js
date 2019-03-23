const Node = require('./node');

class MaxHeap {
	constructor() {

		this.parentNodes = [];
		this.root = null;

	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
	}

	pop() {
		if(this.root === null) return;

		this.detachRoot();
		this.restoreRootFromLastInsertedNode(this.detachRoot());
		this.shiftNodeDown(this.root);
		return this.root.data;
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
		if (this.parentNodes.length == undefined) return true;
	}

	clear() {
		this.parentNodes = [];
		this.root = null;
	}

	insertNode(node) {
		if (this.root === null) {
			this.root = node;
			this.parentNodes[0] = this.root;

		} else {
			this.parentNodes.push(node);
			if (this.parentNodes[0].left === null) {
				this.parentNodes[0].left = this.parentNodes[this.parentNodes.length-1];
				this.parentNodes[this.parentNodes.length-1].parent = this.parentNodes[0];
			
			} else 
			
			if (this.parentNodes[0].right === null) {
				this.parentNodes[0].right = this.parentNodes[this.parentNodes.length-1];
				this.parentNodes[this.parentNodes.length-1].parent = this.parentNodes[0];
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
		

	}

	shiftNodeDown(node) {

	}
}

module.exports = MaxHeap;
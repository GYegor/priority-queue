const Node = require('./node');

class MaxHeap {
	constructor() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	push(data, priority) {
		let node = new Node(data, priority);
		this.insertNode(node);
		this.shiftNodeUp(node);
		this.heapSize += 1;

	}

	pop() {
		if (this.root ===  null) {
			return; 
		} else {
			const temp = this.detachRoot();
			this.restoreRootFromLastInsertedNode(temp);
			this.shiftNodeDown(this.root);
		this.heapSize -= 1;
		return temp.data;
		}
	}

	detachRoot() {
		if (this.root) {
			const temp = this.root;
			if (this.parentNodes.indexOf(this.root) !== -1) {
				this.parentNodes.splice(this.parentNodes.indexOf(this.root), 1)
			}
			this.root = null;
			return temp;
		}
	}

	restoreRootFromLastInsertedNode(detached) {
		switch(true) {
			case(this.parentNodes.length === 1):
				this.root = this.parentNodes[0];
				this.root.parent = null;
				break;

			case(this.parentNodes.length === 2):
				this.root = this.parentNodes[1];
				this.root.right = null;
				this.root.left = this.parentNodes[0];
				this.root.parent = null;
				this.root.left.parent = this.parentNodes[1];
				this.parentNodes.unshift(this.parentNodes.pop());
				break;

			case(this.parentNodes.length > 2):
				const lastNodeIndex = this.parentNodes.length - 1;
				const temp = this.parentNodes[lastNodeIndex];
					if (this.parentNodes[lastNodeIndex] === this.parentNodes[lastNodeIndex].parent.left) {
						this.parentNodes[lastNodeIndex].parent.left = null;
						this.parentNodes.pop();
					} else if (this.parentNodes[lastNodeIndex] === this.parentNodes[lastNodeIndex].parent.right) {
						this.parentNodes.unshift(this.parentNodes[lastNodeIndex].parent);
						this.parentNodes.pop();
						this.parentNodes[lastNodeIndex].parent.right = null;
					};
				this.root = temp;
				this.root.parent = null;
				this.root.left = detached.left;
				this.root.right = detached.right;
				this.root.left.parent = this.root;
				this.root.right.parent = this.root;
				break;

			default:
				break;
		}
}
	
	isEmpty() {
		return !this.heapSize;
	}

	size() {
		return this.heapSize;
	}

	clear() {
		this.root = null;
		this.parentNodes = [];
		this.heapSize = 0;
	}

	insertNode(node) {
		if (!this.root) {
			this.root = node;
			this.parentNodes[0] = this.root;
		} else {
			this.parentNodes.push(node);
			if (!this.parentNodes[0].left) {
				this.parentNodes[0].left = node;
				node.parent = this.parentNodes[0];
			} else if (!this.parentNodes[0].right) {
				this.parentNodes[0].right = node;
				node.parent = this.parentNodes[0];
				this.parentNodes.shift();
			} 
		}
	}

	shiftNodeUp(node) {
		const lastNodeIndex = this.parentNodes.length - 1;
		if (node === this.root) {
			return;
		} else if (node.parent && node.parent.priority < node.priority) {
			if (node.parent === this.root) {
				this.root = node;
			}
			if (node === this.parentNodes[lastNodeIndex] && node === node.parent.right) {
				this.parentNodes[lastNodeIndex] = node.parent;
			} else if (node === this.parentNodes[lastNodeIndex] && node === node.parent.left) {
				this.parentNodes[0] = node;
				this.parentNodes[lastNodeIndex] = node.parent;
			} else if (node === this.parentNodes[0]) {
				this.parentNodes[0] = node.parent;
			}
			node.swapWithParent();
		} else return;
		
		this.shiftNodeUp(node);
	}

	shiftNodeDown(root) {
		const ifMainRoot = root === this.root;
		if (root && root.right) {
			if (root.priority > root.right.priority && root.priority > root.left.priority) return;
			if (root.priority <= root.right.priority && root.left.priority < root.right.priority) {
				if (this.parentNodes.indexOf(root.right) !== -1) {this.parentNodes[this.parentNodes.indexOf(root.right)] = root};
				root.right.swapWithParent();
				this.root = (ifMainRoot && root.parent) || this.root;
			} else if (root.priority <= root.left.priority && root.right.priority < root.left.priority) {
				if (this.parentNodes.indexOf(root.left) !== -1) {this.parentNodes[this.parentNodes.indexOf(root.left)] = root};
				root.left.swapWithParent();
				this.root = (ifMainRoot && root.parent) || this.root;
			}		
		}	else if (root && !root.right && root.left) {

			if (root.priority <= root.left.priority) {
				if (this.parentNodes.indexOf(root.left) !== -1) {this.parentNodes[this.parentNodes.indexOf(root.left)] = root};
				if (this.parentNodes.indexOf(root) !== -1) {this.parentNodes[this.parentNodes.indexOf(root)] = root.left};
				root.left.swapWithParent();
				this.root = (ifMainRoot && root.parent) || this.root;
			} else return;
		} else  return;
		
		this.shiftNodeDown(root);
	}
}

module.exports = MaxHeap;
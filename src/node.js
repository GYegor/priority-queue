class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (!this.left) {
			this.left = node;
			this.left.parent = this;
			return;
		}
		if (this.left && !this.right) {
			this.right = node;
			this.right.parent = this;
			return;
		}
	}

	removeChild(node) {
		if (this.left == node) {
			this.left.parent = null;
			this.left = null;
			return;
			}
		if (this.right == node) {
			// this.right.parent = null;
			this.right = null;
			return;}
		if (this.right != node && this.left != node) {
			return error;}
	}

	remove() {
		if (this.parent) {
		return this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (!this.parent) return;
		
		function parentParent(node) {
			let x = node;
			let y = node.parent;
			let z = node.parent.parent;
			node.parent.parent = x;
			node.parent = z;

			node.left.parent = node.right;
			
			// let r = node.parent.right;
			// node.parent = node.parent.right;
			
			// node.left.parent = left.parent.perent.right;
			// y = node.parent.right;
		}

		parentParent(this);
	}
}

module.exports = Node;

class Node {
	constructor(data, priority) {
		this.data = data;
		this.priority = priority;
		this.parent = null;
		this.left = null;
		this.right = null;
	}

	appendChild(node) {
		if (this.left == null) {
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
		else {
		// let node = new Node(data, priority);
			let tempN = this;
			let tempNP = this.parent;
			let tempNPP = this.parent.parent;
			this.parent.parent = tempN;
			this.parent = tempNPP;
			// let thisR;
			// let thisL;
			// this.appendChild(thisL);
			// this.appendChild(thisR);
			// thisL.parent = thisR;


			// if (this == this.parent.left) {
			// 	this.right = this.parent.right;
			// 	this.parent.left = this.left;
			// 	this.left = this.parent;
			// 	this.left.parent = this.left;

			// }
		}
			// node.left.parent = node.right;
			return;
			// node.parent.right = node;
			// node.parent = node.parent.right;
			
			// node.left.parent = left.parent.perent.right;
			// y = node.parent.right;
	}
}

module.exports = Node;

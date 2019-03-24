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
			return;
		}
		if (this.right != node && this.left != node) {
			return error;
		}
	}

	remove() {
		if (this.parent) {
			return this.parent.removeChild(this);
		}
	}

	swapWithParent() {
		if (!this.parent) return;
		else {
			let tempN = this;
			let tempNP = this.parent;
			let tempNPP = this.parent.parent;

			if (this == this.parent.right) {
				// this.parent.parent.right =this;
				this.parent.left.parent = this;

			}
			if (this == this.parent.left) {
				let temp = this.left;

				this.right = this.parent.right;
				this.left = this.parent;
				this.parent.left = temp;
				// this.parent.parent.left =this;
			}


			// this.parent.parent.left =this;
			// if (this == this.parent.parent.right.right) {
			// 	this.parent.parent.right = this;
			// }
			// if (this == this.parent.parent.left.left) {
			// 	this.parent.parent.left = this;
			// }

			this.parent.parent = tempN;
			this.parent = tempNPP;

			// if (this == this.parent.left) {
			// 	this.parent.parent.left =this;
			// }
		}



		return;

	}
}

module.exports = Node;
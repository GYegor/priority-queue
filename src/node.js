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
		} else if (!this.right) {
			this.right = node;
			this.right.parent = this;
		}
	}

	removeChild(node) {
		if (this.right !== node && this.left !== node) {
			throw new Error('passed node is not a child of this node');
		}

		if (this.left === node) {
			this.left.parent = null;
			this.left = null;
		} else if (this.right === node) {
			this.right.parent = null;
			this.right = null;
		}
	}

	remove() {
		if (this.parent) {
			this.parent.removeChild(this);
		}
	}
	
	swapWithParent() {
		if (this. parent) {
			const tempNodeLeft = this.left;
			const tempNodeRight = this.right;
			const tempParent = this.parent;
			const tempGrandParent = this.parent.parent;

			if (tempGrandParent && tempGrandParent.left === tempParent) {
				tempGrandParent.left = this;
			} else if (tempGrandParent && tempGrandParent.right === tempParent) {
				tempGrandParent.right = this;
			}
			
			if (this === tempParent.left) {
				this.left = tempParent;
				this.right = tempParent.right;
				if (tempParent.right) {
					tempParent.right.parent = this;
				}
			} else if (this === tempParent.right) {
				this.right = tempParent;
				this.left = tempParent.left;
				tempParent.left.parent = this;
			}

			this.parent.parent = this;
			this.parent = tempGrandParent;

			tempParent.left = tempNodeLeft;
			tempParent.right = tempNodeRight;
			if (tempNodeLeft) tempNodeLeft.parent = tempParent;
			if (tempNodeRight) tempNodeRight.parent = tempParent;
		}
	}
}

module.exports = Node;

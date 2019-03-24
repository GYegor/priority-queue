const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize) {
		this.maxSize = maxSize;
		if (maxSize == undefined) {
			this.maxSize = 30;
		}
		this.heap = new MaxHeap;
		this.qS = this.heap.size();
	}

	push(data, priority) {
		this.heap.push(data, priority);
		if (this.heap.size() > this.maxSize) {
			throw new Error("maximum size");
		}
		this.qS += 1;
	}

	shift() {
		if (this.heap.size() == 0) {
			throw new Error("queue is empty");
		}

		let temp = this.heap.pop();
		// for (i = this.length; i == 0; i--) {
		// if (this[i].priority > this[i - 1].priority) {
		// 	let tempy = this[i];
		// 	this[i] = this[i - 1];
		// 	this[i - 1] = tempy;
		// }
		this.qS -= 1;
		return temp;
	}

	size() {
		return this.qS;
	}

	isEmpty() {
		if (this.size() == 0) return true;
		return false;
	}
}

module.exports = PriorityQueue;
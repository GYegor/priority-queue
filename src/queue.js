const MaxHeap = require('./max-heap.js');

class PriorityQueue {
	constructor(maxSize = 30) {
		this.maxSize = maxSize;
		this.heap = new MaxHeap;
	}

	push(data, priority) {
		this.heap.push(data, priority);
		if (this.heap.size() > this.maxSize) {
			throw new Error("maximum size");
		}
	}

	shift() {
		if (this.heap.size() === 0) {
			throw new Error("queue is empty");
		} else {
		const data = this.heap.pop()
		return data;
		}
	}

	size() {
		return this.heap.size();
	}

	isEmpty() {
		return !this.size();
	}
}

module.exports = PriorityQueue;
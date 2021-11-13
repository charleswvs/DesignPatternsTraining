class MergeSortStrategy {
  sort(array) {
    if (array.length <= 1) {
      return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);
    return this.sort(this.sort(left), this.sort(right));
  }
}

module.exports = MergeSortStrategy;
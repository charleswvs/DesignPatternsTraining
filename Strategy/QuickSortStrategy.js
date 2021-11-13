class QuickSortStrategy {
  constructor(array) {
    this.array = array;
  }

  sort(arr = []) {
    // if (array.length <= 1) {
    //   return array;
    // }

    // const pivot = array[0];
    // const left = [];
    // const right = [];

    // for (let i = 1; i < array.length; i++) {
    //   if (array[i] < pivot) {
    //     left.push(array[i]);
    //   } else {
    //     right.push(array[i]);
    //   }
    // }

    // return [...this.sort(left), pivot, ...this.sort(right)];

    if (arr.length <= 1)
    return arr;
    let pp = Math.floor(arr.length / 2), pivot = arr[pp];
    const left = [], right = [];
    for (var i = 0; i < arr.length; i++) {
      if (i == pp) continue;
      if (arr[i] < pivot) {
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }
    return this.sort(left).concat(pivot, this.sort(right));
  }

  
}

module.exports = QuickSortStrategy;
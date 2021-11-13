const BubbleSortStrategy = require('./BubbleSortStrategy');
const InsertionSortStrategy = require('./InsertionSortStrategy');
const MergeSortStrategy = require('./MergeSortStrategy');
const QuickSortStrategy = require('./QuickSortStrategy');
const SorterContext = require('./SorterContext');

const sorter = new SorterContext();

const generateRandomArray = (length) => {
  const array = [];
  for (let i = 0; i < length; i++) {
    array.push(Math.floor(Math.random() * length));
  }
  return array;
}

const chronometer = (name = '', cb = () => {}) => {
  const start = new Date();
  cb();
  const end = new Date();
  console.log(`${name} took`, (end.getTime() - start.getTime()) / 100, "seconds");
}

const hugeArray = generateRandomArray(100000);

console.log('Array generated');

chronometer('Bubble', () => {
  sorter.setStrategy(new BubbleSortStrategy());
  sorter.sort(hugeArray);
});

chronometer('Insertion', () => {
  sorter.setStrategy(new InsertionSortStrategy());
  sorter.sort(hugeArray);
});

chronometer('Merge', () => {
  sorter.setStrategy(new MergeSortStrategy());
  sorter.sort(hugeArray);
});

chronometer('Quick', () => {
  sorter.setStrategy(new QuickSortStrategy());
  sorter.sort(hugeArray);
});
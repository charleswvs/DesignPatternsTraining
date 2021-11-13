class SorterContext {
  _strategy;

  setStrategy(strategy) {
    this._strategy = strategy;
  }

  sort(array) {
    return this._strategy.sort(array);
  }
}

module.exports = SorterContext; 
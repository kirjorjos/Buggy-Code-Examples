const counter = {
  count: 0,
  increment: () => {
    this.count++;
  }
};

counter.increment();
console.log(counter.count); // Expected 1, but remains 0

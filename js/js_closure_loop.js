for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log("Iteration:", i);
  }, 100);
}
// Expected: 0, 1, 2. Actual: 3, 3, 3

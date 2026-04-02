async function getVal() {
  return 42;
}

function wrapper() {
  getVal().then(v => {
    return v;
  });
}

console.log(wrapper()); // Expected 42, but is undefined

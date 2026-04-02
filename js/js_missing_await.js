async function fetchData() {
  return "Data received";
}

function process() {
  const data = fetchData();
  console.log(data.toUpperCase());
}

process();

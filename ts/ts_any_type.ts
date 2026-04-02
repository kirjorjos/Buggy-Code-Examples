function process(data: any) {
  console.log(data.name.toUpperCase());
}

process({ id: 1 }); // Runtime error: name is undefined

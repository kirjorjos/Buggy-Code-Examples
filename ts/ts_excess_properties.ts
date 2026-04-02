interface Options {
  color?: string;
  width?: number;
}

function createSquare(config: Options) {
  console.log(config);
}

const myObj = { colour: "red", width: 100 };
createSquare(myObj); // No error despite 'colour' typo

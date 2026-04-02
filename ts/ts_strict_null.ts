function getLength(str: string | null) {
  return str!.length; // Non-null assertion operator
}

console.log(getLength(null));

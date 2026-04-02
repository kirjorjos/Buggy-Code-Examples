function checkValue(val) {
  if (val == null) {
    console.log("Value is null or undefined");
  } else if (val == 0) {
    console.log("Value is zero");
  }
}

checkValue(""); // Might trigger unexpected branch

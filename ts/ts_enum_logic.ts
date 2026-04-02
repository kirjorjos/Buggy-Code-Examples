enum Status {
  Active = 0,
  Inactive = 1
}

function check(s: Status) {
  if (!s) {
    console.log("Status is Active (or is it?)");
  }
}

check(Status.Active);

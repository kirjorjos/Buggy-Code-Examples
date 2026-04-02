interface User {
  readonly id: number;
  name: string;
}

const user: User = { id: 1, name: "Alice" };
(user as any).id = 2; // Bypassing readonly
console.log(user.id);

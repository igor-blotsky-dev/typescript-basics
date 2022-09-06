interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; // 'nama' | 'age'

let key: PersonKeys = "name";
key = "age";

// key = "job"; // Error

// =====

type User = {
  _id: number;
  name: string;
  email: string;
  createdAt: Date;
};

type UserKeysNoMeta1 = Exclude<keyof User, "_id" | "createdAt">; // 'name' | 'email'
type UserKeysNoMeta3 = keyof Omit<User, "_id" | "createdAt">; // 'name' | 'email'
type UserKeysNoMeta2 = keyof Pick<User, "name" | "email">; // 'name' | 'email'

let u1: UserKeysNoMeta1 = "name";
let u2: UserKeysNoMeta2 = "email";
let u3: UserKeysNoMeta3 = "email";
// u3 = "sdfsdf"; error

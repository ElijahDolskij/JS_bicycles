interface Person {
  name: string,
  age: number,
}

type PersonKeys = keyof Person // 'name' | 'age'

let key: PersonKeys = 'name'; // ok
key = 'age'; // ok
// key = 'some'; // not ok!
// Когда это может пригодиться на практике?


type User = {
  _id: number,
  name: string,
  email: string,
  createdAt: Date
}

type UserKeysNoMeta1 = Exclude<keyof User, '_id' | 'createdAt'> // 'name' | 'email'
// or
type UserKeysNoMeta2 = Pick<User, 'name' | 'email'> // 'name' | 'email'

let user: UserKeysNoMeta1 = 'name'; // ok
// user = '_id'; // not ok!

// Когда это можно использовать?



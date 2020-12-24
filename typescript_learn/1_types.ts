const isFetching: boolean = true;
const int: number = 42;

// Arrays
const numberArray: number[] = [1, 2, 3];
const numberArray2: Array<number> = [1, 2, 3]; // generic type
const words: string[] = ['a', 'b'];
const contact: [string, number] = ['Test', 123]; // Tuple

// Any
let variable: any = 42;
variable = 'abc';


// Void type
function SayMyName(name: string): void {
  console.log(name)
}

// Never
function ThrowError(message: string): never {
  // Если упадет с ошибкой или содержит бесконечный цикл, то можно использовать never
  // А если не факт что упадет?
  throw new Error('error text')
}

// Type (aliases)
type Login = string
const login: Login = 'user';

type ID = string | number;
const userId: ID = 2;
const userId2: ID = 'a21';

type SomeType = null | undefined;








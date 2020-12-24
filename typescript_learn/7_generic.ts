// generic это все что указывается в угловых скобках?

const arrayOfNumbers: Array<number> = [1, 1, 2, 3, 5];
const arrayOfStrings: Array<string> = ['Hello', 'Vladilen'];

function reverse<T>(array: T[]): T[] {
  return array.reverse();
}
// <T> подстраивается под тип элементов входного массива? А как применять его не к массивам?
reverse(arrayOfNumbers);
reverse(arrayOfStrings);

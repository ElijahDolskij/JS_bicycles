function add(a: number, b: number): number {
  return a + b;
}

function toUpperCase(str: string): string {
  return str.trim().toUpperCase();
}




// реальный пример использования перегрузки функции?
// Интерфейсы и сама перегрузка
interface MyPosition {
  x: number | undefined,
  y: number | undefined,
}
interface MyPositionWithDefault extends MyPosition{
  default: string
}
function position(): MyPosition
function position(a: number): MyPositionWithDefault
function position(a: number, b: number): MyPosition
// Интерфейсы и сама перегрузка


// Имплементация функции
function position(a?: number, b?: number) {
 if (!a && !b) {
   return {
     x: undefined,
     y: undefined
   }
 }

 if (a && !b) {
   return {
     x: a,
     y: undefined,
     default: a.toString()
   }
 }

 return {
   x: b,
   y: b
 }
}
// Имплементация функции



// Использование
console.log('Empty', position());
console.log('With default', position(5));
console.log('Full', position(5, 5));
// Использование



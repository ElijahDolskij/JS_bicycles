// Допустим, у нас есть массив arr.
// Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr

const unique = (arr) => new Set(arr)
let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

//console.log(unique(values)) // Hare, Krishna, :-O
//--------------------------------------------------------

//Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

const aCleanOnArrayBased = (arr) => arr.reduce((acc, item) => { // На массивах
	const isIt = acc.some((it) => {
		const target = it.split('').map(f => f.toLowerCase())
		const itemArr = item.split('')
		
		return itemArr.length === target.length && itemArr.every((x) => target.includes(x.toLowerCase()))
	})
	
	if (!isIt) acc.push(item)
	return acc
}, [])

const aCleanOnMapBased = (arr) => Array.from( // Через Map
	new Map(
		arr.map(
			(item) => [
				item
				.toLowerCase()
				.split('')
				.sort()
				.join(''),
				item
			]
		)
	)
	.values()
)

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"]
// console.log(aCleanOnArrayBased(arr))
// console.log(aCleanOnMapBased(arr))
//--------------------------------------------------------

/*
Мы хотели бы получить массив ключей map.keys() в переменную и далее работать с ними,
например, применить метод .push.
Но это не выходит:

let map = new Map();
map.set("name", "John");
let keys = map.keys();

// Error: keys.push is not a function
// Ошибка: keys.push -- это не функция
keys.push("more");
*/

let map = new Map()
map.set("name", "John")
let keys = Array.from(map.keys())
keys.push("more")
//--------------------------------------------------------



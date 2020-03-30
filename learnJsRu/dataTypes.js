// JSON.parese exclude circular dependencies
let room = {
	number: 23
}

let meetup = {
	title: "Совещание",
	occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
	place: room
}

// цикличные ссылки
room.occupiedBy = meetup
meetup.self = meetup

const a = JSON.stringify(meetup, function replacer(key, value) {
	return (value === meetup && key !== '') ? undefined : value
})
// ------------------------------------


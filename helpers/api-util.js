export async function getAllEvents() {
	const req = await fetch(
		'https://nextjs-552d1-default-rtdb.firebaseio.com/events.json',
	);
	const data = await req.json();
	const allEvents = [];
	for (let i in data) {
		allEvents.push({
			id: i,
			...data[i],
		});
	}
	return allEvents;
}

export async function getFeaturedEvents() {
	const req = await getAllEvents();
	return req.filter((event) => event.isFeatured);
}

export async function getFilteredEvents(dateFilter) {
	const { year, month } = dateFilter;
	const req = await getAllEvents();
	let filteredEvents = req.filter((event) => {
		const eventDate = new Date(event.date);
		return (
			eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
		);
	});

	return filteredEvents;
}

export async function getEventById(id) {
	console.log(id);
	const req = await getAllEvents();
	return req.find((event) => event.id === id);
}

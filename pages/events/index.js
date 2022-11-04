import React from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/eventSearch';
import { getAllEvents } from '../../dummy-data';
import router, { useRouter } from 'next/router';
export default function AllEvents() {
	const event = getAllEvents();

	function findEventHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	}
	return (
		<>
			<EventSearch onSearch={findEventHandler} />
			<EventList items={event} />
		</>
	);
}

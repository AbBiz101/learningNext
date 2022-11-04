import React from 'react';
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data';

export default function AllEvents() {
	const event = getAllEvents();
	return (
		<div>
			<EventList items={event} />
		</div>
	);
}

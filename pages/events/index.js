import React from 'react';
import EventList from '../../components/events/EventList';
import EventSearch from '../../components/events/eventSearch';
import { getAllEvents } from '../../helpers/api-util';
import router, { useRouter } from 'next/router';

export default function AllEvents(props) {
	function findEventHandler(year, month) {
		const fullPath = `/events/${year}/${month}`;

		router.push(fullPath);
	}
	return (
		<>
			<EventSearch onSearch={findEventHandler} />
			<EventList items={props.events} />
		</>
	);
}

export async function getStaticProps() {
	const events = await getAllEvents();
	return {
		props: {
			events: events,
		},
		revalidate: 100,
	};
}

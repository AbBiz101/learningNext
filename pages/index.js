import React from 'react';
import EventList from '../components/events/EventList';
import { getFeaturedEvents } from '../helpers/api-util';

export default function Home(props) {
	return (
		<div>
			<EventList items={props.events} />
		</div>
	);
}

export async function getStaticProps() {
	const events = await getFeaturedEvents();

	return {
		props: {
			events: events,
		},
		revalidate: 1800
	};
}

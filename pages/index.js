import React from 'react';
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
	console.log(events);
	
	return {
		props: {
			events: events,
		},
	};
}

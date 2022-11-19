import React from 'react';
import { getEventById, getFeaturedEvents } from '../../helpers/api-util';
import EventSummary from './../../components/event-detail/event-summary';
import EventLogistics from './../../components/event-detail/event-logistics';
import EventContent from './../../components/event-detail/event-content';
import ErrorEvent from './../../components/ui/error-alert';

export default function EventDetail(props) {
	const event = props.event;
	if (!event) {
		return <ErrorEvent>No event found!</ErrorEvent>;
	}

	return (
		<>
			<EventSummary title={event.title} />
			<EventLogistics
				date={event.date}
				image={event.image}
				imageAlt={event.title}
				address={event.location}
			/>
			<EventContent>
				<p>{event.description}</p>
			</EventContent>
		</>
	);
}

export async function getStaticProps(context) {
	const id = context.params.id;
	const event = await getEventById(id);
	console.log(id, event);
	return {
		props: {
			event: event,
		},
		revalidate: 100,
	};
}

export async function getStaticPaths() {
	const events = await getFeaturedEvents();
	const paths = events.map((i) => ({ params: { id: i.id } }));
	return {
		paths: paths,
		fallback: true,
	};
}

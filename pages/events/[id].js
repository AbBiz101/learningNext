import React from 'react';
import { useRouter } from 'next/router';
import { getEventById, getAllEvents } from '../helpers/api-util';
import EventSummary from './../../components/event-detail/event-summary';
import EventLogistics from './../../components/event-detail/event-logistics';
import EventContent from './../../components/event-detail/event-content';
import ErrorEvent from './../../components/ui/error-alert';

export default function EventDetail(props) {
	const event = props.event;
	console.log(event);
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
	const eventID = context.params.id;
	const event = await getEventById(eventID);

	return {
		props: {
			event: event,
		},
	};
}

export async function getStaticPaths(context) {
	const events = await getAllEvents();
	const paths = events.map((i) => ({ params: { id: i.id } }));
	return {
		paths: paths,
		fallback: false,
	};
}

import React from 'react';
import { useRouter } from 'next/router';
import { getEventById } from '../../dummy-data';
import EventSummary from './../../components/event-detail/event-summary';
import EventLogistics from './../../components/event-detail/event-logistics';
import EventContent from './../../components/event-detail/event-content';
import ErrorEvent from './../../components/ui/error-alert'
export default function EventDetail() {
	const router = useRouter();
	const eventID = router.query.id;
	const event = getEventById(eventID);
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

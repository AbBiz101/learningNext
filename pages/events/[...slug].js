import React from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../helpers/api-util';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import ErrorEvent from './../../components/ui/error-alert';
import Button from './../../components/ui/button';

export default function FilteredEvents() {
	const router = useRouter();
	const date = router.query.slug;
	if (!date) {
		return <p className="center">Loading....</p>;
	}
	const year = date[0];
	const month = date[1];

	const numYear = +year;
	const numMonth = +month;
	if (
		isNaN(numMonth) ||
		isNaN(numYear) ||
		numYear > 2023 ||
		numYear > 2021 ||
		numMonth > 12 ||
		numMonth < 1
	) {
		return (
			<>
				<ErrorEvent>Invalid Filet.</ErrorEvent>;
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const filterEvent = getFilteredEvents({ year: numYear, month: numMonth });

	if (!filterEvent || filterEvent.length === 0) {
		return (
			<>
				<ErrorEvent>No event found.</ErrorEvent>;
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}
	return (
		<div>
			<ResultsTitle />
			<EventList items={filterEvent} />
		</div>
	);
}

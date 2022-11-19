import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getFilteredEvents } from '../../helpers/api-util';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title';
import ErrorEvent from './../../components/ui/error-alert';
import Button from './../../components/ui/button';
import useSWR from 'swr';
export default function FilteredEvents(props) {
	const router = useRouter();
	const filter = router.query.slug;
	const [getEvent, setGetEvent] = useState();
	const { data, error } = useSWR(
		'https://nextjs-552d1-default-rtdb.firebaseio.com/events.json',
	);

	useEffect(() => {
		if (data) {
			const events = [];
			for (let i in data) {
				events.push({
					id: i,
					...data[i],
				});
			}
			setGetEvent(events);
		}
	}, [data]);
	
	if (!getEvent) {
		return <p className="center">Loading....</p>;
	}
	// const year = filter[0];
	// const month = filter[1];

	// const numYear = +year;
	// const numMonth = +month;
	if (props.hasError) {
		return (
			<>
				<ErrorEvent>Invalid Filet.</ErrorEvent>;
				<div className="center">
					<Button link="/events">Show All Events</Button>
				</div>
			</>
		);
	}

	const filterEvent = props.events;
	const date = new Date(props.date.year, props.date.month - 1);
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
			<ResultsTitle date={data} />
			<EventList items={filterEvent} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const { params } = context;
	const date = params.slug;

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
		return {
			props: { hasError: true },
		};
	}

	const filterEvent = await getFilteredEvents({
		year: numYear,
		month: numMonth,
	});
	return {
		props: {
			events: filterEvent,
			date: {
				year: numYear,
				month: numMonth,
			},
		},
	};
}

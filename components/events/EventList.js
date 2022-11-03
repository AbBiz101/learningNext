import React from 'react';
import SingleEvent from './SingleEvent';

export default function EventList(props) {
	const { items } = props;
	return (
		<div>
			{items.map((event) => (
				<SingleEvent
					key={event.id}
					id={event.id}
					date={event.date}
					title={event.title}
					image={event.image}
					location={event.location}
					isFeatured={event.isFeatured}
					description={event.description}
				/>
			))}
		</div>
	);
}

import React from 'react';
import SingleEvent from './SingleEvent';
import classes from "./event-list.module.css"
export default function EventList(props) {
	const { items } = props;
	return (
		<div className={classes.list}>
			{ items.map((event) => (
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

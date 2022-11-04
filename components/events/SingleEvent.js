import React from 'react';
import Link from 'next/link';
import classes from "./event-item.module.css"
export default function SingleEvent(props) {
	const { id, title, description, location, image, date, time, isFeatured } =
		props;
	const humanDate = new Date(date).toLocaleDateString('de', {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
	const url = `/event/${id}`;
	const formattedAddress = location.replace(',', '\n');
	return (
		<li className={classes.item}>
			<img src={'/' + image} alt={title} />
			<div className={classes.content}>
				<div className={classes.summary}>
					<h2>{title}</h2>
					<div className={classes.date}>
						<time>{humanDate}</time>
					</div>
					<div className={classes.address}>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Link href={url}>Explore Event</Link>
				</div>
			</div>
		</li>
	);
}
import React from 'react';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
import classes from './event-item.module.css';
export default function SingleEvent(props) {
	const { id, title, description, location, image, date, time, isFeatured } =
		props;
	const humanDate = new Date(date).toLocaleDateString('en-US', {
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
						<DateIcon />
						<time>{humanDate}</time>
					</div>
					<div className={classes.address}>
						<AddressIcon />
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div className={classes.actions}>
					<Button link={url} >
						<span>Explore Event</span>
						<span className={classes.icon}>
							<ArrowRightIcon />
						</span>
					</Button>
				</div>
			</div>
		</li>
	);
}

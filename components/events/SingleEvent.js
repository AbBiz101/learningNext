import React from 'react';
import Link from 'next/link';

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
		<li>
			<img src={'/' + image} alt={title} />
			<div>
				<div>
					<h2>{title}</h2>
					<div>
						<time>{humanDate}</time>
					</div>
					<div>
						<address>{formattedAddress}</address>
					</div>
				</div>
				<div>
					<Link href={url}></Link>
				</div>
			</div>
		</li>
	);
}

// 		title: 'Programming for everyone',
// 		description:
// 			'Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.',
// 		location: 'Somestreet 25, 12345 San Somewhereo',
// 		date: '2021-05-12',
// 		image: 'images/coding-event.jpg',
// 		isFeatured: false,

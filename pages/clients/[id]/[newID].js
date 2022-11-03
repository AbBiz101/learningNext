import React from 'react';
import { useRouter } from 'next/router';
export default function index() {
	const router = useRouter();
	console.log(router.query);

	return <div>12</div>;
}

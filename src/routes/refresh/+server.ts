import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';
import { json } from '@sveltejs/kit';

export async function POST({ fetch, request }) {
	const { refresh_token } = await request.json();

	const body = new URLSearchParams();
	body.append('refresh_token', refresh_token);
	body.append('client_id', CLIENT_ID);
	body.append('client_secret', CLIENT_SECRET);
	body.append('grant_type', 'refresh_token');

	const res = await fetch('https://id.getharvest.com/api/v2/oauth2/token', {
		method: 'POST',
		headers: {
			'User-Agent': 'Scythe App (seanrcollings@gmail.com)',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
	});

	const data = await res.json();

	return json({ access_token: data.access_token });
}

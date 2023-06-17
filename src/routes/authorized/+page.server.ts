import { CLIENT_ID, CLIENT_SECRET } from '$env/static/private';

export async function load({ url, fetch }) {
	const code = url.searchParams.get('code') as string;

	const body = new URLSearchParams();
	body.append('code', code);
	body.append('client_id', CLIENT_ID);
	body.append('client_secret', CLIENT_SECRET);
	body.append('grant_type', 'authorization_code');

	const res = await fetch('https://id.getharvest.com/api/v2/oauth2/token', {
		method: 'POST',
		headers: {
			'User-Agent': 'Scythe (seanrcollings@gmail.com)',
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body
	});

	const data = await res.json();

	return { res: btoa(`${data.access_token}+${data.refresh_token}`) };
}

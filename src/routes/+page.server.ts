import { CLIENT_ID } from '$env/static/private';
import { redirect } from '@sveltejs/kit';

export function load() {
	throw redirect(
		302,
		`https://id.getharvest.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=code`
	);
}

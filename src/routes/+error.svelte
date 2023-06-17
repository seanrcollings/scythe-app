<script>
	import { page } from '$app/stores';
</script>

<h1>{$page.status}</h1>
<p>{$page.error?.message}</p>

<style>
	p {
		color: #888;
		max-width: 30rem;
	}
</style>

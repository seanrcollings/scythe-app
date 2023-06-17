<main>
	<slot />
</main>

<style>
	:global(body),
	:global(html) {
		margin: 0;
		padding: 0;
		font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode',
			Geneva, Verdana, sans-serif;
	}

	main {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #222;
		color: white;
	}
</style>

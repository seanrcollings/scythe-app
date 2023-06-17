<script lang="ts">
	export let data;
</script>

<main>
	<h1>You've been Authenticated</h1>
	<p>Copy the code below and paste it into your terminal to authenticate the CLI.</p>
	<div class="container">
		<input class="code" value={data.res} readonly />
		<button
			on:click={() => {
				navigator.clipboard.writeText(data.res);
			}}
		>
			<span class="material-symbols-outlined"> content_copy </span>
		</button>
	</div>
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

	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		/* padding: 1rem; */
		border-radius: 0.5rem;
		font-size: 2rem;
		background-color: #454545;
		color: white;
		width: clamp(20rem, 80%, 40rem);
	}

	.code {
		margin-right: 1rem;
		flex: 1;
		padding: 1rem;
		background-color: transparent;
		border: none;
		color: white;
		font-size: 2rem;
	}

	.code:focus {
		outline: none;
	}

	button {
		background-color: #333;
		border: none;
		color: white;
		padding: 1rem;
		height: 100%;
		border-radius: 0 0.5rem 0.5rem 0;
	}

	button:hover {
		cursor: pointer;
		background-color: #363636;
	}

	.material-symbols-outlined {
		font-size: 2rem;
	}
</style>

<script lang="ts">
	import { receive } from './transitions';
	import { get_twemoji_path } from './utils';

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<div class="pair">
			<img in:receive={{ key: `${emoji}:a` }} alt={emoji} src={get_twemoji_path(emoji)} />
			<img in:receive={{ key: `${emoji}:b` }} alt={emoji} src={get_twemoji_path(emoji)} />
		</div>
	{/each}
</div>

<style>
	.found {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5em;
		margin-top: 16px;
	}
	.pair {
		width: 10em;
		height: 10em;
		background: white;
		padding: 1em;
		border-radius: 50%;
		filter: drop-shadow(0.2em 0.2em 0.5em rgba(0, 0, 0, 0.2));
		margin-inline: 1em;
	}
	img {
		position: absolute;
		width: 8em;
		height: 8em;
	}
</style>

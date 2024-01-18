<script lang="ts">
	import { get_twemoji_path } from './utils';

	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;
</script>

<div class="square" class:flipped={selected}>
	<button on:click></button>
	{#if !found}
		<img alt={emoji} src={get_twemoji_path(emoji)} />
	{/if}
</div>

<style>
	.square {
		display: flex;
		background: greenyellow;
		justify-content: center;
		align-items: center;
	}

	.flipped button {
		background: rgba(255, 0, 0, 0.345);
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
	}

	img {
		width: 8em;
		height: 8em;
		pointer-events: none;
	}
</style>

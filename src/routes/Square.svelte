<script lang="ts">
	import { send } from './transitions';
	import { get_twemoji_path } from './utils';

	export let emoji: string;
	export let selected: boolean;
	export let found: boolean;
	export let group: 'a' | 'b';
</script>

<div class="square" class:flipped={selected || found}>
	<button on:click></button>
	<div class="background"></div>
	{#if !found}
		<img out:send={{ key: `${emoji}:${group}` }} alt={emoji} src={get_twemoji_path(emoji)} />
	{/if}
</div>

<style>
	.square {
		display: flex;
		align-items: center;
		justify-content: center;
		transition: filter 0.2s;
		transform-style: preserve-3d;
		transition: transform 0.4s;
		user-select: none;
		border-radius: 3em;
	}

	.square * {
		backface-visibility: hidden;
		border-radius: 3em;
	}

	.flipped {
		background: #eee;
		transform: rotateY(180deg);
	}

	.background {
		position: absolute;
		background: white;
		border: 0.5em dashed #efe;
		transform: rotateY(180deg);
		width: 100%;
		height: 100%;
	}

	button {
		position: absolute;
		width: 100%;
		height: 100%;
		background: #eee;
		border: 0;
		font-size: inherit;
	}

	img {
		width: 8em;
		height: 8em;
		pointer-events: none;
		transform: rotateY(180deg);
	}
</style>

<script lang="ts">
	import { get_twemoji_path } from './utils';

	export let found: string[];
</script>

<div class="found">
	{#each found as emoji (emoji)}
		<img alt={emoji} src={get_twemoji_path(emoji)} />
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
	img {
		width: 8em;
		height: 8em;
		margin: 6px;
	}
</style>

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Square from './Square.svelte';

	export let grid: string[];
	export let found: string[];

	const dispatch = createEventDispatcher();

	// -1 : unselected
	let cardA: number = -1;
	let cardB: number = -1;
	let resetTimeout: number;
</script>

<div class="grid">
	{#each grid as emoji, i}
		<Square
			{emoji}
			on:click={() => {
				clearTimeout(resetTimeout);
				if (cardA === -1 && cardB === -1) {
					cardA = i;
				} else if (cardB === -1) {
					cardB = i;
					if (grid[cardA] === grid[cardB]) {
						// Correct emoji
						console.log('Correct emoji');
						dispatch('found', {
							emoji
						});
					} else {
						// Incorrect emoji
						console.log('Incorrect emoji');
						resetTimeout = setTimeout(() => {
							cardA = cardB = -1;
						}, 300);
					}
				} else {
					cardB = -1;
					cardA = i;
				}
			}}
			selected={cardA === i || cardB === i}
			found={found.includes(emoji)}
		/>
	{/each}
</div>

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		grid-gap: 0.2rem;
		height: 100%;
		perspective: 100vw;
	}
</style>

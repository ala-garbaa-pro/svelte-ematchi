<script lang="ts">
	export let remaining: number;
	export let duration: number;
</script>

<div class="countdown">
	<!-- Icon from: https://pictogrammers.com/ -->
	<button
		><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
			><title>pause</title><path
				d="M15,16H13V8H15M11,16H9V8H11M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"
				fill="#AAA"
			/></svg
		></button
	>
	<div class="duration">
		<div class="remaining" style="--p: {remaining / duration}"></div>
	</div>
</div>

<style>
	.countdown {
		display: flex;
		align-items: center;
		gap: 1em;
	}

	button {
		font-size: 8em;
		width: 1em;
		height: 1em;
		background: transparent;
		border: 0;
	}

	button svg {
		position: absolute;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		cursor: pointer;
	}

	.duration {
		flex: 1;
		height: 1em;
		background: #49722f46;
	}

	.remaining {
		position: absolute;
		width: calc(100% * var(--p));
		height: 100%;
		background: #49722fd3;
	}
</style>

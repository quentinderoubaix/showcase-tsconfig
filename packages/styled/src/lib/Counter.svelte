<script lang="ts" context="module">
    import { buttonStateFactory } from '@qderoubaix/headless/button';
    import { computed, writable } from '@amadeus-it-group/tansu';
</script>

<script lang="ts">
    const counter = writable(0);
    const doubleCounter = computed(() => counter() * 2);
    const {label, onClick} = buttonStateFactory({label: 'Increase', onClick: () => {counter.update(current => current + 1)}});
</script>

<div>Counter: {$counter}</div>
<div>Double Counter: {$doubleCounter}</div>

<button on:click={$onClick}>{$label}</button>

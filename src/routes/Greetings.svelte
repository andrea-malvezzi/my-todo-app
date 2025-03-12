<script lang="ts">
    let {
        username
    } : {
        username? : string
    } = $props();
</script>

<!-- modify head tag -->
<svelte:head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- This is ugly for long names. Choose a chars max amount and/or swap the name with dots (...) -->
    <title>{ username ? username + "'s To Do List!" : "Your To Do List" }</title>
</svelte:head>

<!-- TODO: for long names this bugs out. Choose a chars max amount -->
<h1 class="text-xl text-template-text">{ username ? "Welcome, " + username + '!' : "Welcome!" }</h1>
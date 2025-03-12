<script lang="ts">
    import Greetings from "./Greetings.svelte";
    import To_do_list from "./To_do_list.svelte"; 
    let username : string | undefined = $state();
</script>

<div class="w-screen h-screen overflow-x-hidden font-Comfortaa flex flex-col justify-center items-center bg-template-bg">
    <div class="flex flex-col justify-center items-center w-3/4">
        <Greetings {username} />
        <!-- maybe make this a toast notification with an input to be less intrusive -->
        <input type="text" bind:value={username}
            class="text-center rounded-lg w-full"
            placeholder="What would you like to be called?"
        />
        <To_do_list />
    </div>
</div>

<style lang="postcss">
    @reference "tailwindcss";
</style>
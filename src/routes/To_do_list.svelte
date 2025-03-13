<script lang="ts">
    import { onMount } from "svelte";
    import To_do_item from "./To_do_item.svelte";
    import Add_to_do_item from "./Add_to_do_item.svelte";
    import type { Items } from "../types/interfaces.ts";

    // when localStorage gets updated, fetch latest item.
    // render last item after fetching it.
    // at website start, fetch items.
    let items: Items = {};

    onMount(() => {
        const storedItems = localStorage.getItem('toDoItems');

        if (storedItems)
            items = JSON.parse(storedItems);
    })

    function updateLocalStorage() {
        localStorage.setItem('toDoItems', JSON.stringify(items));
    }

    function handleAddToDoItem(newItem: { title: string; content: string }) {
        let nextKey = Object.keys(items).length;
        items[nextKey] = { title: newItem.title, content: newItem.content };
        updateLocalStorage();
    }
</script>

<div class="w-full max-h-[50vh] flex flex-col">
    <Add_to_do_item onAddToDoItem={handleAddToDoItem}/>
    <ul class="text-center mt-2 w-full flex flex-col max-h-full overflow-y-scroll">
        {#each Object.entries(items) as item}
            <To_do_item title={item[1]['title']} content={item[1]['content']} />
        {/each}
    </ul>
</div>
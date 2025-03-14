<script lang="ts">
    import { onMount } from "svelte";
    import To_do_item from "./To_do_item.svelte";
    import Add_to_do_item from "./Add_to_do_item.svelte";
    import type { Item } from "../types/interfaces.ts";

    // when localStorage gets updated, fetch latest item.
    // render last item after fetching it.
    // at website start, fetch items.
    let items: Item[] = $state([]);

    onMount(() => {
        const storedItems = localStorage.getItem('toDoItems');

        if (storedItems)
            items = JSON.parse(storedItems);
    })

    function updateLocalStorage() {
        localStorage.setItem('toDoItems', JSON.stringify(items));
    }

    function handleAddToDoItem(newItem: Item) {
        items.push({ title: newItem.title, content: newItem.content, done: newItem.done });
        updateLocalStorage();
    }

    function handleRemoveToDoItem(indexToBeDeleted: number) {
        items.splice(indexToBeDeleted, 1);
        updateLocalStorage();
    }

    function handleToDoItemCheckedStatus(indexToBeModified: number) {
        items[indexToBeModified].done = !items[indexToBeModified].done;
        updateLocalStorage();
    }
</script>

<div class="w-full max-h-[50vh] flex flex-col">
    <Add_to_do_item onAddToDoItem={handleAddToDoItem}/>
    <ul class="text-center mt-2 w-full flex flex-col max-h-full overflow-y-scroll">
        {#each items as item, index}
            <To_do_item
                title={item['title']} content={item['content']} done={item['done']} {index}
                onRemoveToDoItem={handleRemoveToDoItem} 
                onChangeCheckedStatus={handleToDoItemCheckedStatus}/>
        {/each}
    </ul>
</div>
<script lang="ts">
    import { onMount } from "svelte";
    import { dndzone, type DndEvent } from "svelte-dnd-action";
    import { flip } from "svelte/animate";
    import To_do_item from "./To_do_item.svelte";
    import Add_to_do_item from "./Add_to_do_item.svelte";
    import type { Item } from "../types/interfaces.ts";

    // when localStorage gets updated, fetch latest item.
    // render last item after fetching it.
    // at website start, fetch items.
    let items: Item[] = $state([]);

    onMount(() => {
        const storedItems = localStorage.getItem('toDoItems');

        if (storedItems) {
            items = JSON.parse(storedItems).map((item: any) => ({
                ...item,
                id: item.id ?? generateId(),
            }));
        }
        updateLocalStorage();
    });

    function updateLocalStorage() {
        localStorage.setItem('toDoItems', JSON.stringify(items));
    }

    function generateId(): number {
        return Date.now() % 1_000_000;
    }

    function handleAddToDoItem(newItem: Item) {
        items.push({ id: generateId(), title: newItem.title, content: newItem.content, done: newItem.done });
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

    function handleReorder(event: CustomEvent<DndEvent<Item>>) : void {
        if (event.detail.items) {
            items = [...event.detail.items];
            updateLocalStorage();
        }
    }
</script>

<div class="w-full max-h-[50vh] flex flex-col">
    <Add_to_do_item onAddToDoItem={handleAddToDoItem}/>
    <ul
        class="text-center mt-2 w-full flex flex-col max-h-full overflow-y-scroll touch-pan-y"
        use:dndzone={{ items }}
        onconsider={handleReorder}
        onfinalize={handleReorder}
    >
        {#each items as item, index (item.id)}
            <div animate:flip={{duration: 300}}>
            <To_do_item
                id={item['id']} title={item['title']} content={item['content']} done={item['done']} {index}
                onRemoveToDoItem={handleRemoveToDoItem} 
                onChangeCheckedStatus={handleToDoItemCheckedStatus}/>
            </div>
        {/each}
    </ul>
</div>
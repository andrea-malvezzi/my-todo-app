<script lang="ts">
    import { LockOpen, Check, Trash2 } from 'lucide-svelte';
    import type { Item } from '../types/interfaces';

    // Properties retrieved from To_do_list.svelte passed on component usage
    let { title, content, done, onRemoveToDoItem} : {
        title               : string;
        content             : string;
        done                : boolean;
        onRemoveToDoItem    : (item: Item) => void;
    } = $props();

    function toDoItemValidityHandler() {
        done = !done;
    }

    function handleRemove() {
        // You can pass the current item (with its data) to the onRemoveToDoItem function
        const item: Item = { title, content, done };
        onRemoveToDoItem(item);
    }

</script>
<!-- <li class="mt-1 bg-template-accent rounded-md w-full relative"> -->
<li class="mt-1 bg-template-accent flex flex-row items-center justify-between rounded-md w-full px-2 {done ? 'line-through bg-template-accent-disabled' : ''}">
    <div class="flex flex-col w-full">
        <h2 class="text-lg">{title}</h2>
        <span>{content}</span>
    </div>
    <div class="flex flex-col justify-evenly ml-2 space-y-2">
        <button class="ml-2" onclick={toDoItemValidityHandler}>
            {#if done}
                <LockOpen size={20} color="green" />
            {:else}
                <Check size={20} color="green" />
            {/if}
        </button>
        <button class="ml-2" onclick={handleRemove}>
            <Trash2 size={20} color="red" />
        </button>
    </div>
    <!-- add two button, one to check and one to mark as done, on the side -->
</li>
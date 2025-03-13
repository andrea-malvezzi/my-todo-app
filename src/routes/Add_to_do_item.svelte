<script lang="ts">
    import { Plus, X, Check, DoorClosed } from 'lucide-svelte';
    import { createEventDispatcher } from 'svelte';
    import { fade } from 'svelte/transition';
    import type { Item } from "../types/interfaces.ts";
    
    // Callback property that the parent component must provide
    export let onAddToDoItem: (item: Item) => void;

    let visibilityFlag = false;
    let newToDoItem : Item = { title: '', content: '' };

    function showAddItemForm(){
        visibilityFlag = !visibilityFlag;
    }

    function addToDoItem() {
        if (newToDoItem.title && newToDoItem.content){
            onAddToDoItem(newToDoItem);
            newToDoItem = { title: '', content: ''};
            visibilityFlag = false;
        }
    }
</script>
<div class="border-4 mt-2 border-green-200 text-green-200 flex flex-row justify-center rounded-md">
    {#if visibilityFlag}
        <form transition:fade class="flex flex-col justify-center">
            <input type="text" class="mt-1 border-1 border-gray-400 rounded-sm text-template-text" bind:value={newToDoItem.title} placeholder="Give your to-do a title!">
            <input type="text" class="mt-1 border-1 border-gray-400 rounded-sm text-template-text" bind:value={newToDoItem.content} placeholder="Add some extra notes!">
            <div class="flex flex-row justify-evenly w-full">
                <button on:click={showAddItemForm}>
                    <X size={24} color="red" />
                </button>
                <button on:click={addToDoItem}>
                    <Check size={24} />
                </button>
            </div>
        </form>
    {:else}
        <button on:click={showAddItemForm}>
            <Plus size={24}/>
        </button>
    {/if}
</div>
<script lang="ts">
    import { Plus, X, Check } from 'lucide-svelte';
    import { fade } from 'svelte/transition';
    import type { Item } from "../types/interfaces.ts";
    
    // Callback property that the parent component must provide
    export let onAddToDoItem: (item: Item) => void;

    const maxTitleLength    = 100;
    const maxContentLength  = 300;

    let visibilityFlag = false;
    let newToDoItem : Item = { title: '', content: '', done : false };

    function showAddItemForm(){
        visibilityFlag = !visibilityFlag;
    }

    function addToDoItem() {
        if (newToDoItem.title && newToDoItem.content){
            onAddToDoItem(newToDoItem);
            newToDoItem = { title: '', content: '', done : false };
            visibilityFlag = false;
        }
    }
</script>
<div class="border-4 mt-2 border-green-200 flex flex-row justify-center rounded-md">
    {#if visibilityFlag}
        <form transition:fade class="flex flex-col justify-center">
            <input
                type="text"
                class="mt-1 border-1 border-gray-400 rounded-sm text-template-text"
                bind:value={newToDoItem.title}
                maxlength={maxTitleLength}
                placeholder="Give your to-do a title!">
            <textarea
                class="mt-1 border-1 border-gray-400 rounded-sm text-template-text"
                bind:value={newToDoItem.content}
                maxlength={maxContentLength}
                placeholder="Add some notes!"
            ></textarea>
            <div class="flex flex-row justify-evenly w-full">
                <button on:click={showAddItemForm}>
                    <X size={24} color="red" />
                </button>
                <button on:click={addToDoItem}>
                    <Check size={24} color="green" />
                </button>
            </div>
        </form>
    {:else}
        <button on:click={showAddItemForm}>
            <Plus size={24} color="green" />
        </button>
    {/if}
</div>
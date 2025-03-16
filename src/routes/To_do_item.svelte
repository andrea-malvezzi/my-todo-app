<script lang="ts">
    import { LockOpen, Check, Trash2 } from 'lucide-svelte';
    import { marked } from 'marked';

    // Properties retrieved from To_do_list.svelte passed on component usage
    let { id, title, content, done, index, onRemoveToDoItem, onChangeCheckedStatus} : {
        id                      : number,
        title                   : string;
        content                 : string;
        done                    : boolean;
        index                   : number;
        onRemoveToDoItem        : (indexToBeRemoved: number) => void;
        onChangeCheckedStatus   : (indexToBeModified: number) => void;
    } = $props();

    function applyMarkdownStyles(node : HTMLElement) {
        const lists = node.querySelectorAll<HTMLUListElement | HTMLOListElement>('ul, ol');
        lists.forEach(list => {
            if (list.tagName === 'UL') {
                list.classList.add('list-disc');
            } else {
                list.classList.add('list-decimal');
            }
            list.classList.add('text-left');
            list.classList.add('list-outside');
            list.classList.add('pl-6');
        });
    
        return {};
    }

    function toDoItemValidityHandler() {
        done = !done;
        onChangeCheckedStatus(index);
    }

    function handleRemove() {
        onRemoveToDoItem(index);
    }

</script>
<li 
    id={id.toString()}
    class="mt-1 bg-template-accent flex flex-row items-center justify-between rounded-md w-full px-2 {done ? 'line-through bg-template-accent-disabled' : ''}"
>
    <div class="flex flex-col w-full">
        <h2 class="text-lg">{title}</h2>
        <div use:applyMarkdownStyles>{@html marked(content)}</div>
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
</li>
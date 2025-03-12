<script lang="ts">
    import To_do_item from "./To_do_item.svelte";
    import Add_to_do_item from "./Add_to_do_item.svelte";
    import type { Items } from "../types/interfaces.ts";

    let items: Items = {
        1 : {
            title : "test title",
            content : "test content test content test content test content test content test content"
        },
        2 : {
            title : "test title 2",
            content : "test content test content test content test content test content test content"
        },
        3 : {
            title : "test title 2",
            content : "test content test content test content test content test content test content"
        },
        4 : {
            title : "test title 2",
            content : "test content test content test content test content test content test content"
        },
        5 : {
            title : "test title 2",
            content : "test content test content test content test content test content test content"
        },
        6 : {
            title : "test title 2",
            content : "test content test content test content test content test content test content"
        },
        7 : {
            title : "test title 2",
            content : "test content test content test content test content test content test content"
        }
    };
</script>

<div class="w-full">
    <ul class="text-center mt-2 w-full">
        <Add_to_do_item />
        {#each Object.entries(items) as item}
            <To_do_item title={item[1]['title']} content={item[1]['content']} />
        {/each}
    </ul>
</div>
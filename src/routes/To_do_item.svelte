<script lang="ts">
    import type { Item } from "../types/interfaces.ts";
    let { title, content } : Item = $props();
</script>
<li class="mt-1 bg-template-accent rounded-md w-full">
    <h2 class="text-lg">{title}</h2>
    <span>{content}</span>
    <!-- add two button, one to check and one to mark as done, on the side -->
</li>
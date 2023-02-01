<!-- svelte-ignore a11y-click-events-have-key-events -->
<script lang="ts">
    // State Management
    import { chapter, witchlightChaptersList } from '../../appStore';

    const changeChapter = (newChapter: number) => {
        $chapter = newChapter;
    }
</script>

<article>
    <h1>Wild Beyond the Witchlight</h1>
    <h3>Chapter Select</h3>
    <ul>
        {#each witchlightChaptersList as chapterInList, i}
            <li on:click={()=>{changeChapter(i)}}><a href={chapterInList.link}>{chapterInList.name}</a></li>
        {/each}
    </ul>
</article>

<style>

</style>
<script lang="ts">
    import { page, chapter, topic, witchlightChaptersList, hitherTopicsList } from '../../appStore';
    import { hitherStrings } from '../witchlight/hither-strings';
</script>

<nav>
    <select name="page-select" id="page-select" bind:value={$page}>
        <option value={0}>Page Select</option>
        <option value={1}>Wilds Beyond the Witchlight</option>
    </select> 

    {#if $page !== 0}
    <select name="chapter-select" id="chapter-select" bind:value={$chapter}>
        {#each witchlightChaptersList as chapterInList, i}
            <option value={i}><a href={chapterInList.link}>{chapterInList.name}</a></option>
        {/each}
    </select>
    {/if}

    {#if $page !== 0 && $chapter !== 0}
    <select name="topic-select" id="topic-select" bind:value={$topic}>
        {#each hitherTopicsList as topicInList, i}
            <option value={i}><a href={topicInList.link}>{topicInList.name}</a></option>
        {/each}
    </select>
    {/if}
</nav>

<style>
    select{
        color: rgba(225, 225, 225, 80%);
        font-weight: 600;

        padding: 5px 10px;

        border: 1px solid rgba(0, 0, 0, 30%);
        border-radius: 4px;
        background: rgba(225, 225, 225, 25%);
    }

    option::before {
        background: rgba(225, 225, 225, 25%);
        margin: 0px;
        padding: 0px;
        border: 0px ;
    }

    optgroup{
        background: none;
    }

    option{
        border: none;
        color: rgba(225, 225, 225, 80%);

        font-weight: 600;
        background: #004874;
    }
</style>
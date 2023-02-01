<script lang="ts">
    import RippleContainer from "../../../../components/common/RippleContainer.svelte";
    import SoundboardButton from "../../../../components/common/SoundboardButton.svelte";
    import FetidSwamp from "../../../../assets/Fetid Swamp.mp3";

    import { hitherStrings } from "../../../../components/witchlight/hither-strings";
</script>

<span class="flex-row flex-grow header"><h1>O-wells</h1></span>
<article class="flex-row">
    <!--COLUMN 1-->
    <section class="soundboard-panel flex-column">
        <h2>Soundboard</h2>
        <div class="flex-row flex-wrap soundboard-buttons width-100">
            <RippleContainer><SoundboardButton sound={FetidSwamp} text='Fetid Swamp' isLooped={true}/></RippleContainer>
        </div>
    </section>
    <!--COLUMN 2-->
    <article class="flex-row flex-grow module-text">
        <section>
            <h3>Camping in Hither</h3>
            <p>{hitherStrings.overview.camping}</p>
            <h3>Camp Table</h3>
            <ol>
                {#each hitherStrings.overview.campingTable as campResult}
                    <li>{campResult}</li>
                {/each}
            </ol>
        </section>
    </article>
</article>

<style>
    .header{
        text-align: center;
        align-items: center;
        justify-content: center;
    }

    .soundboard-panel{
        display:flex;
        justify-content: flex-start;
        align-items: center;
        flex-grow: 1;

        margin: 0px 10px;
        padding: 10px 25px;
    
        border-radius: 25px;

        background: #101112;
    }

    .soundboard-buttons{
        justify-content: space-between;
    }

    .module-text{
        display:flex;
        justify-content: space-evenly;
        width: calc(75vw - 20px);
    }
</style>
<script lang="ts">
    import RippleContainer from "../../../../components/common/RippleContainer.svelte";
    import SoundboardButton from "../../../../components/common/SoundboardButton.svelte";
    import FetidSwamp from "../../../../assets/Fetid Swamp.mp3";

    import { hitherStrings } from "../../../../components/witchlight/hither-strings";
</script>

<span class="flex-row flex-grow header"><h1>Brigands' Tollway</h1></span>
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
            <h3>READ Entering the Brigands' Tollway</h3>
            <pre>{hitherStrings.brigands.enteringTollway}</pre>

            <h3>Running the Encounter</h3>
            <pre>{hitherStrings.brigands.runningEncounter}</pre>

            <h3>Encounter on the Tollway</h3>
            <pre>{hitherStrings.brigands.encounter}</pre>

            <h3>The Stump</h3>
            <pre>{hitherStrings.brigands.theStump}</pre>

            <h3>Capture</h3>
            <pre>{hitherStrings.brigands.capture}</pre>

            <h3>Marriage</h3>
            <pre>{hitherStrings.brigands.marriage}</pre>
        </section>
    </article>
</article>

<style>
    pre{
        font-family: rustyCola, fantasy, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        
        margin: 0px 35px;
    }

    section{
        margin-bottom: 35px;
    }

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

        margin: 0px 10px 35px 10px;
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
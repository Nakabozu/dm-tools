<script lang="ts">
    import SoundboardButton from "../../../../components/common/SoundboardButton.svelte";
    import Footsteps from "../../../../assets/EchoingFootstepsStone.mp3";
    import KeysJingling from "../../../../assets/KeysJingling.mp3";

    import { hitherStrings } from "../../../../components/witchlight/hither-strings";
</script>

<span class="flex-row flex-grow header"><h1>Telemy Hill</h1></span>
<article class="flex-row">
    <!--COLUMN 1-->
    <section class="soundboard-panel flex-column">
        <h2>Soundboard</h2>
        <div class="flex-row flex-wrap soundboard-buttons width-100">
            <SoundboardButton sound={Footsteps} text='Footsteps' isLooped={true}/>
            <SoundboardButton sound={KeysJingling} text='Keys Jingling' isLooped={true}/>
        </div>
    </section>
    <!--COLUMN 2-->
    <article class="flex-row module-text flex-grow">
        <section>
            <h3>Meeting Jingle Jangle</h3>
            <p>{hitherStrings.telemyHill.meetingJingle}</p>
            <h3>Descending</h3>
            <p>{hitherStrings.telemyHill.jinglesChamber}</p>
            <h3>Insight Check</h3>
            <p>{hitherStrings.telemyHill.insight}</p>
            <h3>Jingle Jangle's Tale of Woe</h3>
            <p>{hitherStrings.telemyHill.taleOfWoe}</p>
            <h3>Offerings to Jingle Jangle</h3>
            <p>{hitherStrings.telemyHill.offerings}</p>
            <h3>Descending to the Core</h3>
            <p>{hitherStrings.telemyHill.theCore}</p>
            <h3>About Fear Itself</h3>
            <p>{hitherStrings.telemyHill.fearItself}</p>
            <h3>First Encounter with Fear Itself</h3>
            <pre>{hitherStrings.telemyHill.fearItselfEncounter}</pre>
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
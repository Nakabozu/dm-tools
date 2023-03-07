<script lang="ts">
    import { hitherStrings } from "../../../../components/witchlight/hither-strings";
</script>

<span class="header"><h1>Useful Hither Tables</h1></span>
<article>
    <section>
        <h3>Carousing Companions</h3>
        <ol>
            {#each hitherStrings.tables.carousingCompanions as companion, i}
            <li><a target="_blank" href={companion.link}>{companion.desc}</a></li>
            {/each}
        </ol>
        <h3>Researching Romance</h3>
        <ol>
            {#each hitherStrings.tables.researchingRomance as companion, i}
            <li>{companion.desc}</li>
            {/each}
        </ol>
        <h3>Romantic Gestures</h3>
        <ol>
            {#each hitherStrings.tables.romanticGestures as companion, i}
            <li>{companion.desc}</li>
            {/each}
        </ol>
    </section>
</article>

<style>
    pre{
        font-family: rustyCola, fantasy, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        overflow-x: auto;
        white-space: pre-wrap;
        word-wrap: break-word;
        
        margin: 0px 35px;
    }

    a{
        color: #CCDDFF;
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
<script lang="ts">
    let isTimerActive = false;
    let chordCount: number = 0;
    let defaultTimeLeft = 60;
    let timeLeft = defaultTimeLeft;

    function startTimer(){
        isTimerActive = true;
        const totalTimeAllowed = timeLeft;
        let startTime = Date.now();
        chordCount = 0;
        
        const intervalTimer = setInterval(()=>{
            timeLeft = totalTimeAllowed - Math.floor((Date.now() - startTime)/1000);
            if(timeLeft <= 0){
                reset(intervalTimer);
            }
        }, 100);
        
        timeLeft = defaultTimeLeft;
    }

    function reset(intervalTimer?: NodeJS.Timer){
        if(intervalTimer){
            clearInterval(intervalTimer);
        }
        isTimerActive = false;
        chordCount = 0;
        timeLeft = defaultTimeLeft;
    }
</script>

<h1>Practice your chords!</h1>
<article on:keypress={
    (e)=>{console.log(e); 
    if(e.code === 'Space' && isTimerActive){chordCount++;}}}>
    {#if isTimerActive}
        <h2>GO GO GO!  You have {timeLeft}s</h2>
        <h3>Chord Count: {chordCount}</h3>
    {/if}
    <section>
        {#if !isTimerActive}
            <input type="number" value={defaultTimeLeft}/>
            <button on:click={startTimer}>Click to start!</button>
        {:else}
            <button on:click={()=>{reset()}}>Reset</button>
        {/if}
    </section>
</article>

<style>

</style>
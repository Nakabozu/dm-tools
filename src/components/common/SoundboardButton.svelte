<script lang="ts">
    export let sound: string;
    export let text: string;
    export let isLooped: boolean;

    let thisAudio: HTMLAudioElement;
    let isPaused: boolean = true;
    let currentTime: number = 0;

    const onClick = () => {
        if(!isPaused){
            isPaused = true;
        }else{
            isPaused = false;
        }
    }
</script>

<audio
    src={sound}
    loop={isLooped}
    bind:paused={isPaused}
    bind:currentTime={currentTime}
    bind:this={thisAudio}
    >

</audio>
<button on:click={()=>{onClick();}} class="soundboard-button">
    {!isPaused ? '⏵' : ''}{text}
</button>


<style>
    .soundboard-button{
        padding: 3px 15px;
        height: fit-content;
        
        font-family: 'norse', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20px;
        line-height: 20px;

        border: none;

        cursor: pointer;
    }
</style>
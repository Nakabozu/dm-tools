<script>
    let positionX;
    let positionY;
    let rippleR;
    let rippleG;
    let rippleB;
</script>

<span class="ripple">
    <slot></slot>
</span>

<style>
    .ripple{
        display: flex;
        flex-grow: 0;

        position: relative;
        height: fit-content;
        
        border-radius: 4px;

        animation: ripple 2s linear 0s infinite normal;
    }

    @keyframes ripple{
        from {
            padding: 0px;
            margin: 10px;
            border: rgba(100,100,100,80) 1px solid;
        }
        to {
            padding: 10px;
            margin: 0px;
            border: rgba(100,100,100,0) 1px solid;
        }
    }
</style>
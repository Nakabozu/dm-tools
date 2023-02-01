<script lang="ts">
    import Navbar from '../components/common/Navbar.svelte';

    import '../styles.css';
</script>

<main>
    <Navbar/>

    <slot/>
</main>

<style>
  main{
    height: 100vh;
    width: 100vw;
    padding: 10px;

    overflow-y: auto;
  }
</style>
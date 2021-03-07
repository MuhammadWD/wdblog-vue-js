<template>
    <header class="header">
        <div class="headerContainer">
            <Tags />
            <Auth />
        </div>
    </header>
</template>
<script>
import Tags from './Tags';
import Auth from './Auth';

export default {
    components: {
        Tags,
        Auth
    }
}
</script>
<style lang="scss">
    .header{
        width: 100%;
        height: auto;
    }
    .headerContainer{
        width: 100%;
        max-width: $container;
        margin: 0 auto;
        display: flex;
        position: fixed;
        z-index: 500;
        background: #222;
        justify-content: space-between;
    }
</style>
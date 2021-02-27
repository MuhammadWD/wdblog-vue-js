<template>
    <header class="header">
        <div class="headerContainer">
            <Tags />
        </div>
    </header>
</template>
<script>
import Tags from './Tags';

export default {
    components: {
        Tags,
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
        max-width: 1175px;
        margin: 0 auto;
    }
</style>
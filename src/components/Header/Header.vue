<template>
    <header class="header">
        <div class="headerContainer">
            <Menu />
        </div>
    </header>
</template>
<script>
import Menu from './Menu';

export default {
    components: {
        Menu
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
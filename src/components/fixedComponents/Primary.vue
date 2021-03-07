<template>
    <div class="mainWrapper">
        <Header />
        <router-view></router-view>
    </div>
</template>
<script>
import Header from '../Header/Header';


export default {
    components: {
        Header
    }
}
</script>
<style lang="scss">
    .mainWrapper{
        width: 100%;
        margin-left: $sidebarSize;
        height: 100%;
    }
    .pagesWrapper{
        margin-top: 8.5rem;
    }
</style>
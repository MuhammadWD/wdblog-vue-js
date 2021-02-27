<template>
    <div class="mainWrapper">
        <Header />
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
<style lang="scss" scoped>
    .mainWrapper{
        width: 100%;
        margin-left: $sidebarSize;
        height: 100%;
        border: 1px solid #000;
    }
</style>
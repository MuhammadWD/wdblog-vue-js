<template>
    <aside class="sidebar">
        <div class="sidebarContainer">
            <SideHeader />
            <SideMenu />
        </div>
    </aside>
</template>
<script>
import SideHeader from './SidebarHeader';
import SideMenu from './SidebarMenu';

export default {
    components: {
        SideHeader,
        SideMenu
    }
}
</script>
<style lang="scss">
    .sidebar{
        width: $sidebarSize;
        height: 100vh;
        position: fixed;
    }
    .sidebarContainer{
        width: 100%;
        height: 100%;
        background: $darkPrimary;
        padding: 0 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

</style>
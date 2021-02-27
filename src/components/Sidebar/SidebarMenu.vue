<template>
    <ul class="menuList">
        <li class="menuItem"
        v-for="item in menuItems"
        :key="item">
            <a href="#" class="menuLink" :class="{active: item.isActive}"> {{item.title}} </a>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            menuItems: [
                { title: 'Home', isActive: false },
                { title: 'Categories', isActive: false },
                { title: 'Articles', isActive: false },
                { title: 'My works', isActive: false },
                { title: 'About me', isActive: true }
            ]
        }
    }
}
</script>
<style lang="scss">
    .menuList{
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .menuItem{ padding: 15px; }
        .menuLink{
            font-size: 1.4rem;
            padding-bottom: 0;
            transition: all .3s ease-in-out;
            &:hover{
                color: $primary;
                padding-bottom: 10px;
                border-bottom: 2px solid $primary;
            }
        }
    }
    .active{ color: $primary; }
</style>
<template>
    <ul class="menuList">
        <li class="menuItem"
        v-for="item in menuItems"
        :key="item">
            <router-link :to="item.link"
                class="menuLink" exact active-class="active"> {{item.title}} </router-link>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            menuItems: [
                { title: 'Home', link: "/" },
                { title: 'Articles', link: "/articles" },
                { title: 'Categories', link: "/category" },
                { title: 'My works', link: "/works" },
                { title: 'About me', link: "/about" }
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
        justify-content: center;
        .menuItem{ padding: 10px 15px; }
        .menuLink{
            font-size: 1.4rem;
            padding-bottom: 5px;
            font-weight: 300;
            transition: all .3s ease-in-out;
            opacity: 0.4;
            &:hover:not(.active){
                color: $primary;
                padding-bottom: 5px;
                opacity: 1;
                border-bottom: 2px solid $primary;
            }
        }
    }
    .active{ color: $primary !important; opacity: 1 !important; font-weight: bold !important;}
</style>
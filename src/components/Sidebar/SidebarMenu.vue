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
                { title: 'Home', isActive: true },
                { title: 'Categories', isActive: false },
                { title: 'Articles', isActive: false },
                { title: 'My works', isActive: false },
                { title: 'About me', isActive: false }
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
                color: #2a31e1;
                padding-bottom: 10px;
                border-bottom: 2px solid #2a31e1;
            }
        }
    }
    .active{ color: #2a31e1; }
</style>
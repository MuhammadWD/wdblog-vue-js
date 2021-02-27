<template>
    <ul class="tagList">
        <li class="tagItem"
        v-for="item in tagsItems"
        :key="item">
            <a href="" class="tagLink" :class="{ active: item.isActive }">{{item.title}}</a>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            tagsItems: [
                { title: '#frontend', isActive: true },
                { title: '#backend', isActive: false },
                { title: '#frameworks', isActive: false },
                { title: '#Laravel', isActive: false },
                { title: '#mobDevs', isActive: false }
            ]
        }
    }
}
</script>
<style lang="scss">
    .tagList{
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 10px 20px;
        border: 1px solid #000;
        .tagItem{ margin: 15px 10px; border: 1px solid #fff;}
        .tagLink{
            font-family: 'Numans', sans-serif;
            font-size: 1.3rem;
            transition: all .3s ease-in-out;
            &:hover{ color: $primary; }
        }
    }
    .active{ color: $primary; }
</style>
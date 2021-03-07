<template>
    <ul class="tagList">
        <li class="tagItem"
        v-for="item in tagsItems"
        :key="item">
            <a href="" class="tagLink" exact active-class="active">{{item.title}}</a>
        </li>
    </ul>
</template>
<script>
export default {
    data(){
        return{
            tagsItems: [
                { title: '#frontend' },
                { title: '#backend' },
                { title: '#frameworks' },
                { title: '#Laravel' },
                { title: '#mobDevs' }
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
        .tagItem{ margin: 15px 10px;}
        .tagLink{
            font-family: 'Numans', sans-serif;
            font-size: 1.3rem;
            opacity: 0.4;
            &:hover{ color: $primary; opacity: 1; }
        }
    }
    .active{ color: $primary; }
</style>
<template>
    <div class="container">
        <form id="content">
<!--            <input type="text" name="input" class="input" id="search-input">-->
<!--            <button type="reset" class="search" @click="animaneSeacrh()" id="search-btn"></button>-->
        </form>
    </div>
</template>
<script>

export default {
    methods:{
        animaneSeacrh() {
            const input = document.getElementById("search-input");
            const searchBtn = document.getElementById("search-btn");

            searchBtn.classList.toggle("close");
            input.classList.toggle("square");
        }
    }
}
</script>
<style lang="scss">
    .container{
        position: relative;
        width: auto;
        height: 100%;
    }
</style>
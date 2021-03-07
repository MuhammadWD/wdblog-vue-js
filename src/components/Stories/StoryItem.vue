<template>
    <section class="stories">
        <div class="storiesItem"
            v-for="item in storyItems"
            :key="item">
                <img :src="item.pathImg" alt="">
                <div class="storyTitle" :class="{active: item.isVisited}" >{{ item.title }}</div>
                <time class="storyTime">{{ item.time }}</time>
        </div>
    </section>
</template>
<script>

export default {
    data(){
        return{
            storyItems: [
                { title: "First history title", pathImg: "/temp/history1.png", isVisited: false, time: "19.01.2021" },
                { title: "Second history title", pathImg: "/temp/history2.png", isVisited: false, time: "25.01.2021" },
                { title: "Third history title", pathImg: "/temp/history3.png", isVisited: false, time: "31.01.2021" },
                { title: "Fourth history title", pathImg: "/temp/history4.png", isVisited: false, time: "10.02.2021" },
                { title: "Fiveth history title", pathImg: "/temp/history5.png", isVisited: false, time: "25.02.2021" }
            ],
        }
    }
}
</script>

<style lang="scss">
    .stories{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 190px;
        grid-column-gap: 15px;
    }
    .storiesItem{
        border-radius: 5px;
        position: relative;
        cursor: pointer;
        overflow: hidden;
        box-shadow: 0px 10px 15px rgba(0, 0, 0, 0.25);

        &::after{
            content: "";
            width: 100%;
            height: 100%;
            position: absolute;
            top: 0; left: 0;
            z-index: 2;
            background: linear-gradient(to bottom, rgba(0, 0, 0, .65),
                    rgba(0, 0, 0, 0.5) 50%, #000000bf);
        }
        &:hover{
            img{
                transition: .3s;
                transform: scale(1.03);
            }
            .storyTime{
                bottom: 0;
                opacity: 1;
                visibility: visible;
                transition: all .3 ease-in;
            }
        }

        img{
            display: block;
            width: 100%;
            height: 100%;
            max-width: 150px;
            object-fit: cover;
            position: absolute;
            top: 0; left: 0; 
            z-index: 1;
            transition: all .1s;
        }
        .storyTitle,
        .storyTime{
            width: 100%;
            font-size: 1.2rem;
            font-weight: bold !important;
            color: white;
            position: absolute;
            left: 0;
            z-index: 3;
            padding: 10px;
            line-height: 1.4;
        }
        .storyTitle{ top: 0; }
        .storyTime{
            bottom: -20px;
            opacity: 0;
            text-align: right;
            overflow: hidden;
            transition: all .3 ease-in;
        }
    }

</style>
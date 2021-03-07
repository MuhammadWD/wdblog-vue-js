<template>
    <div class="historyWrapper">
        <StoryItem />
    </div>
</template>
<script>
import StoryItem from '../Stories/StoryItem';

export default {
    components:{
        StoryItem,
    }
}
</script>
<style lang="scss">
    .historyWrapper{
        width: 100%;
        height: auto;
        max-width: 800px;
        margin: 15px auto !important;
    }
</style>
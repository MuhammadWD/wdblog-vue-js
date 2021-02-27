<template>
    <div class="sideHeader">
        <div class="logotype">
            <img src="../../assets/images/logo.svg" alt="">
        </div>
    </div>
</template>
<style lang="scss">
    .sideHeader{ margin-bottom: 20px; }
    .logotype{
        padding: 15px 20px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;

        font-size: 2rem;
        font-weight: 700;
        color: white;
        img{
            width: 100%;
            height: 100%;
            max-width: 110px;
        }
    }
</style>
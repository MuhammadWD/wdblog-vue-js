<template>
    <div class="sideHeader">
        <div class="logotype">
            <a href="" class="logoLink">
                <h3><span>WD</span>blog</h3>
            </a>
        </div>
    </div>
</template>
<style lang="scss">
    .logotype{
        padding: 30px 20px;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2px;
        h3{
            font-size: 2rem;
            font-weight: 700;
            color: white;
        }
        span{
            font-family: 'Comforta', cursive;
            font-size: 2rem;
            font-weight: 700;
            background: $primary;
            text-align: center;
            border-radius: 5px;
            padding: .4rem .7rem;
            margin-right: .4rem;
        }
    }
</style>
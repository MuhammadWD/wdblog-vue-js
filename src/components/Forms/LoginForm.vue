<template>
    <form class="joinForm" action="" method="POST">

        <div class="emailInput">
            <label for="email">Email</label>
            <input id="email" name="email" type="email">
        </div>

        <div class="passwordInput">
            <label for="password">Password</label>
            <input id="password" name="password" type="password">
        </div>

        <div class="checkboxInput">
            <input type="checkbox" name="remember-me" id="remember-me">
            <label for="remember-me">Rember me</label>
        </div>
        <div class="buttonWrapper">
        <a ref="joinModal" @click="showJoin()">Haven`t account ?</a>
            <button type="submit" class="joinButton">Login</button>
        </div>
    </form>
</template>
<script>
export default {
    methods: {
        showJoin(){
            this.$parent.join = true
        }
    }
}
</script>
<style lang="">
    
</style>
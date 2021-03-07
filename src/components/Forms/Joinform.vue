<template>
    <form class="joinForm" action="" method="post">
        <div class="usernameInput">
            <label for="username">Username</label>
            <input id="username" name="username" type="text">
        </div>

        <div class="emailInput">
            <label for="email">Email</label>
            <input id="email" name="email" type="email">
        </div>

        <div class="passwordInput">
            <label for="password">Password</label>
            <input id="password" name="password" type="password">
        </div>

        <div class="passwordConfInput">
            <label for="password-confirm">Confirm password</label>
            <input id="password-confirm" name="password-confirm" type="password">
        </div>

        <div class="checkboxInput">
            <input type="checkbox" name="agreement" id="agreement">
            <label for="agreement">I agree to <a href="">Privacy Police</a> and <a href="">Terms and Conditions</a></label>
        </div>
        <div class="buttonWrapper">
            <a ref="joinModal" @click="showLogin()">Already have account ?</a>
            <button type="submit" class="joinButton">Join</button>
        </div>
    </form>
</template>
<script>

export default {
    methods: {
        showLogin(){
            this.$parent.join = false
        }
    }
    
}
</script>
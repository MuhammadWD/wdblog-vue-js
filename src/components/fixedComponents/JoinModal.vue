<template>
    <div id="register" class="registerModal"
        v-show="show" @close="this.show = false"
        @click.self="closeModal()" >
        <div class="modalContent">
            <div class="modalHeader">
                <div class="logotype __modalLogo">
                    <a href="" class="logoLink">
                        <h3 class="__modal"><span>WD</span>blog</h3>
                    </a>
                    <div class="modalTitle">
                        <h3 v-if="join"> - Join</h3>
                        <h3 v-else> - Login</h3>
                    </div>
                </div>
                <button type="button" class="modalClose" @click="closeModal()">&times;</button>
            </div>
            <div class="modalBody">
                <JoinForm v-if="join"/>
                <LoginForm v-else />
            </div>
        </div>
    </div>
</template>
<script>
import JoinForm from '../Forms/Joinform';
import LoginForm from '../Forms/LoginForm';

export default {
    components: {
        JoinForm, LoginForm
    },
    data(){
        return{
            join: true,
            show: false,
        }
    },
    methods: {
        closeModal(){
            this.show = false;
        }
    }
}
</script>
<style lang="scss"></style>
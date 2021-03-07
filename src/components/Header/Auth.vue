<template>
    <div class="auth">
        <button class="registerButton" @click="showModal()">Join</button>
        <Join ref="modal" />
    </div>
</template>

<script>
import Join from '../fixedComponents/JoinModal';

export default {
    components: {
        Join
    },
    methods: {
        showModal(){
            this.$refs.modal.show = true;
        }
    }
}
</script>
<style lang="scss">
    .auth{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        padding-right: 30px;
        & > button {
          background: none;
          color: white;
          font-size: 1.2rem;
          opacity: 0.4;

          transition: all .1s ease-in-out;

          &:hover {
            opacity: 1;
            border: 1px solid white;
          }
        }
        .registerButton{
            border: 1px solid rgba(0, 0, 0, 0);
            padding: 8px 16px;
            border-radius: .7rem;
        }
    }
</style>
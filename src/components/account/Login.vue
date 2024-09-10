<script setup>
import { ref } from 'vue';
import ToggleButton from './ToggleButton.vue';
import { loginUser } from '@/services/modules/loginRegisterAPICalls';


const formValue = ref({
    email: "",
    password: "",
});


// const methodThatForcesUpdate = () => {
//   const instance = getCurrentInstance();
//   instance.proxy.forceUpdate();
// };

// async function login(formValue) {
//     await loginUser(formValue);

// }

</script>

<template>
    <section>
        <h1>CONNECTEZ-VOUS</h1>
        <form action="">
            <input class="textInput" type="email" placeholder="EMAIL" v-model="formValue.email">
            <input class="textInput" type="password" placeholder="MOT DE PASSE" v-model="formValue.password">
            <div class="formFooter">
                <div>
                    <p>Mot de passe oublié ?</p>
                    <p>Vous êtes un noob ?</p>
                </div>
                <input class="registerButton" type="button" value="Se connecter" @click="loginUser(formValue)">
            </div>
        </form>
        <ToggleButton buttonText="INSCRIPTION"/>
    </section>
</template>

<style scoped>
    
    section{
        background-color: var(--black);
        display: flex;
        flex-direction: column;
        padding: 30px 30px;
        border-radius: 20px;
        position: relative;
    }
    h1{
        text-align: center;
        font-weight: 500;
    }
    form{
        display: flex;
        flex-direction: column;
    }
    .formFooter{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 25px;
    }
    label{
        margin-right: 10px;
        font-weight: 500;
    }
    input{
        text-align: center;
        font-size: 1.1rem;
    }
    .textInput{
        padding: 10px 0;
        width: 450px;
        border: none;
        border-radius: 16px;
        margin-top: 20px;
    }

    .registerButton{
        border: none;
        border-radius: 15px;
        padding: 10px 20px;
        background-color: var(--green);
        color: var(--white);
        font-size: 1.2rem;
        font-weight: 600;
    }

    p{
        margin-top: 20px;
    }
</style>

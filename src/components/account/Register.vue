<script setup>
import { ref } from 'vue';
import ToggleButton from './ToggleButton.vue';
import { registerUser } from '@/services/modules/loginRegisterAPICalls';
import { useAccountStore } from '@/stores/account';


const store = useAccountStore();

const formValue = ref({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    civility: "Mr",
    adress: "rue blablmaoiojjiij147!?",
    city: "Pau",
    phone_number: "0102030405",
    is_admin:false
});

function register(formValue) {
    registerUser(formValue);
    store.toggleIsDisplayed()
}

 
</script>

<template>
    <section>
        <h1>INSCRIVEZ-VOUS</h1>
        <form action="">
            <input class="textInput" type="text" placeholder="NOM" v-model="formValue.last_name">
            <input class="textInput" type="text" placeholder="PRENOM" v-model="formValue.first_name">
            <input class="textInput" type="email" placeholder="ADRESSE-MAIL" v-model="formValue.email">
            <input class="textInput" type="password" placeholder="MOT DE PASSE" v-model="formValue.password">
            <input class="textInput" type="password" placeholder="ENTRER DE NOUVEAU VOTRE MOT DE PASSE">
            <div class="formFooter">
                <div>
                    <label for="">Accepter les conditions</label>
                    <input type="checkbox">
                </div>
                <input class="registerButton" type="button" value="Inscrivez-vous" @click="register(formValue)">
            </div>
        </form>
        <ToggleButton buttonText="CONNEXION"/>
    </section>
</template>

<style scoped>
    .formContainer{
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
    }
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
    .formFooter>div{
        display: flex;
        align-items: center;
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
</style>

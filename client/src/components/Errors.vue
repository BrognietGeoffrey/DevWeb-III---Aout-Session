 <!--
Fichier qui sert à afficher les erreurs
lors de la connexion ou de l'inscription
----------------------------------------
File for the errors messages when the register
and the login actions
-->
<template>
    <div class="alert alert-danger">{{ msg }}</div>
</template>

<script>
export default {
    // Va afficher le message qui correspond dans users.js et teams.js
    // Show the message who matched with users.js and teams.js
    props: ["msg"]
};
</script>

<style scoped>
.alert {
    border-radius: 0px;
}
.alert-danger {
    background: red;
    color: #fff;
}
</style>
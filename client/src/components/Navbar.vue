<!--
Fichier pour la barre de navigation réalisé avec Bootstrap
File for the navigation bar made with Bootstrap
-->

<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a href="https://www.ephec.be/" target="_blank" class="navbar-brand">EPHEC HACKATLON</a> |

    <div class="container-fluid">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ml-auto">

                <!-- Router link for the Home Page -->
                <!-- Lien de routage pour la page d'accueil -->
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">
                        Home
                    </router-link>
                </li>



                <!-- Router link for the Classement Page -->
                <!-- Lien de routage pour la page de classement -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/classement" class="nav-link">
                        Classement
                    </router-link>
                </li>

                <!-- Router link for the Easter Egg Page -->
                <!-- Lien de routage pour la page des jeux -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/easteregg" class="nav-link">
                        Easter Egg
                    </router-link>
                </li>

                <!-- Router link for the Login Page -->
                <!-- Lien de routage pour la page de connexion -->
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link to="/login" class="nav-link">
                        Login
                    </router-link>
                </li>

                <!-- Router Link for the Register Page -->
                <!-- Lien de routage pour la page d'inscription -->
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link to="/register" class="nav-link">
                        Register
                    </router-link>
                </li>

                <!-- Router link for the Profile Page -->
                <!-- Lien de routage pour la page du profil -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/profile" class="nav-link">
                        Profile
                    </router-link>
                </li>

                <!-- Router link for the Chat Page -->
                <!-- Lien de routage pour la page de chat -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/chat" class="nav-link">
                        Chat
                    </router-link>
                </li>

                <!-- Router link for the Teams Page -->
                <!-- Lien de routage pour la page d'équipe -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/teams" class="nav-link">
                        Teams
                    </router-link>
                </li>

                <!-- Router link for the Logout button -->
                <!-- Lien de routage pour le bouton de déconnexion -->
                <li class="nav-item" v-if="isLoggedIn">
                    <a to="/logout" class="nav-link" @click.prevent="logoutUser">
                        Log out
                    </a>
                </li>



                <!-- Example of disabled link
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
                -->

            </ul>
        </div>
    </div>
    </nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    computed : {
        // Permet d'identifier si l'utilisateur est connecté ou pas
        // Able to know if the user is connected or not
        ...mapGetters(["isLoggedIn"])
    },
    methods:{
        // Action de déconnexion
        // Logout action
        ...mapActions(['logout']),
        logoutUser(){
            this.logout();
        }
    }
}
</script>

<style>

</style>
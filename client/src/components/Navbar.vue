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
                <li class="nav-item">
                    <router-link to="/home" class="nav-link">
                        Home
                    </router-link>
                </li>



                <!-- Router link for the Classement Page -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/classement" class="nav-link">
                        Classement
                    </router-link>
                </li>

                <!-- Router link for the Easter Egg Page -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/easteregg" class="nav-link">
                        Easter Egg
                    </router-link>
                </li>

                <!-- Router link for the Login Page -->
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link to="/login" class="nav-link">
                        Login
                    </router-link>
                </li>

                <!-- Router Link for the Register Page -->
                <li class="nav-item" v-if="!isLoggedIn">
                    <router-link to="/register" class="nav-link">
                        Register
                    </router-link>
                </li>

                <!-- Router link for the Profile Page -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/profile" class="nav-link">
                        Profile
                    </router-link>
                </li>

                <!-- Router link for the Chat Page -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/chat" class="nav-link">
                        Chat
                    </router-link>
                </li>

                <!-- Router link for the Teams Page -->
                <li class="nav-item" v-if="isLoggedIn">
                    <router-link to="/teams" class="nav-link">
                        Teams
                    </router-link>
                </li>

                <!-- Router link for the Logout Page -->
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
        ...mapGetters(["isLoggedIn"])
    },
    methods:{
        ...mapActions(['logout']),
        logoutUser(){
            this.logout();
        }
    }
}
</script>

<style>

</style>
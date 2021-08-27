<!--
Fichier de base de Vue
Basic file of Vue
-->
<template>
  <div id="app">
    <Navbar/>
    <br><br>
    <div class="container">
      <Errors v-if="error" :msg="error"/>
      <router-view/>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"
import Navbar from "@/components/Navbar";
import Errors from "@/components/Errors";
//import io from 'socket.io-client';
//import Chatpage from './views/Chatpage.vue';
export default {
  components : {
    Navbar,
    Errors,

  },
  computed: {
    ...mapGetters(["error"])
  }
}

</script>
<style>
</style>

<template>
  <div>
      <h1>
          Profile
      </h1>
      <div class="card">
        <ul class="list-group align-self-center font-weight-bold">
          <li class="list-group-item">Email: {{user.email}}</li>
          <li class="list-group-item">Username: {{user.username}}</li>
          <li class="list-group-item">Name: {{user.name}}</li>
        </ul>
      </div>
      <div class="add_teams">
        <button class="createTeams">
          Créer ou rejoindre une équipe ?
        </button>

      </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed:mapGetters(['user']),
  methods:{
    ...mapActions(['getProfile'])
  },
  created(){
    this.getProfile();
  }
}
</script>

<style>
  h1{
    align-content: center;
    text-align: center;
    text-justify: auto;
    text-decoration-line: underline;
  }



</style>
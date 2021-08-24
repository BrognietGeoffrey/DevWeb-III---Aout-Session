<template>
  <div>
      <h1>
          Profile
      </h1>
      <div class="info">
        <ul class="list-group align-self-center font-weight-bold">
          <li class="info_user">Email: {{user.email}}</li>
          <li class="info_user">Username: {{user.username}}</li>
          <li class="info_user">Name: {{user.name}}</li>
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
  h1, button{
    align-content: center;
    text-align: left;
    text-justify: auto;
    text-decoration-line: underline;
  };
  .info_user{
    text-justify: auto;
    text-align: left;
  }
  button {
    align-content: center;
  }



</style>
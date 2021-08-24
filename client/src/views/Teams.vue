<template>
  <div>
      <h1>
          Your team
      </h1>
          <li>Name of the team: {{teams.name}}</li>


  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  computed:mapGetters(['teams']),
  methods:{
    ...mapActions(['getTeams'])
  },
  created(){
    this.getTeams();
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
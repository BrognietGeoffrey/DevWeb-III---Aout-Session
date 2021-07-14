<template>
  <div class="home">
    <div class="jumbotron jumbotron-fluid">
      <div class="container">
        <h1 class="display-4">L'hackatlon de l'EPHEC - TI</h1>
        <p
          class="lead"
        >Premier Hackalton de la section informatique de l'EPHEC ! </p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-success text-white">
          <div class="card-body">
            <h5 class="card-title">C'est quoi un hackatlon ?</h5>
            <p
              class="card-text"
            >Un hackathon, marathon de programmation ou programmathon1 est un évènement durant lequel des groupes de développeurs volontaires se réunissent pendant une période de temps donnée afin de travailler sur des projets de programmation informatique de manière collaborative.</p>
            <a href="https://fr.wikipedia.org/wiki/Hackathon#:~:text=Un%20hackathon%2C%20marathon%20de%20programmation,programmation%20informatique%20de%20mani%C3%A8re%20collaborative." target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-info text-white">
          <div class="card-body">
            <h5 class="card-title">Où trouver un hackatlon ?</h5>
            <p
              class="card-text"
            >Sur ce site vous pourrez trouver pleins d'informations sur tous les hackatlons de Belgique.</p>
            <a href="https://hackathon.be/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-warning text-white">
          <div class="card-body">
            <h5 class="card-title">A propos de l'EPHEC</h5>
            <p
              class="card-text"
            >L'EPHEC est un institut d'enseignement supérieur belge francophone regroupant une haute école ainsi qu'une école de promotion sociale. L'EPHEC organise des formations de type court et est subventionnée par la Communauté française de Belgique.</p>
            <a href="https://www.ephec.be/" target="_blank" class="btn bg-white">More Info.</a>
          </div>
        </div>
      </div>
      <div class="col-md-3 col-sm-6 col-xs-12">
        <div class="card bg-success text-white">
          <div class="card-body">
            <h5 class="card-title">Pour vous inscrire à ce Hackatlon</h5>
            <p
              class="card-text"
            >Attention, l'inscription est exclusivement réservée aux membres de la section TI de l'EPHEC</p>
            <a href="/register" class="btn bg-white">S'inscrire</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
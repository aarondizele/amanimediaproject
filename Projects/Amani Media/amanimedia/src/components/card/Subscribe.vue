<template>
  <div>
    <!-- Annonces -->
    <div class="card ____card mb-4">
      <div class="card-body pt-3 pb-2">
        <h4 class="gd-sage font-weight-medium mt-0 mb-3">Vos annonces</h4>
        <ul class="list-unstyled">
          <li class="____card-item">
            <router-link :to="`poster-annonce`">
              <i class="fal fa-angle-right mr-1"></i> Poster une annonce
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${20}`">
              <i class="fal fa-angle-right mr-1"></i> Immobiliers
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${19}`">
              <i class="fal fa-angle-right mr-1"></i> Véhicules
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${23}`">
              <i class="fal fa-angle-right mr-1"></i> Habillement
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${25}`">
              <i class="fal fa-angle-right mr-1"></i> Informatique
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${21}`">
              <i class="fal fa-angle-right mr-1"></i> Multimédia
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${22}`">
              <i class="fal fa-angle-right mr-1"></i> Loisirs
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${24}`">
              <i class="fal fa-angle-right mr-1"></i> Autres produits
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!-- Opportunités -->
    <div class="card ____card mb-4">
      <div class="card-body pt-3 pb-2">
        <h4 class="gd-sage font-weight-medium mt-0 mb-3">Opportunités</h4>
        <ul class="list-unstyled">
          <li class="____card-item">
            <router-link :to="`/annonce/${12}`">
              <i class="fal fa-angle-right mr-1"></i>Offre d'emploi
            </router-link>
          </li>
          <li class="____card-item">
            <router-link :to="`/annonce/${13}`">
              <i class="fal fa-angle-right mr-1"></i>Appels d'offres
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <!--  -->
    <div class="card ____card">
      <div class="card-body py-4">
        <h2 class="widgettitle text-dark gd-sage">
          <span>Newsletter</span>
        </h2>
        <form>
          <div>
            <div
              class="my-3 px-2 text-center body-1"
            >Recevez les récentes nouvelles directement dans votre boîte de réception</div>

            <div class="subscribe_form">
              <input
                    type="text"
                    class="px-3 rounded-0 w-100 body-1 border text-center mb-2"
                    placeholder="Email"
                    style="height:40px!important;"
                  />

              <input
                type="submit"
                value="S'abonner"
                class="btn _bg-primary btn-block font-weight-bold gd-sage"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
h2.widgettitle,
h5.widgettitle {
  color: #ff3c36;
}
h2.widgettitle,
h2.widgettitle {
  font-size: 12px;
  display: block;
  text-align: center;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  position: relative;
  margin-bottom: 10px;
}
h2.widgettitle:before,
h2.widgettitle:before {
  content: "";
  border-bottom: 1px solid #e1e1e1;
  width: 100%;
  position: absolute;
  left: 0;
  top: 50%;
  z-index: 0;
}
h2.widgettitle span {
  background: #fff;
}
h2.widgettitle span {
  display: inline-block;
  padding: 0 1.2em;
  background: #fff;
  position: relative;
  z-index: 2;
  font-size: 16px;
}
.subscribe_tagline {
  font-size: 16px;
  text-align: center;
  margin-bottom: 5px;
}
</style>

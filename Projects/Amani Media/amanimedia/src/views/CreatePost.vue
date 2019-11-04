<template>
  <div class="about">
    <div class="px-2 px-md-5 pb-10">
    <button class="_button _button-outline _flex _center my-3 body-1" @click="$router.back()">
        <i class="far fa-arrow-left mr-2"></i>
        Retourner
    </button>
    <!--  -->
      <div class="position-relative">
        <!--  -->
        <div class="row">
          <div class="col-12 col-md-8 col-lg-9">
            <h1 class="_font2">Créer une annonce</h1>
            <h6>Envoyer une annonce gratuitement</h6>
            <div class="_separator-set">
                <div class="_separator"></div>
                <div class="_separator"></div>
                <div class="_separator"></div>
              </div>
            <div class="my-5">
                <form action="">
                    <div class="form-group">
                        <label for="">Votre nom (obligatoire)</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="">Votre email (obligatoire)</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="">Sujet</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                    <div class="form-group">
                        <label for="">Société, Organisation,institution,...</label>
                        <input type="text" class="form-control" placeholder="">
                    </div>
                </form>
            </div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <div class="__bg-secondary py-20">
      <div class="container">
        <div class="d-flex flex-column align-items-center">
          <h1 class="font-weight-bold _font3">Restez à jour</h1>
          <p>Recevez les récentes nouvelles directement dans votre boîte de réception</p>
          <div class="_flex _center flex-wrap">
            <input
              type="text"
              class="form-control border-0 rounded-0"
              placeholder="Email"
              style="width:300px"
            />
            <button
              class="btn btn-danger text-uppercase body-1 font-weight-bold ml-3 px-3 _font2 rounded-0"
            >S'abonner</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
//   head() {
//     return {
//       // title: this.article.title.rendered || ''
//     }
//   },
  data: () => ({
    article: null,
    loading: false,
  }),
  computed: {
    ...mapGetters(['loadedPosts']),
    primary() {
      return this.recommandations.slice(0,3);
    },
    secondary() {
      return this.loadedPosts.slice(0,3);
    },
  },
  methods: {
  },
  created () {
      this.onCreated();
  }
}
</script>


578
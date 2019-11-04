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
            <h1 class="gd-sage">À propos de nous</h1>
            <div class="_separator-set">
                <div class="_separator"></div>
                <div class="_separator"></div>
                <div class="_separator"></div>
              </div>
            <div class="my-5" v-if="article" v-html="article.content.rendered"></div>
          </div>
          <div class="col-12 col-md-4 col-lg-3">
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
    <!--  -->
    <Newsletters />
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
      async onCreated() {
          await this.fetchArticle()
      },
      fetchArticle() {
          this.loading = true;
          return fetch(`/main.php/wp-json/wp/v2/pages/578`)
            .then((response) => {
                return response.json();
                })
                .then((response) => {
                this.article = response
          this.loading = false;
                })
                .catch((e) => {
          this.loading = false;
          console.log(e)
                });
      },
  },
  created () {
      this.onCreated();
  }
}
</script>


578
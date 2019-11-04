<template>
  <div>
    <div class="px-2 px-md-5 pb-10">
      <button class="_button _button-outline _flex _center my-3 body-1" @click="$router.back()">
        <i class="far fa-arrow-left mr-2"></i>
        Retourner
      </button>
      <!--  -->
      <div class="row">
        <div class="col-12 col-md-8">
          <div v-if="!article" class="pt-5 pb-10 text-center">
            <ArticlePlaceholder />
          </div>
          <div v-else>
            <div class="title">
              <h3 class="font-weight-bold _font2" v-html="article.title.rendered"></h3>
              <div class="_flex _between flex-wrap body-1">
                <div class="post_info_date text-uppercase">
                  <a
                    href="http://themes.themegoods.com/grandnews/demo1/we-cant-wait-to-try-these-makeup-trends-from-the-fall-2016-runways/"
                  >{{article.date | date}}</a>
                </div>
                <!--  -->
                <!-- <div class="_flex caption">
                          <div class="_flex ml-2">61</div>
                          <div class="_flex ml-2">4.7K vues</div>
                          <div class="_flex ml-2">0</div>
                </div>-->
              </div>
            </div>

            <div class="mt-4">
              <img
                :src="article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''"
                alt
                class="img-fluid w-100 __image"
              />
            </div>

            <div class="my-5" v-html="article.content.rendered"></div>
          </div>
          <div class="_separator-set">
            <div class="_separator"></div>
            <div class="_separator"></div>
            <div class="_separator"></div>
          </div>
          <!-- Shares 2 -->
          <div class="_flex _between flex-wrap mb-5">
            <div class="text-center">
              <h1 class="font-weight-bold text-danger mb-0">0</h1>
              <!-- <h1 class="font-weight-bold text-danger mb-0">1.2K</h1> -->
              <div class="text-muted body-1">PARTAGE</div>
            </div>
            <div class="_flex">
              <button class="btn bg-facebook _flex _center ml-3 rounded-0 btn-sm text-white">
                <i class="fab fa-facebook-square mr-2"></i> Partager sur Facebook
              </button>
              <button class="btn bg-twitter _flex _center ml-3 rounded-0 btn-sm text-white">
                <i class="fab fa-twitter mr-2"></i> Partager sur Twitter
              </button>
            </div>
          </div>

          <!-- Add comment -->
          <div class="card border-0 w-100 bg-light mb-10 mt-10">
            <div class="card-body">
              <h5 class="font-weight-bold gd-sage">Laissez votre réponse</h5>
              <p
                class="mt-2 mb-3"
              >Votre adresse email ne sera pas publiée. Les champs requis sont indiqués *</p>
              <form>
                <textarea
                  data-v-a30a8e90
                  name
                  id
                  cols="6"
                  rows="6"
                  class="form-control bg-white rounded-0 mb-4"
                ></textarea>
                <div class="form-row">
                  <div class="col-12 col-md-4">
                    <input
                      type="text"
                      placeholder="Nom*"
                      required
                      class="form-control border-0 rounded-0"
                    />
                  </div>
                  <div class="col-12 col-md-4">
                    <input
                      type="text"
                      placeholder="Email*"
                      required
                      class="form-control border-0 rounded-0"
                    />
                  </div>
                  <div class="col-12 col-md-4">
                    <input
                      type="text"
                      placeholder="Site web"
                      required
                      class="form-control border-0 rounded-0"
                    />
                  </div>
                </div>
                <button
                  class="btn _bg-primary px-4 gd-sage body-1 mt-4 rounded-0"
                >Poster votre commentaire</button>
              </form>
            </div>
          </div>
        </div>

        <!--  -->
        <div class="col-12 col-md-4 col-lg-3 offset-lg-1 d-flex flex-column">
          <div>
            <h5 class="font-weight-bold gd-sage mb-4">
              <span>Publications similaires</span>
            </h5>
            <ul class="posts blog withthumb list-unstyled" v-if="primary.length">
              <li v-for="(article, n) in primary" :key="n">
                <div class="post_circle_thumb position-relative">
                  <router-link
                    :to="`/article/${article.slug}`"
                    :title="article.title.rendered"
                  >
                    <img
                      :src="`${article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''}`"
                      class="tg-lazy ___image"
                      alt
                    />
                  </router-link>
                  <div class="_tag-rounded">{{n+1}}</div>
                </div>
                <router-link
                  :to="`/article/${article.slug}`"
                  :title="article.title.rendered"
                  class="caption"
                  v-html="article.title.rendered"
                ></router-link>
              </li>
            </ul>
          </div>

          <div class="_separator-set">
            <div class="_separator"></div>
            <div class="_separator"></div>
            <div class="_separator"></div>
          </div>

          <div>
            <h5 class="font-weight-bold gd-sage mb-4">
              <span>Publications Populaires</span>
            </h5>
            <ul class="posts blog withthumb list-unstyled" v-if="secondary.length">
              <li v-for="(article, n) in secondary" :key="n">
                <div class="post_circle_thumb position-relative">
                  <router-link
                    :to="`/article/${article.slug}`"
                    :title="article.title.rendered"
                  >
                    <img
                      :src="`${article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''}`"
                      class="tg-lazy ___image"
                      alt
                    />
                  </router-link>
                  <div class="_tag-rounded">{{n+1}}</div>
                </div>
                <router-link
                  :to="`/article/${article.slug}`"
                  :title="article.title.rendered"
                  class="caption"
                  v-html="article.title.rendered"
                ></router-link>
              </li>
            </ul>
          </div>

          <div class="_separator-set">
            <div class="_separator"></div>
            <div class="_separator"></div>
            <div class="_separator"></div>
          </div>

          <Subscribe />
        </div>
      </div>
    </div>
    <Newsletters />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  //   head() {
  //     return {
  //       // title: this.article.title.rendered || ''
  //     }
  //   },
  data: () => ({
    article: null,
    loading: false,
    recommandations: []
  }),
  computed: {
    ...mapGetters(["loadedPosts"]),
    primary() {
      return this.recommandations.slice(0, 3);
    },
    secondary() {
      return this.loadedPosts.slice(0, 3);
    }
  },
  watch: {
    '$route' (to, from) {
      // this.id = to.query.id
      this.article = null;
      this.onCreated()
    },
  },
  methods: {
    async onCreated() {
      await this.fetchArticle();
      await this.getRecommandations();
    },
    fetchArticle() {
      this.loading = true;
      return fetch(
        `/main.php/wp-json/wp/v2/posts?_embed&slug=${this.$route.params.slug}`
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.article = response[0];
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
          console.log(e);
        });
    },
    getRecommandations() {
      if (!this.article && !this.article.categories.length) return;
      return fetch(
        `/main.php/wp-json/wp/v2/posts?_embed&per_page=10&order_by=date&order=desc&categories=${
          this.article.categories[0]
        }`
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.recommandations = response;
        });
    }
  },
  created() {
    this.onCreated();
  }
};
</script>

<style lang="scss" scoped>
.__image {
  max-height: 420px;
  object-position: top;
  overflow: hidden;
  position: relative;
  border-radius: 12px;
  border: none;
  &:after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: -1px;
    width: calc(100% + 2px);
    height: 200px;
    opacity: 0.6;
    background: linear-gradient(0deg, #343a5e 10%, rgba(119, 128, 175, 0) 100%);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}

.___image-div {
  height: 160px;
}

.social_wrapper.shortcode,
.social_wrapper.shortcode ul {
  margin: 0;
  text-align: left;
}

.social_wrapper {
  width: 100%;
  margin: 20px 0 5px 0;
  text-align: center;
}
.social_wrapper.shortcode,
.social_wrapper.shortcode ul {
  margin: 0;
  text-align: left;
}

.social_wrapper {
  width: 100%;
  margin: 20px 0 5px 0;
  text-align: center;
  list-style: none;
}
.social_wrapper.shortcode ul li {
  margin: 0 2px 4px 2px;
  clear: none !important;
  float: none !important;
  width: auto !important;
  display: inline-block !important;
}
.social_wrapper.large ul li {
  width: 50px;
  height: 50px;
}
.social_wrapper.light ul li {
  border: 0 !important;
}
.social_wrapper.shortcode ul li,
.social_wrapper.small.shortcode ul li {
  margin: 0 10px 10px 10px !important;
}
.social_wrapper ul li,
.social_wrapper.small ul li {
  display: inline-block;
  margin-right: 15px;
}
h2.widgettitle,
h5.widgettitle,
.single_subtitle {
  font-size: 16px;
  font-weight: 900;
  letter-spacing: 0px;
  text-transform: uppercase;
}
.posts.blog li {
  clear: both !important;
  float: left;
  border: 0;
  margin: 0 0 20px 0;
  font-size: 14px;
}
.post_circle_thumb {
  position: relative;
  z-index: 2;
  float: left;
  width: 105px;
  height: 70px;
  float: left;
  margin-right: 16px;
  background: #f2f2f2;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>

<template>
  <div>
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
            <!-- Economy -->
            <div>
              <h1 class="mb-4 gd-sage font-weight-bold">{{category.name}}</h1>
              <div class="_separator-set">
                <div class="_separator"></div>
                <div class="_separator"></div>
                <div class="_separator"></div>
              </div>
              <div class="row actu1 mt-5">
                <div v-if="!posts.length" class="py-10 text-center w-100">
                  <Loading />
                  <br />Chargement ...
                </div>
                  <div class="col-12 col-md-6 card-deck" v-for="(article,i) in posts" :key="i" v-else>
                    <div class="card _box-shadow _borderless w-100 mb-4">
                      <img
                        :src="article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''"
                        class="card-img-top __image-card"
                        alt
                        v-if="article._embedded['wp:featuredmedia']"
                      />
                      <div class="card-body pb-1">
                        <h6 class="card-title _font2 mb-1">
                          <router-link :to="`/article/${1}`" title v-html="article.title.rendered"></router-link>
                        </h6>
                        <div class="__card-date">{{article.date | date}}</div>
                        <p class="card-text body-1 mb-2" v-html="article.content.rendered"></p>
                        <div class="_flex flex-wrap">
                          <div
                            class="__category mr-2 mb-2 _font2"
                            v-for="(category, i) in ['Annonce', 'Informatique']"
                            :key="i"
                          >{{category}}</div>
                        </div>
                        <!-- <p class="card-text" v-html="article.content.rendered"></p> -->
                      </div>
                      <div class="card-footer bg-white border-top-0 pt-0">
                        <router-link
                          :to="`/article/${1}`"
                          class="card-link text-dark _flex justify-content-end body-2"
                        >
                          Voir plus
                          <i class="far fa-arrow-right ml-2"></i>
                        </router-link>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
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
import axios from "axios";
import { mapGetters } from "vuex";

export default {
  components: {},
  data: () => ({
    id: null,
    loading: false,
    posts: [],
    category: ""
  }),
  computed: {
    // ...mapGetters(["loadedPosts"]),
    // posts() {
    //   return this.loadedPosts.slice(2, 10);
    // },
    // alaune() {
    //   return this.loadedPosts.slice(0, 2);
    // }
  },
  watch: { 
    '$route' (to, from) {
      this.id = to.query.id
      this.onCreated()
    },
    // '$route.params.id': {
    //   handler: function(search) {
    //     this.onCreated()
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  methods: {
    renderHTML(text) {
      const length = 200;
      if (text.length > length) {
        return text.substring(0, length) + " ...";
      } else {
        return text;
      }
    },
    fetchPosts() {
      var url = `/main.php/wp-json/wp/v2/posts?_embed&categories=${this.$route.params.id}&order_by=date&order=desc&per_page=100`;
      this.loading = true;
      return fetch(url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.posts = response;
          this.loading = false;
        })
        .catch(e => {
          this.loading = false;
          console.log(e);
        });
    },
    fetchCategory() {
      var url = `/main.php/wp-json/wp/v2/categories/${this.$route.params.id}`;
      return fetch(url)
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.category = response;
        })
        .catch(e => {
          this.loading = false;
          console.log(e);
        });
    },
    async onCreated() {
      await this.fetchCategory();
      await this.fetchPosts();
    }
  },
  created() {
    window.addEventListener('online', function() {
      this.onCreated();
    });
    this.onCreated();
  }
};
</script>

<style lang="scss" scoped>
// Actu
.actu1 .one_half.div_wrapper .post_img {
  margin-bottom: 10px;
  height: 250px;
}
.actu1 .post_img {
  position: relative;
  height: auto;
  text-align: center;
  overflow: hidden;
  float: left;
  line-height: 0;
  max-width: 100%;
  margin: 0;
  background: #f9f9f9;
}
.actu1 .post_header {
  width: 100%;
  float: left;
  margin-bottom: 20px;
}
.actu1 .one_half.div_wrapper .post_detail.post_date {
  margin: 5px 0 5px 0;
}
.actu1 .post_info_date {
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 22px;
}

.actu1 .post_info_date,
.actu1 .post_info_author {
  color: #999;
  position: relative;
  display: block;
  float: left;
}

// Actu 2
.actu2 .post.type-post:last-child {
  margin-bottom: 0;
  height: 80px;
}
.actu2 .post.type-post {
  width: 100%;
  margin-bottom: 35px;
  float: left;
  position: relative;
}
.actu2 .post.type-post:last-child {
  margin-bottom: 0;
}
.actu2 .post.type-post {
  width: 100%;
  margin-bottom: 35px;
  float: left;
  position: relative;
}
.actu2 .post_header.search {
  width: 100%;
  margin-bottom: 0;
  text-align: left;
}

.actu2 .post_header {
  width: 100%;
  float: left;
  margin-bottom: 20px;
}
.actu2 .post_content_wrapper .post_img:not(.small) {
  margin-bottom: 20px;
}

.actu2 .post_img.one_third {
  margin-top: 0;
}
.actu2 .one_third {
  width: 31.29%;
  float: left;
  margin-right: 3%;
  margin-bottom: 3%;
  position: relative;
  box-sizing: border-box;
}
.actu2 .post_img {
  position: relative;
  height: 80px;
  text-align: center;
  overflow: hidden;
  float: left;
  line-height: 0;
  max-width: 100%;
  margin: 0;
  background: #f9f9f9;
}
.actu2 .two_third.last {
  margin-right: 0;
  float: right;
  clear: right;
}
.actu2 .two_third {
  float: left;
  width: 65.33%;
  margin-right: 3%;
  box-sizing: border-box;
}
.actu2 .post_header .post_detail.post_date {
  margin: 0;
}

//
.widget_mc4wp_form_widget {
  background: #f2f2f2;
  padding: 30px;
  box-sizing: border-box;
}

._x-image {
  height: 110px;
  object-fit: cover;
}
</style>
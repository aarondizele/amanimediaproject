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
            <div v-if="posts.length">
              <div class="row actu1">
                <div class="col-12 col-md-6" v-for="(article,i) in alaune" :key="i">
                  <div class="one_half div_wrapper">
                    <div class="post_img">
                      <router-link
                        :to="`/article/${article.slug}`"
                        :title="article.title.rendered"
                        tag="div"
                        class="_image-overlay"
                      >
                        <img
                          :src="`${article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''}`"
                          alt
                        />
                      </router-link>
                    </div>
                    <div class="post_header">
                      <h5 class="font-weight-bold _font2">
                        <router-link
                          :to="`/article/${article.slug}`"
                          :title="article.title.rendered"
                          v-html="article.title.rendered"
                        ></router-link>
                      </h5>
                      <div class="post_detail post_date">
                        <span class="post_info_date">
                          <router-link :to="`/article/${article.slug}`">{{article.date | date}}</router-link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row actu2">
                <div class="col-12 col-md-6 mb-4" v-for="(article, n) in posts" :key="n">
                  <div class="row no-gutters">
                    <div class="col-4">
                      <router-link
                        :to="`/article/${article.slug}`"
                        tag="div"
                        class="_image-overlay"
                      >
                        <img
                          :src="`${article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''}`"
                          alt
                          class="_x-image"
                        />
                      </router-link>
                    </div>
                    <div class="col-8 pl-3">
                      <div class="font-weight-bold">
                        <router-link
                          :to="`/article/${article.slug}`"
                          :title="article.title.rendered"
                          v-html="renderHTML(article.title.rendered)"
                          class="body-2 _font2"
                        ></router-link>
                      </div>
                      <div class="post_detail post_date">
                        <span class="post_info_date caption text-uppercase" style="color: #999;">
                          <router-link :to="`/article/${article.slug}`">{{article.date | date}}</router-link>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div v-else>
              <CategoriesPlaceholder />
            </div>
          </div>
          <!--  -->
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
  name: "home",
  components: {},
  data: () => ({
    economics: []
  }),
  computed: {
    ...mapGetters(["loadedPosts"]),
    posts() {
      return this.loadedPosts.slice(2, 20);
    },
    alaune() {
      return this.loadedPosts.slice(0, 2);
    }
  },
  methods: {
    renderHTML(text) {
      const length = 200;
      if (text.length > length) {
        return text.substring(0, length) + " ...";
      } else {
        return text;
      }
    }
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
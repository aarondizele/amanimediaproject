<template>
  <div>
    <!-- A la une -->
    <div class="py-3 px-2 px-md-5">
      <!-- Posts exist -->
      <div class="row no-gutters" v-if="loadedPosts.length">
        <!--  -->
        <div class="col-12 col-md-6 pr-md-1">
          <div class="mySlides" v-for="(post, x) in recentPosts" :key="x">
            <div class="card w-100 __card border-left-0">
              <img
                :src="post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia']['0'].source_url : ''"
                alt
                class="__card-image"
              />
              <div class="__card-content">
                <!-- <h6>#1</h6> -->
                <div class="text-white text-uppercase caption">{{post.date | date}}</div>
                <h2 class="font-weight-bold _font2 _h2">
                  <router-link
                    :to="`/article/${post.slug}`"
                    title
                    v-html="post.title.rendered"
                  ></router-link>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <!--  -->
        <div class="col-12 col-md-6">
          <!--  -->
          <div class="card w-100 __card __card-half">
            <img
              :src="secondarySociety[0]._embedded['wp:featuredmedia'] ? secondarySociety[0]._embedded['wp:featuredmedia']['0'].source_url : ''"
              alt
              class="__card-image"
            />
            <div class="__card-content">
              <div class="text-white text-uppercase caption">{{secondarySociety[0].date | date}}</div>
              <h4 class="font-weight-bold _font2">
                <router-link
                  :to="`/article/${secondarySociety[0].slug}`"
                  :title="secondarySociety[0].title.rendered"
                  v-html="secondarySociety[0].title.rendered"
                ></router-link>
              </h4>
            </div>
          </div>
          <!--  -->
          <div class="row no-gutters">
            <div class="col-12 col-md-6 __card-half-right">
              <div class="card w-100 __card __card-half">
                <img
                  :src="secondarySociety[1]._embedded['wp:featuredmedia'] ? secondarySociety[1]._embedded['wp:featuredmedia']['0'].source_url : null"
                  alt
                  class="__card-image"
                />
                <div class="__card-content">
                  <div class="text-white text-uppercase caption">{{secondarySociety[1].date | date}}</div>
                  <h5 class="font-weight-bold _font2">
                    <router-link
                      :to="`/article/${secondarySociety[1].slug}`"
                      :title="secondarySociety[1].title.rendered"
                      v-html="secondarySociety[1].title.rendered"
                    ></router-link>
                  </h5>
                </div>
              </div>
            </div>
            <div class="col-12 col-md-6 __card-half-left">
              <div class="card w-100 __card __card-half">
                <img
                  :src="secondarySociety[2]._embedded['wp:featuredmedia'] ? secondarySociety[2]._embedded['wp:featuredmedia']['0'].source_url : ''"
                  alt
                  class="__card-image"
                />
                <div class="__card-content">
                  <div class="text-white text-uppercase caption">{{secondarySociety[2].date | date}}</div>
                  <h5 class="font-weight-bold _font2">
                    <router-link
                      :to="`/article/${secondarySociety[2].slug}`"
                      :title="secondarySociety[2].title.rendered"
                      v-html="secondarySociety[2].title.rendered"
                    ></router-link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Posts Placeholders -->
      <div v-else>
        <div class="mySlides"></div>
        <AlaunePlaceholder />
      </div>
    </div>
    <!--  -->
    <div class="px-2 px-md-5 py-15">
      <div class="position-relative">
        <!--  -->
        <div class="row">
          <div class="col-12 col-md-8 col-lg-9">
            <!-- Economy -->
            <div>
              <h1 class="mb-4 _font2 font-weight-bold gd-sage gd-sage">Economie</h1>
              <div v-if="economy.length">
                <div class="row actu1">
                  <div class="col-12 col-md-6" v-for="(article,i) in alauneEconomy" :key="i">
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
                  <div class="col-12 col-md-6 mb-4" v-for="(article, n) in economy" :key="n">
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

            <div class="_separator-set">
              <div class="_separator"></div>
              <div class="_separator"></div>
              <div class="_separator"></div>
            </div>
            <!-- Socitété -->
            <div>
              <h1 class="mb-4 _font2 font-weight-bold gd-sage gd-sage">Société</h1>
              <div v-if="society.length">
                <div class="row actu1">
                  <div class="col-12 col-md-6" v-for="(article,i) in alauneSociety" :key="i">
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
                  <div class="col-12 col-md-6 mb-4" v-for="(article, n) in society" :key="n">
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

            <div class="_separator-set">
              <div class="_separator"></div>
              <div class="_separator"></div>
              <div class="_separator"></div>
            </div>
            <!-- International -->
            <div>
              <h1 class="mb-4 _font2 font-weight-bold gd-sage gd-sage">International</h1>
              <div v-if="international.length">
                <div class="row actu1">
                  <div class="col-12 col-md-6" v-for="(article,i) in alauneInternational" :key="i">
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
                  <div class="col-12 col-md-6 mb-4" v-for="(article, n) in international" :key="n">
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

            <div class="_separator-set">
              <div class="_separator"></div>
              <div class="_separator"></div>
              <div class="_separator"></div>
            </div>
            <!-- Sport -->
            <div>
              <h1 class="mb-4 _font2 font-weight-bold gd-sage">Sport</h1>
              <div v-if="sport.length">
                <div class="row actu1">
                  <div class="col-12 col-md-6" v-for="(article,i) in alauneSport" :key="i">
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
                  <div class="col-12 col-md-6 mb-4" v-for="(article, n) in sport" :key="n">
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
  name: "home",
  components: {},
  data: () => ({
    myIndex: 0,
    economics: []
  }),
  computed: {
    ...mapGetters(["loadedPosts"]),
    recentPosts() {
      return this.loadedPosts.slice(0, 3);
    },
    posts() {
      return this.loadedPosts.slice(2, 10);
    },
    uneSecondarySociety() {
      const society = this.$store.getters.society;
      return society.slice(0, 3);
    },
    secondarySociety() {
      const society = this.$store.getters.society;
      return society.slice(0, 4);
    },
    alaune() {
      return this.loadedPosts.slice(0, 2);
    },
    secondary() {
      return this.loadedPosts.slice(1, 4);
    },
    alauneEconomy() {
      const economy = this.$store.getters.economy;
      return economy.slice(0, 2);
    },
    alauneSociety() {
      const society = this.$store.getters.society;
      return society.slice(0, 2);
    },
    alauneInternational() {
      const international = this.$store.getters.international;
      return international.slice(0, 2);
    },
    alauneSport() {
      const sport = this.$store.getters.sport;
      return sport.slice(0, 2);
    },
    economy() {
      const economy = this.$store.getters.economy;
      return economy.slice(2, 10);
    },
    society() {
      const society = this.$store.getters.society;
      return society.slice(2, 10);
    },
    international() {
      const international = this.$store.getters.international;
      return international.slice(2, 10);
    },
    sport() {
      const sport = this.$store.getters.sport;
      return sport.slice(2, 10);
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
    },
    carousel() {
      var i;
      var x = document.getElementsByClassName("mySlides");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      this.myIndex++;
      if (this.myIndex > x.length) {
        this.myIndex = 1;
      }
      x[this.myIndex - 1].style.display = "block";
      setTimeout(this.carousel, 10000);
    }
  },
  mounted() {
    this.carousel();
  }
};
</script>

<style lang="scss" scoped>
.__control {
  width: 25px;
  height: 25px;
  background: white;
  border: 2px solid #ddd;
  border-radius: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  margin: auto 3px;
  color: #ddd;
  transition: all 0.1s ease;
  &:hover {
    border-color: #dc3b45;
    color: #dc3b45;
    cursor: pointer;
  }
}
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
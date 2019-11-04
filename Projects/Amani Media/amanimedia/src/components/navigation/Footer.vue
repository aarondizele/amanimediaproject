<template>
  <footer>
    <div class="px-3 px-md-5 pb-8 pt-16">
      <div class="row">
        <div class="col-12 col-md-6 col-lg-4">
          <img
            src="../../assets/logo.png"
            alt
            style="max-width: 140px!important;height: auto;"
            class="mb-4"
          />
          <p>Information en continu</p>
          <div style="margin-top:15px;">
            <div class="social_wrapper shortcode light large">
              <ul class="list-unstyled">
                <li class="facebook">
                  <a target="_blank" title="Facebook" href="#">
                    <i class="fab fa-facebook" style="font-size:24px"></i>
                  </a>
                </li>
                <li class="twitter">
                  <a target="_blank" title="Twitter" href="http://twitter.com/#">
                    <i class="fab fa-twitter" style="font-size:24px"></i>
                  </a>
                </li>
                <li class="youtube">
                  <a target="_blank" title="Youtube" href="#">
                    <i class="fab fa-youtube" style="font-size:24px"></i>
                  </a>
                </li>
                <li class="vimeo">
                  <a target="_blank" title="Vimeo" href="http://vimeo.com/#">
                    <i class="fab fa-linkedin" style="font-size:24px"></i>
                  </a>
                </li>
                <!-- <li class="google">
                  <a target="_blank" title="Google+" href="#">
                    <i class="fab fa-google-plus" style="font-size:24px"></i>
                  </a>
                </li>
                <li class="pinterest">
                  <a target="_blank" title="Pinterest" href="http://pinterest.com/#">
                    <i class="fab fa-pinterest" style="font-size:24px"></i>
                  </a>
                </li>
                <li class="instagram">
                  <a target="_blank" title="Instagram" href="http://instagram.com/thehautepursuit">
                    <i class="fab fa-instagram" style="font-size:24px"></i>
                  </a>
                </li> -->
              </ul>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div id="grand_news_recent_posts-2" class="widget Grand_News_Recent_Posts">
            <h5 class="font-weight-bold gd-sage mb-4">
              <span>Récentes Publications</span>
            </h5>
            <ul class="posts blog withthumb list-unstyled" v-if="primary.length">
              <li v-for="(article, n) in primary" :key="n">
                <div class="post_circle_thumb">
                  <router-link
                    :to="`/article/${article.slug}`"
                    :title="article.title.rendered"
                  >
                    <img
                      :src="`${article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''}`"
                      class="tg-lazy"
                      alt
                    />
                  </router-link>
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
        </div>
        <div class="col-12 col-md-6 col-lg-4">
          <div id="grand_news_recent_posts-2" class="widget Grand_News_Recent_Posts">
            <h5 class="font-weight-bold gd-sage  mb-4">
              <span>Publications Populaires</span>
            </h5>
            <ul class="posts blog withthumb list-unstyled caption">
              <li v-for="(article, n) in secondary" :key="n">
                <div class="post_circle_thumb position-relative">
                  <router-link
                    :to="`/article/${article.slug}`"
                    :title="article.title.rendered"
                  >
                    <img
                      :src="`${article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : ''}`"
                      class="tg-lazy"
                      alt
                    />
                  </router-link>
                    <div class="_tag-rounded">
                      {{n+1}}
                    </div>
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
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import axios from 'axios'
import {mapGetters} from 'vuex';

export default {
  computed: {
    ...mapGetters(['loadedPosts']),
    primary() {
      return this.loadedPosts.slice(0,3);
    },
    secondary() {
      return this.loadedPosts.slice(3,6);
    },
  },
};
</script>

<style scoped lang="scss">
footer {
  background: rgba(17, 17, 17, 1);
  color: white;
}
footer .social_wrapper.shortcode,
footer .social_wrapper.shortcode ul {
  margin: 0;
  text-align: left;
}

.social_wrapper {
  width: 100%;
  margin: 20px 0 5px 0;
  text-align: center;
}
footer .social_wrapper.shortcode,
footer .social_wrapper.shortcode ul {
  margin: 0;
  text-align: left;
}

footer .social_wrapper {
  width: 100%;
  margin: 20px 0 5px 0;
  text-align: center;
  list-style: none;
}
footer .social_wrapper.shortcode ul li {
  margin: 0 2px 4px 2px;
  clear: none !important;
  float: none !important;
  width: auto !important;
  display: inline-block !important;
}
footer .social_wrapper.large ul li {
  width: 50px;
  height: 50px;
}
footer .social_wrapper.light ul li {
  border: 0 !important;
}
footer .social_wrapper.shortcode ul li,
footer .social_wrapper.small.shortcode ul li {
  margin: 0 10px 10px 10px !important;
}
footer .social_wrapper ul li,
footer .social_wrapper.small ul li {
  display: inline-block;
  margin-right: 15px;
}
footer h2.widgettitle, h5.widgettitle, .single_subtitle {
    font-family: Raleway, Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 900;
    letter-spacing: 0px;
    text-transform: uppercase;
}
footer .posts.blog li {
    clear: both !important;
    float: left;
    border: 0;
    margin: 0 0 20px 0;
    font-size: 14px;
}
footer .post_circle_thumb {
    position: relative;
    z-index: 2;
    float: left;
    width: 105px;
    height:70px;
    float: left;
    margin-right: 16px;
    background: #f2f2f2;
    border-radius:3px;
    img {
        width:100%;
        height:100%;
        object-fit:cover;
    border-radius:3px;
    }
}
</style>

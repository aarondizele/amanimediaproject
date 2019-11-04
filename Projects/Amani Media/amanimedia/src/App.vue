<template>
  <div id="app">
    <div class="progress-container">
      <div class="progress-bar" id="myBar"></div>
    </div> 
    <div id="navbar">
      <Header />
    </div>
    <router-view/>
    <Footer />
    <button class="_top" id="scrollBtn" @click="goTop">
      <svg focusable="false" preserveAspectRatio="xMidYMid meet" style="will-change:transform" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" aria-hidden="true" fill="currentColor"><path d="M16 13L6 23l1.41 1.41L16 15.83l8.59 8.58L26 23 16 13zM4 7h24v2H4z"></path></svg>
    </button>
  </div>
</template>

<script>
import axios from 'axios';

const url = "https://www.amanimedia.cd"

// When the user scrolls the page, execute myFunction 
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  // ScrollBar
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  // NavBar
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
};


export default {
  mounted() {
    var nua = navigator.userAgent;
    var isAndroid =
      nua.indexOf("Mozilla/5.0") > -1 &&
      nua.indexOf("Android ") > -1 &&
      nua.indexOf("AppleWebKit") > -1 &&
      nua.indexOf("Chrome") === -1;
    if (isAndroid) {
      $("select.form-control")
        .removeClass("form-control")
        .css("width", "100%");
    }
    //
    $('[data-toggle="tooltip"]').tooltip({ boundary: 'window' });
    //
    window.addEventListener('click', function(event) {
      if (!event.target.matches('[data-toggle="tooltip"]')) {
        $('[data-toggle="tooltip"]').tooltip('hide');
      }
    });
    //
    window.addEventListener("scroll", function(e) {
      // this.onScroller();

      if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
      ) {
        if (document.getElementById("scrollBtn")) {
          document.getElementById("scrollBtn").style.display = "block";
        }
      } else {
        if (document.getElementById("scrollBtn")) {
          document.getElementById("scrollBtn").style.display = "none";
        }
      }
    });
  },
  methods: {
    onCreated() {
      this.fetchPosts();
      this.fetchEconomy();
      this.fetchSociety();
      this.fetchInternational();
      this.fetchSport();
    },
    fetchPosts() {
      return fetch('/main.php/wp-json/wp/v2/posts?_embed&per_page=20&order_by=date&order=desc')
      .then((response) => {
          return response.json();
        })
        .then((response) => {
          // console.log('Posts fetched');
          const filteredResponse = response.map(article => article._embedded['wp:featuredmedia'] ? article._embedded['wp:featuredmedia']['0'].source_url : null);
          // console.log("IMAGES OF POSTS FETCHED: ",filteredResponse);
          this.$store.dispatch('setPosts', response);
        });
    },
    fetchEconomy() {
      return fetch('/main.php/wp-json/wp/v2/posts?_embed&per_page=10&order_by=date&order=desc&categories=2')
      .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.$store.dispatch('setEconomy', response);
        });
    },
    fetchSociety() {
      return fetch('/main.php/wp-json/wp/v2/posts?_embed&per_page=10&order_by=date&order=desc&categories=9')
      .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.$store.dispatch('setSociety', response);
        });
    },
    fetchInternational() {
      return fetch('/main.php/wp-json/wp/v2/posts?_embed&per_page=10&order_by=date&order=desc&categories=10')
      .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.$store.dispatch('setInternational', response);
        });
    },
    fetchSport() {
      return fetch('/main.php/wp-json/wp/v2/posts?_embed&per_page=10&order_by=date&order=desc&categories=3')
      .then((response) => {
          return response.json();
        })
        .then((response) => {
          this.$store.dispatch('setSport', response);
        });
    },
    goTop() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
  },
  created() {
    window.addEventListener('online', function() {
      this.onCreated();
    });
    this.onCreated();
    console.log('Amani Media ready to use!');
  }
}
</script>

<style lang="scss">
@import url("../static/fontawesome/css/all.css");
@font-face {
  font-family: 'Grand Sage';
  src: url('../static/gd-sage-bold.woff2') format('woff2')
}
@font-face {
  font-family: 'Grand Sherpa';
  src: url('../static/gdsherpa-regular.woff2') format('woff2')
}

#app {
  font-family: "Grand Sherpa", "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smootihing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #212121;
  overflow-x:hidden;
  background-color: rgba($color: #f9f9f9, $alpha: .6);
  padding-top:120px;
}
a {
  text-decoration:none;
  color:inherit;
  &:hover {
    color: inherit;
  }
}
// img {
//   width:100%;
//   object-fit: cover;
// }
.gd-sage {
  font-family: "Grand Sage", "Roboto", Helvetica, Arial, sans-serif;  
}
/* The progress container (grey background) */
.progress-container {
  position:fixed;
  top:0;
  z-index:1000;
  width: 100%;
  height: 2px;
  background: #ffffff;
}

/* The progress bar (scroll indicator) */
.progress-bar {
  height: 3px;
  background: rgba($color: #2686c1, $alpha: .9);
  width: 0%;
}
#navbar {
  position: fixed; /* Make it stick/fixed */
  z-index:999;
  top: 0; /* Stay on top */
  width: 100%; /* Full width */
  transition: top 0.3s; /* Transition effect when sliding down (and up) */
}


._cnbc_hero1 {
    height: 436px;
    background: #071d39;
    z-index:2;
}

._cnbc_imgMask {
    position: absolute;
    top: 0;
    right: 0;
    // width: 65%;
    height: 100%;
    padding-top: 0;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 65%;
        height: 100%;
        background: -webkit-gradient(linear, left top, right top, color-stop(1%, #071d39), color-stop(99%, rgba(7, 29, 57, 0)));
        background: linear-gradient(90deg, #071d39 1%, rgba(7, 29, 57, 0) 99%);
        z-index:2;
    }
}

._cnbc_content {
    position: relative;
    padding: 0 20px 20px;
    // &:before {
    //     content: "";
    //     background: -webkit-gradient(linear, left top, left bottom, from(transparent), to(#071d39));
    //     background: linear-gradient(transparent, #071d39);
    //     position: absolute;
    //     top: -70px;
    //     left: 0;
    //     height: 70px;
    //     width: 100%;
    // }
}

@media (min-width: 1340px) {
    ._cnbc_content {
        padding: 50px 0 56px 40px;
    }
}

@media (min-width: 1020px) {
    ._cnbc_content {
        padding: 40px 0 35px 50px;
    }
}

@media (min-width: 760px) {
    ._cnbc_content {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        height: 100%;
        margin: 0;
        padding: 50px 0 50px 58px;
        background: transparent;
    z-index:2;
    }
}

._cnbc_content_title {
    margin: 3px 0 12px;
    min-width: 318px;
    max-height: 154px;
    font-size: 24px!important;
    font-weight: 700;
    line-height: 28px;
    color: #fff;
    text-shadow: 0 0 6px #333;
    overflow-y: hidden;
}

@media (min-width: 1340px) {
    ._cnbc_content_title {
        width: 415px;
        max-height: 210px;
        font-size: 40px!important;
        line-height: 42px;
        margin: 13px 0 18px;
    }
}

@media (min-width: 1020px) {
    ._cnbc_content_title {
        max-height: 185px;
        font-size: 34px!important;
        line-height: 1.1;
    }
}

@media (min-width: 760px) {
    ._cnbc_content_title {
        width: 349px;
        max-height: 180px;
        line-height: 36px;
        font-size: 34px!important;
        margin: 6px 0 26px;
    }
}

._cnbc_content_description {
    min-width: 318px;
    height: 54px;
    padding: 0;
    margin: 0;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    overflow-y: hidden;
}

@media (min-width: 1340px) {
    ._cnbc_content_description {
        width: 40%;
    }
}

@media (min-width: 1020px) {
    ._cnbc_content_description {
        width: 50%;
    }
}

@media (min-width: 760px) {
    ._cnbc_content_description {
        width: 349px;
        height: 55px;
        padding: 0;
    }
}

@media (min-width: 1340px) {
    ._cnbc_thumbnail {
        height: 123px;
        // width: 123px;
    }
}

@media (min-width: 760px) {
    ._cnbc_thumbnail {
        // width: 80px;
        height: 80px;
    }
}

._cnbc_thumbnail {
    height: 126px;
    width: 100%;
    object-fit: cover;
}

._cnbc-separator {
    margin-bottom: 12px;
    border-bottom: 1px dashed #ddd;
    opacity: 1;
    -webkit-transition: opacity .15s linear;
    transition: opacity .15s linear;
    &:last-child {
        border-bottom: none;
    }
}
</style>

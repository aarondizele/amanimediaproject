<template>
  <div>
    <div class="bg-white">
      <div
        class="_flex flex-wrap justify-content-between px-4"
        style="background-color:white"
      >
        <div class="_flex">
          <h1 class="m-0 _font2 mr-4">
            <router-link class to="/" style="width:110px;">
              <img src="../../assets/logo.png" class="nav-brand __logo" alt />
            </router-link>
          </h1>
          <div class="d-none d-md-block">
            <button
              class="_button _button-outline _flex _center rounded-pill gd-sage"
              @click="searchable = !searchable"
            >
              <i class="far fa-search mr-1"></i>
              Rechercher
            </button>
          </div>
        </div>
        <div class="d-none d-md-flex flex-row align-items-center">
          <router-link tag="a" to="/" class="_button">Accueil</router-link>
          <router-link tag="a" to="/info" class="_button">Infos</router-link>
          <a class="_button dropdown">
            <a
              class="nav-link dropdown-toggle px-0"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >Annonces des ventes</a>
            <div
              class="dropdown-menu _button-outline rounded-0"
              aria-labelledby="navbarDropdown"
              v-show="categories.length"
            >
              <router-link
                class="dropdown-item"
                v-for="(category, i) in categories"
                :key="i"
                :to="`/annonce/${category.slug}`"
              >{{category.name}}</router-link>
            </div>
          </a>
          <a class="_button">Forums</a>
          <a class="_button">Archives</a>
          <router-link tag="a" to="/a-propos" class="_button">À propos</router-link>
          <a class="_button _button-outline rounded-pill gd-sage">Nous contacter</a>
        </div>
        <div class="d-block d-md-none">
          <div class="_flex">
            <button
              class="bg-white font-weight-bold border-0 _font2 mr-2"
              @click="searchable = !searchable"
            >
              <i class="far fa-search mr-1"></i>
            </button>
            <button class="_button _button-outline _flex _center font-weight-bold _font2">
              <i class="far fa-bars mr-1"></i>
              Menu
            </button>
          </div>
        </div>
      </div>
      <nav class="navbar navbar-expand-md navbar-light bg-white px-12 __extend">
        <span class="navbar-text gd-sage text-dark mr-3">
          Liens rapides:
        </span>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item mr-4" v-for="(category, i) in menuCategories" :key="i">
              <router-link tag="a" :to="`/categorie/${category.slug}`" class="nav-link bg-white rounded-pill">
              {{category.name}}
              </router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <!--  -->
    <div class="_search" v-show="searchable">
      <div class="position-relative w-100 h-100">
        <div @click="searchable = !searchable" class="d-block">
          <i class="fal fa-times text-white m-4 c-pointer" style="font-size:36px"></i>
        </div>
        <div class="py-5 px-2 p-md-5">
          <div class="form-group _input-border-bottom">
            <input
              type="text"
              class="text-white __display-4 _input bg-transparent text-center gd-sage"
              placeholder="Entrer le mot clé"
              v-model.trim="searchTerm"
              @keyup.enter="onSearch"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchable: false,
    categories: [],
    searchTerm: "",
    menuCategories: [
      {name: 'Economie', slug: 'economie'},
      {name: 'Société', slug: 'societe'},
      {name: 'Internationales', slug: 'internationales'},
      {name: 'Sport', slug: 'sport'},
      {name: 'Culture', slug: 'culture'},
      {name: 'Environnement', slug: 'environnement'},
      {name: 'Musique', slug: 'musique'},
    ]
  }),
  methods: {
    fetchCategories() {
      return fetch(
        "/main.php/wp-json/wp/v2/categories?per_page=100"
      )
        .then(response => {
          return response.json();
        })
        .then(response => {
          this.categories = response;
        });
    },
    onSearch() {
      if (!this.searchTerm) return;
      this.searchable = false;

      return this.$router.push({
        path: "/recherche",
        query: { q: this.searchTerm }
      });
    }
  },
  mounted() {
    $(".dropdown-menu a.dropdown-toggle").on("click", function(e) {
      if (
        !$(this)
          .next()
          .hasClass("show")
      ) {
        $(this)
          .parents(".dropdown-menu")
          .first()
          .find(".show")
          .removeClass("show");
      }
      var $subMenu = $(this).next(".dropdown-menu");
      $subMenu.toggleClass("show");

      $(this)
        .parents("li.nav-item.dropdown.show")
        .on("hidden.bs.dropdown", function(e) {
          $(".dropdown-submenu .show").removeClass("show");
        });

      return false;
    });
  },
  created() {
    window.addEventListener("online", function() {
      this.fetchCategories();
    });
    this.fetchCategories();
  }
};
</script>

<style lang="scss" scoped>
.__extend {
  background-color: white;
  background-position-y: 55px!important;
  background: url(../../assets/_fin_bg_dots_deg.gif) left 10px no-repeat!important;
}
::placeholder {
  color: white;
}
._input {
  border: none;
  width: 100%;
  padding-bottom: 6px;
  outline: none;
  font-weight: 500;
  font-family: "Forma DJR Deck", "Roboto", Helvetica, Arial, sans-serif !important;
}
._input-border-bottom {
  border-bottom: 4px solid white;
}
._search {
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba($color: #000000, $alpha: 0.8);
  z-index: 1000;
}
.__header {
  border-bottom: .5px solid #f2f2f2;
  -webkit-box-shadow: 0 2px 18px 0 rgba(129,162,182,.2);
  box-shadow: 0 2px 18px 0 rgba(129,162,182,.2);
}
</style>

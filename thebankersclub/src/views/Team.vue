<template>
  <div>
    <div class="__team">
      <div class="container __container py-10 py-15-md">
        <h1 class="font-weight-bold aino-font">Notre équipe</h1>
        <div class="row mt-8">
          <div class="col-12 col-md-6 col-lg-4 col-xl-3 mb-8" v-for="i in 8" :key="i">
            <div class="___card card border-0">
              <div class="card-header __card-header px-0">
                <div class="card-header-text body-2">
                  <div
                    class="font-weight-bold aino-font"
                  >
                    <p>Président, CEO</p>
                  </div>
                </div>
                <div class="yellow-separator"></div>
              </div>
              <img
                src="https://cdn2.hubspot.net/hubfs/3370273/Website_assets_3/images/home/Developpeurs.jpg"
                alt
                class="card-img-top __card-img"
              />
              <div class="card-footer text-center __card-footer border rounded-0 py-5">
                <h6 class="font-weight-bold aino-font m-0">Didier Ndumb</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.__card-img {
      height: 340px;
    object-fit: cover;
    object-position: top;
}
.__container {
  background-image: url(../assets/small-cross.svg),
    url(../assets/small-cross.svg), url(../assets/small-cross.svg),
    url(../assets/small-cross.svg);
  background-position: 0 48px, calc(100% - 190px) 48px, 0 calc(100% - 130px),
    calc(100% - 190px) calc(100% - 130px);
  background-repeat: no-repeat;
}
.__team {
  background-image: url("../assets/planet-segment.svg");
  position: relative;
  width: 100%;
  display: flex;
  padding: 0;
  margin: 0;
  overflow: hidden;
  background-color: var(--color-background-dual);
  background-position: 0 -110px;
  background-repeat: no-repeat;
}
.card-header-text {
  line-height: 5px;
  color: var(--color-font);
  margin-right: 8px;
}
.yellow-separator {
  flex: 1;
  height: 4px;
  background-color: var(--color-yellow-40);
  margin: auto;
}
.__card-header {
  height: 29px;
  display: flex;
  background-color: var(--color-background-dual);
}
.__card-footer {
  background-color: var(--color-background-dual);
}
@media screen and (min-width:1024px) {
  .__card-img {
    height: 280px;
  }
}
</style>
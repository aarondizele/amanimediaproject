<template>
  <div>
    <div class="row actu2 mt-3 w-100">
      <div class="col-12 col-md-6 mb-4" v-for="n in 8" :key="n">
        <div class="row no-gutters">
          <div class="col-4">
            <div class="__placeholder-sm __placeholder"></div>
          </div>
          <div class="col-8 pl-3">
            <div class="__placeholder-text mb-3">
            </div>
            <div class="post_detail post_date __placeholder-date"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<template>
  <div>
    <div class="row actu1 w-100">
      <div class="col-12 col-md-6" v-for="i in 2" :key="i">
        <div class="one_half div_wrapper">
          <div class="post_img">
            <div class="__placeholder-lg __placeholder"></div>
          </div>
          <div class="post_header">
            <h5 class="font-weight-bold _font2 __placeholder-h5 mb-2"></h5>
            <div class="post_detail post_date __placeholder-date"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="row actu2 mt-4">
      <div class="col-12 col-md-6 mb-4" v-for="n in 4" :key="n">
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
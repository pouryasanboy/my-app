<template>
  <div v-if="data">
      <swiper ref="swiper" :options="swiperOption"
              :slidesPerView="2"
              :navigation="true"
              releaseOnEdges
              :mousewheel="true"
              :speed="1000"
              :fadeEffect="{crossFade: true}"
              :modules="modules"
              class="mySwiper p-10 mx-24">
        <swiper-slide   v-for="(data, index) in data.slider.images"
                        :key="index">
          <div class="flex justify-center">
            <img :src="data.url" alt="">
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>
<script>
import { Mousewheel, Pagination, Navigation } from 'swiper'

import { SwiperCore, Swiper, SwiperSlide } from 'swiper-vue2'
import {request} from "@/datocms";
SwiperCore.use([Mousewheel, Pagination, Navigation ])
// Import Swiper styles
export default {
  name: "SwiperSlider",
  data() {
    return {
      data: null,
      modules: [Mousewheel, Pagination, Navigation],
      swiperOption: {
        spaceBetween: 40,
        touchReleaseOnEdges: true,
        mousewheel: {
          releaseOnEdges: true
        },
        // autoHeight: true,
        setWrapperSize: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true,
        },
        navigation: {
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
        },
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  async mounted() {
    this.data = await request({
      query: `
      query MyQuery {
  slider {
    images {
      id
      url
    }
  }
}
      `
    });
  },
};
</script>
<style lang="scss" scoped>
.mySwiper {
  ::v-deep.swiper-pagination {
    & .swiper-pagination-bullet-active {
      background: transparent !important;
      border: 1px white solid;
      border-radius: 100%;
    }
  }
  ::v-deep .swiper-button-next::after {
    font-size: 20px !important;
    font-weight: 900 !important;
  }
  ::v-deep .swiper-button-prev::after {
    font-size: 20px !important;
    font-weight: 900 !important;
  }
}
@media only screen and (min-width: 1024px) {
  .box {
    height: min-content !important;
    align-self: center !important;
  }
  .mySwiper {
    ::v-deep .swiper-button-next {
      right: 100px !important;
    }
    ::v-deep .swiper-button-prev {
      left: 100px !important;
    }
  }
}
</style>

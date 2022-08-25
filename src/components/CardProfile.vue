<template>
  <div v-if="data" class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
      <img class="rounded-t-lg" :src="data.showMe.profilePic.url" alt="">
    </a>
    <div class="p-5">
      <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ data.showMe.fullName }}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ data.showMe.profession.value.document.children[0].children[0].value }}</p>
      <span class="mb-3 font-normal text-red-500 dark:text-gray-400">
          {{ data.showMe.location.value.document.children[0].children[0].value }}
      </span>
    </div>
  </div>

</template>
<script>
import { request } from "@/datocms";
export default {
  name: "CardProfile",
  data() {
    return {
      data: null
    };
  },
  async mounted() {
    this.data = await request({
      query : `
      query MyQuery{
        showMe {
    id
    fullName
    location {
      value
    }
    profession {
      value
    }
    profilePic {
      url
    }
  }
      }
      `
    });
  }
}
</script>

<template>
  <div>
    <div class="bg-gray-200 text-center m-10 p-4" v-if="data">
      <h2 class="text-2xl text-red-500 font-bold">{{ data.course.courseHeader[0].smallTitle }}</h2>
      <div class="mt-4 text-bold text-xl">{{ data.course.courseHeader[0].bigTitle }}</div>
      <div class="mt-6">{{ data.course.courseHeader[0].description }}</div>
      <button>{{ data.course.courseHeader[0].buttonText }}</button>
    </div>
    <div class="flex justify-center mt-12">
      <CardProfile />
    </div>
  </div>
</template>
<script>
import { request } from "./datocms";
import CardProfile from "@/components/CardProfile";
export default {
  name: "App",
  components: {CardProfile},
  data() {
    return {
      data: null
    };
  },
  async mounted() {
    this.data = await request({
      query : `
      query MyQuery{
      course {
    id
    name
    courseHeader {
      ... on CourseHeaderRecord {
        smallTitle
        bigTitle
        buttonText
        description
      }
    }
  }
      }
      `
    });
  }
};
</script>

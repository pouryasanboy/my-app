<template>
  <div class="bg-gray-500" v-if="data">
    <h2 class="text-2xl text-red-500">{{ data.course.courseHeader[0].smallTitle }}</h2>
    <div>{{ data.course.courseHeader[0].bigTitle }}</div>
    <div>{{ data.course.courseHeader[0].description }}</div>
    <button>{{ data.course.courseHeader[0].buttonText }}</button>
  </div>
</template>
<script>
import { request } from "./datocms";
export default {
  name: "App",
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

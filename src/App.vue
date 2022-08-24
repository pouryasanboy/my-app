<template>
  <div>
    <div>{{ data }}</div>
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
      query: `
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
      `
    });
  }
};
</script>

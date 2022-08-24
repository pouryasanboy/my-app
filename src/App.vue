<template>
  <div>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">Something bad happened</div>
    <div v-else>{{data}}</div>
  </div>
</template>
<script>
import { request } from "./datocms";
const HOMEPAGE_QUERY = `query HomePage($limit: IntType) {
  allBlogPosts(first: $limit) {
    title
  }
}`;
export default {
  name: "App",
  data: () => ({
    data: null,
    error: null,
    loading: true,
  }),
  async mounted() {
    try {
      this.data = await request({
        query: HOMEPAGE_QUERY,
        variables: {
          limit: 10
        }
      });
    } catch (e) {
      this.error = e;
    }
    this.loading = false;
  }
};
</script>

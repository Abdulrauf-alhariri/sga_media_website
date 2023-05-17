<script>
export default {
  name: "blog-paragraph",
  props: {
    content: String,
  },
  data() {
    console.log(this.content);
    let content_list = this.content.split(":");
    return {
      caption: content_list[0],
      text: content_list[1],
    };
  },
};
</script>

<template>
  <div class="paragraph-container">
    <h2>{{ caption }}</h2>
    <p>{{ text }}</p>
  </div>
</template>

<style scoped>
.paragraph-container {
  text-align: left;
  margin: 1.5rem 0;
}

.paragraph-container h2 {
  margin-bottom: 1rem;
}

.paragraph-container p {
  color: var(--text-color);
}
</style>

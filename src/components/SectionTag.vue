<template>
  <div>
    <span class="section-summary-tag" style="width: 50%">
      <img alt="checkmark" class="checkmark" src="@/assets/images/checkmark.svg">
      <span>{{ title }}</span>
    </span>
  </div>
</template>

<script>
export default {
  name: "SectionTag",
  props: {
    title: String
  }
}
</script>

<style scoped>
.section-summary-tag {
  display: inline-block;
  position: relative;
  min-width: max-content;
  font-size: 32px;
  line-height: 37px;
  background-color: white;
  border: 1px solid #4b006e;
  border-radius: 7px;
  padding: 0.1em;
}

img.checkmark {
  display: inline-block;
  width: 22px;
  height: 22px;
  position: absolute;
  left: 10px;
  bottom: 0;
  top: 0;
  margin: auto;
}

img.checkmark + span {
  margin-left: 35px;
  margin-right: 35px
}
</style>

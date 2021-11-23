<template>
  <p class="stor-paragraph">{{ readme }}</p>
</template>

<script>
export default {
  name: 'storContent',
  props: {
    readme: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="css" src="./storContent.css">

</style>

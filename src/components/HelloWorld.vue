<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img
      alt="Doggy Snout"
      class="doggy-snout"
      src="../assets/white-dog-nose.png"
    />
    <FinderForm></FinderForm>
  </div>
</template>

<script>
import FinderForm from './FinderForm';

export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  components: { FinderForm }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  /* color: #42b983; */
}

img.doggy-snout {
  max-width: 180px;
}
</style>

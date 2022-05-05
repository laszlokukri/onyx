<template>
  <div class="cnt" style="background-color: #A6A6A6;">
    <Nav />
    <Errors v-if="error" :msg="error"/>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Nav from '@/components/Nav.vue';
import Errors from '@/components/Errors.vue'

export default {
  components: {
    Nav,
    Errors
  },
  computed: {
    ...mapGetters(['error'])
  }
};
</script>

<style>

html, body{
  background-color: #A6A6A6;
}

a{
  text-decoration: none;
}

</style>

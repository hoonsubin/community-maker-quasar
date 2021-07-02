<template>
  <q-page padding>
    <div class="q-pa-md q-gutter-sm">
<q-btn color="deep-orange" push :to="'home'">
      <div class="row items-center no-wrap">
        <q-icon left name="map" />
        <div class="text-center">View<br />Timeline</div>
      </div>
    </q-btn>
    <q-btn color="deep-orange" pus @click="showLogin = true">
      <div class="row items-center no-wrap">
        <q-icon left name="map" />
        <div class="text-center">Login</div>
      </div>
    </q-btn>

    <login-modal v-model="showLogin"/>
    </div>

  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import LoginModal from '../components/LoginModal.vue';

export default defineComponent({
  name: 'PageIndex',
  components: {
    LoginModal
  },
  setup(){
    return {
      showLogin: ref(false),
    }
  }
});
</script>

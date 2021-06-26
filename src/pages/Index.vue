<template>
  <q-page padding>
    <q-btn color="deep-orange" push :to="'home'">
      <div class="row items-center no-wrap">
        <q-icon left name="map" />
        <div class="text-center">View<br />Timeline</div>
      </div>
    </q-btn>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
});
</script>

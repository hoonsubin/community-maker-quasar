<template>
  <q-dialog v-model="showLoginModal" persistent transition-show="scale" transition-hide="scale">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Login</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

      <q-card-actions vertical align="center">
        <!--todo: add button styling-->
        <q-btn color="blue-7" pus>Sign in with Google</q-btn>
        <q-btn color="blue-5" pus>Sign in with Twitter</q-btn>
      </q-card-actions>
      <!--todo: add other login-related actions-->
      </q-card>
    </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'LoginModal',
  props:{
    modelValue: Boolean,
  },
  setup(props, {emit}) {
    const showLoginModal = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });
    return {
      showLoginModal
    }
  }
});
</script>

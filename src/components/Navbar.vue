<template>
  <q-header elevated class="bg-dark q-py-xs" height-hint="58">
    <q-toolbar>
      <q-btn
        flat
        dense
        round
        @click="$emit('toggleMenu')"
        aria-label="Menu"
        icon="menu"
      />

      <q-btn flat no-caps no-wrap class="q-ml-xs" v-if="$q.screen.gt.xs">
        <q-icon :name="fasAddressCard" color="primary" size="28px" />
        <q-toolbar-title shrink class="text-weight-bold">
          Community Maker
        </q-toolbar-title>
      </q-btn>

      <q-space />

      <div
        v-if="$q.screen.gt.sm"
        class="ML__toolbar-input-container row no-wrap"
      >
        <q-input
          dense
          outlined
          square
          type="text"
          v-model="searchTerm"
          @keypress.enter="emitSearchEvent"
          placeholder="Search"
          class="col"
        />
        <q-btn
          class="ML__toolbar-input-btn"
          color="grey-8"
          text-color="grey-3"
          icon="search"
          unelevated
          @click="emitSearchEvent"
        />
      </div>

      <q-space />

      <div class="q-gutter-sm row items-center no-wrap">
        <q-btn round dense flat color="grey-5" icon="message">
          <q-badge color="primary" text-color="white" floating>
            {{ messages }}
          </q-badge>
          <q-tooltip>Messages</q-tooltip>
        </q-btn>
        <q-btn round dense flat color="grey-5" icon="notifications">
          <q-badge color="primary" text-color="white" floating>
            {{ notifications }}
          </q-badge>
          <q-tooltip>Notifications</q-tooltip>
        </q-btn>
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
import { ref, defineComponent, watchEffect } from 'vue';
import { fasAddressCard } from '@quasar/extras/fontawesome-v5';

export default defineComponent({
  name: 'Navbar',
  setup(_props, { emit }) {
    const drawerOpen = ref(false);

    const searchTerm = ref('');

    // make this dynamically fetch
    const notifications = ref(5);
    const messages = ref(3);

    watchEffect(() => {
      emit('update:searchTerm', searchTerm.value);
    });

    const toggleLeftDrawer = () => {
      drawerOpen.value = !drawerOpen.value;
      emit('toggleDrawer', drawerOpen);
    };

    const emitSearchEvent = () => {
      // prevent empty string from emitting
      if (searchTerm.value) {
        emit('clickSearch', searchTerm.value);
      }
    };

    return {
      fasAddressCard,
      drawerOpen,
      notifications,
      messages,
      searchTerm,
      toggleLeftDrawer,
      emitSearchEvent,
    };
  },
});
</script>

<style lang="sass">
.ML
  &__toolbar-input-container
    min-width: 100px
    width: 55%
  &__toolbar-input-btn
    border-radius: 0
    border-style: solid
    border-width: 1px 1px 1px 0
    border-color: rgba(0,0,0,.24)
    max-width: 60px
    width: 100%
</style>

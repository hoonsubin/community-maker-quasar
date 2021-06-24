<template>
  <q-layout view="hHh Lpr fFf">
    <navbar
      @toggle-menu="toggleLeftDrawer"
      @click-search="onClickSearch"
      @update:search-term="onInputSearch"
    />

    <drawer-side-menu v-model="leftDrawerOpen" />
    <!--this is where the page content is rendered-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { fasAddressCard } from '@quasar/extras/fontawesome-v5';
import Navbar from '../components/Navbar.vue';
import DrawerSideMenu from '../components/DrawerSideMenu.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    Navbar,
    DrawerSideMenu,
  },
  setup() {
    const leftDrawerOpen = ref(false);

    const search = ref('');

    // make this dynamically fetch
    const notifications = ref(5);
    const messages = ref(3);

    const toggleLeftDrawer = () => {
      console.log('toggling drawer menu');
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const onInputSearch = (term: string) => {
      console.log(term);
    };

    const onClickSearch = (term: string) => {
      if (term) {
        console.log(`Searching with the term: "${term}"`);
      } else {
        console.warn('no search terms found!');
      }
    };

    return {
      fasAddressCard,
      leftDrawerOpen,
      notifications,
      messages,
      search,
      toggleLeftDrawer,
      onClickSearch,
      onInputSearch,
    };
  },
});
</script>

<style lang="sass">
.YL
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
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>

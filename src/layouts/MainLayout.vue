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
      leftDrawerOpen,
      toggleLeftDrawer,
      onClickSearch,
      onInputSearch,
    };
  },
});
</script>

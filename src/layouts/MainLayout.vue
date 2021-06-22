<template>
  <q-layout view="hHh Lpr fFf">
    <q-header elevated class="bg-dark q-py-xs" height-hint="58">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="toggleLeftDrawer"
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
          class="YL__toolbar-input-container row no-wrap"
        >
          <q-input
            dense
            outlined
            square
            v-model="search"
            placeholder="Search"
            class="col"
          />
          <q-btn
            class="YL__toolbar-input-btn"
            color="grey-8"
            text-color="grey-3"
            icon="search"
            unelevated
            @click="onClickSearch"
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

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-dark"
      :width="240"
    >
      <q-scroll-area class="fit">
        <!--user profile button-->
        <q-list padding>
          <q-item v-ripple clickable>
            <q-item-section avatar>
              <q-avatar size="26px">
                <img :src="userProfile.img" />
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ userProfile.loginName }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links1" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-my-md" />

          <q-item v-for="link in links4" :key="link.text" v-ripple clickable>
            <q-item-section avatar>
              <q-icon color="grey" :name="link.icon" />
            </q-item-section>
            <q-item-section>
              <q-item-label>{{ link.text }}</q-item-label>
            </q-item-section>
          </q-item>

          <q-separator class="q-mt-md q-mb-lg" />

          <div class="q-px-md text-grey-5">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in buttons1"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
          <div class="q-py-md q-px-md text-grey-5">
            <div class="row items-center q-gutter-x-sm q-gutter-y-xs">
              <a
                v-for="button in footerBtns"
                :key="button.text"
                class="YL__drawer-footer-link"
                href="javascript:void(0)"
              >
                {{ button.text }}
              </a>
            </div>
          </div>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <!--this is where the page content is rendered-->
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';
import {
  fasSignOutAlt,
  fasPlusCircle,
  fasAddressCard,
} from '@quasar/extras/fontawesome-v5';

const menuLinks = {
  links1: [
    { icon: 'home', text: 'Home' },
    { icon: fasPlusCircle, text: 'Create Community' },
    { icon: 'folder', text: 'Saved Posts' },
  ],
  links4: [
    { icon: 'settings', text: 'Settings' },
    { icon: 'help', text: 'Help' },
    { icon: 'feedback', text: 'Send feedback' },
    { icon: fasSignOutAlt, text: 'Sign Out' },
  ],
  buttons1: [
    { text: 'About' },
    { text: 'Copyright' },
    { text: 'Contact us' },
    { text: 'Advertise' },
    { text: 'Developers' },
  ],
  footerBtns: [
    { text: 'Terms' },
    { text: 'Privacy' },
    { text: 'Policy & Safety' },
    { text: 'Test new features' },
  ],
};

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const leftDrawerOpen = ref(false);

    const search = ref('');

    // make this dynamically fetch
    const notifications = ref(5);
    const messages = ref(3);
    const userProfile = reactive({
      img: 'https://cdn.quasar.dev/img/boy-avatar.png',
      loginName: 'XXcoolguy_69',
    });

    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    };

    const onClickSearch = () => {
      if (search.value) {
        console.log(`Searching with the term: "${search.value}"`);
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
      userProfile,
      ...menuLinks,
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

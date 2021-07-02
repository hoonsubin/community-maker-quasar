<template>
  <q-drawer
    v-model="toggleMenuView"
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
              class="ML__drawer-footer-link"
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
              class="ML__drawer-footer-link"
              href="javascript:void(0)"
            >
              {{ button.text }}
            </a>
          </div>
        </div>
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script lang="ts">
import { defineComponent, reactive, computed } from 'vue';
import { fasSignOutAlt, fasPlusCircle } from '@quasar/extras/fontawesome-v5';

// todo: pass this as props
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

const currentUserInfo = {
  img: 'https://cdn.quasar.dev/img/boy-avatar.png',
  loginName: 'XXcoolguy_69',
};

export default defineComponent({
  name: 'DrawerSideMenu',
  props: {
    modelValue: Boolean,
  },
  setup(props, { emit }) {
    const toggleMenuView = computed({
      get: () => props.modelValue,
      set: (value) => emit('update:modelValue', value),
    });

    const userProfile = reactive(currentUserInfo);

    return {
      userProfile,
      toggleMenuView,
      ...menuLinks,
    };
  },
});
</script>

<style lang="sass">
.ML
  &__drawer-footer-link
    color: inherit
    text-decoration: none
    font-weight: 500
    font-size: .75rem
    &:hover
      color: #000
</style>

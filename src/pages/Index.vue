<template>
  <q-page padding>
    <div class="column wrap justify-start items-center content-stretch">
      <q-intersection
        v-for="post in postCount"
        :key="post"
        class="example-item"
      >
        <community-post-item
          :title="'Random Post #' + post"
          :uploader="{
            nickName: 'John Doe',
            avatarSrc: 'https://cdn.quasar.dev/img/boy-avatar.png',
          }"
          contentSrc="https://picsum.photos/1080/720"
          :tags="['hello', 'this is a test']"
        />
      </q-intersection>
    </div>
  </q-page>
</template>

<script lang="ts">
import CommunityPostItem from 'components/CommunityPostItem.vue';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { CommunityPostItem },
  setup() {
    // creates mock post
    const postCount = ref(60);

    return { postCount };
  },
});
</script>
<style lang="sass" scoped>
.example-item
  min-height: 300px
  min-width: 300px
  margin: 0.5rem
</style>

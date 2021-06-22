<template>
  <q-card>
    <q-img
      v-if="isImage"
      :src="contentSrc"
      spinner-color="white"
      fit="cover"
    ></q-img>
    <q-video v-else :src="contentSrc" />

    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img :src="uploader.avatarSrc" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ title }}</q-item-label>
        <q-item-label caption>{{ uploader.nickName }}</q-item-label>
      </q-item-section>
    </q-item>

    <q-card-section class="q-pa-md" v-if="tags">
      <q-chip
        v-for="tag in tags"
        :key="tag"
        clickable
        @click="onClickTag(tag)"
        color="grey-5"
        text-color="dark"
      >
        {{ tag }}
      </q-chip>
    </q-card-section>

    <q-card-actions align="left">
      <q-btn
        flat
        round
        :color="userReation === 'liked' ? 'primary' : 'grey-5'"
        icon="thumb_up"
        @click="onClickLike"
        ><q-badge color="primary" text-color="white" floating>
          {{ likes }}
        </q-badge>
        <q-tooltip>Like</q-tooltip></q-btn
      >
      <q-btn
        flat
        round
        :color="userReation === 'disliked' ? 'red' : 'grey-5'"
        icon="thumb_down"
        @click="onClickDislike"
        ><q-badge color="red" text-color="white" floating>
          {{ dislikes }}
        </q-badge>
        <q-tooltip>Dislike</q-tooltip></q-btn
      >
      <q-btn flat round color="grey-5" icon="comment"
        ><q-badge color="primary" text-color="white" floating>
          {{ comments }}
        </q-badge>
        <q-tooltip>Comments</q-tooltip></q-btn
      >

      <q-btn
        flat
        round
        :color="postSaved ? 'teal' : 'grey-5'"
        icon="bookmark"
        @click="onClickSavePost"
        ><q-tooltip>Save Post</q-tooltip></q-btn
      >
      <q-space />
      <q-btn flat round color="primary" icon="share" />
    </q-card-actions>
  </q-card>
</template>

<script lang="ts">
import { defineComponent, ref, PropType } from 'vue';

interface UploaderInfo {
  nickName: string;
  avatarSrc: string;
}

type PostReaction = 'liked' | 'disliked' | 'none';

export default defineComponent({
  name: 'CommunityPostItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    uploader: {
      type: Object as PropType<UploaderInfo>,
      required: true,
    },
    contentSrc: {
      type: String,
      required: true,
    },
    isSaved: {
      type: Boolean,
      default: false,
    },
    tags: {
      type: Array as PropType<string[]>,
    },
  },
  setup(props) {
    // check if the provided media url is an image or not
    const isImage = ref(true);

    const postSaved = ref(props.isSaved);

    // note: this is just a placeholder value
    const likes = ref(Math.round(Math.random() * 100));

    const dislikes = ref(Math.round(Math.random() * 100));

    const comments = ref(Math.round(Math.random() * 100));

    const userReation = ref<PostReaction>('none');

    // note: change the methods as a emit
    const onClickSavePost = () => {
      postSaved.value = !postSaved.value;
    };

    const onClickLike = () => {
      userReation.value = 'liked';
    };

    const onClickDislike = () => {
      userReation.value = 'disliked';
    };

    const onClickTag = (tag: string) => {
      console.log('Clicked tag ' + tag);
    };
    return {
      postSaved,
      isImage,
      likes,
      dislikes,
      comments,
      userReation,
      onClickSavePost,
      onClickLike,
      onClickDislike,
      onClickTag,
    };
  },
});
</script>

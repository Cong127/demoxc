<template>
  <div>
    <van-tabs v-model="active" swipeable @click="onClick">
      <van-tab v-for="(item, index) in tabs" :key="index" :title="item.title">
      </van-tab>
    </van-tabs>
    <van-swipe ref="swiper" :show-indicators="false" @change="onChange">
      <van-swipe-item
        v-for="(item1, index) in videoList"
        :key="index"
        class="product_swiper"
      >
        <video
          class="video-js vjs-default-skin"
          webkit-playsinline="true"
          playsinline="true"
          controls
          preload="auto"
          :poster="item1.href"
          width="600"
          height="400"
          :src="item1.src"
        ></video>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      videoWidth: 640,
      videoHeight: 360,
      active: 0,
      tabs: [
        { title: "人才" },
        { title: "雇主" },
        { title: "合伙人" },
        { title: "推荐" },
        { title: "关注" },
      ],
      videoList: [],
    };
  },
  methods: {
    onChange(index) {
      console.log("当前 Swipe 索引：" + index);
      this.active = index;
    },
    onClick(name, title) {
      console.log("name===", name);
      console.log("title===", title);
      this.$refs.swiper.swipeTo(name);
      console.log(this.$refs.swiper);
    },
    getVideos() {
      axios({
        method: "post",
        url: "/video",
        data: {
          info: "get_video",
        },
      }).then((res) => {
        this.videoList = res.data.data;
      });
    },
  },

  components: {},

  computed: {},

  created() {
    this.getVideos();
  },
};
</script>
<style scoped lang="less">
.van-swipe-item {
  height: calc(100vh - 44px);
}
.video-js {
  width: 100%;
  height: 100%;
}
</style>

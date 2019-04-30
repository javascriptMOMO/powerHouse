<template>
  <div>
    <video
      id="myPlayer"
      poster="https://file.digitaling.com/eImg/uimages/20150907/1441607120885946.gif"
      controls
      playsinline
      webkit-playsinline
      autoplay
    >
      <source :src="this.playUrl" type="rtmp/flv">
    </video>
  </div>
</template>
<script>
export default {
  data() {
    return {
      playUrl:
        "rtmp://rtmp01open.ys7.com/openlive/eb8ec1eb54a84fb28f8e9808c247ca0b",
      player: ""
    };
  },
  created() {},
  mounted() {
    this.player = new EZUIPlayer("myPlayer");
    this.player.play();
  }
};
</script>
<style scoped>
</style>

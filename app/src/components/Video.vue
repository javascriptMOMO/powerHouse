<template>
  <video-player class="vjs-custom-skin videoPlayer" :options="playerOptions"></video-player>
</template>
<script>
import "video.js/dist/video-js.css";
import { videoPlayer } from "vue-video-player";
import "videojs-flash";
const isProduction = process.env.NODE_ENV === "production";
export default {
  components: {
    videoPlayer
  },
  data() {
    return {
      playerOptions: {
        height: "400",
        sources: [
          {
            type: "rtmp/mp4", //rtmp/mp4
            src: "rtmp://media3.sinovision.net:1935/live/livestream"//rtmp://202.69.69.180:443/webcast/bshdlive-pc
          }
        ],
        poster:
          "https://file.digitaling.com/eImg/uimages/20150907/1441607120885946.gif",
        techOrder: ["flash"],
        autoplay: true,
        // controls: true
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true //全屏按钮
        }
      }
    };
  }
};
</script>
香港卫视,rtmp://live.hkstv.hk.lxdns.com/live/hks,

香港财经,rtmp://202.69.69.180:443/webcast/bshdlive-pc

韩国GoodTV,rtmp://mobliestream.c3tv.com:554/live/goodtv.sdp

韩国朝鲜日报,rtmp://live.chosun.gscdn.com/live/tvchosun1.stream

美国1,rtmp://ns8.indexforce.com/home/mystream

美国2,rtmp://media3.scctv.net/live/scctv_800

美国中文电视,rtmp://media3.sinovision.net:1935/live/livestream

湖南卫视,rtmp://58.200.131.2:1935/livetv/hunantv

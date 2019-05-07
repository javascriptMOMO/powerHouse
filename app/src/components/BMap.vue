<template>
  <div id="map">
    <baidu-map
      class="mymap"
      :center="{lng:119.2885, lat: 33.7854}"
      :zoom="10"
      @mousemove="syncPolyline"
      @click="paintPolyline"
      :mapStyle="mapStyle"
    >
      <bm-map-type
        :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
        anchor="BMAP_ANCHOR_TOP_LEFT"
      ></bm-map-type>
    </baidu-map>
  </div>
</template>
<script>
export default {
  data() {
    return {
      mapStyle: {
        styleJson: [
          {
            featureType: "water",
            elementType: "all",
            stylers: {
              color: "#021019"
            }
          },
          {
            featureType: "highway",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "highway",
            elementType: "geometry.stroke",
            stylers: {
              color: "#147a92"
            }
          },
          {
            featureType: "arterial",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "arterial",
            elementType: "geometry.stroke",
            stylers: {
              color: "#0b3d51"
            }
          },
          {
            featureType: "local",
            elementType: "geometry",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "land",
            elementType: "all",
            stylers: {
              color: "#08304b"
            }
          },
          {
            featureType: "railway",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "railway",
            elementType: "geometry.stroke",
            stylers: {
              color: "#08304b"
            }
          },
          {
            featureType: "subway",
            elementType: "geometry",
            stylers: {
              lightness: -70
            }
          },
          {
            featureType: "building",
            elementType: "geometry.fill",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: {
              color: "#857f7f"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.stroke",
            stylers: {
              color: "#000000"
            }
          },
          {
            featureType: "building",
            elementType: "geometry",
            stylers: {
              color: "#022338"
            }
          },
          {
            featureType: "green",
            elementType: "geometry",
            stylers: {
              color: "#062032"
            }
          },
          {
            featureType: "boundary",
            elementType: "all",
            stylers: {
              color: "#1e1c1c"
            }
          },
          {
            featureType: "manmade",
            elementType: "geometry",
            stylers: {
              color: "#022338"
            }
          },
          {
            featureType: "poi",
            elementType: "all",
            stylers: {
              visibility: "off"
            }
          },
          {
            featureType: "all",
            elementType: "labels.icon",
            stylers: {
              visibility: "off"
            }
          },
          {
            featureType: "all",
            elementType: "labels.text.fill",
            stylers: {
              color: "#2da0c6",
              visibility: "on"
            }
          }
        ]
      }
    };
  }
};
</script>
<style scoped>
#map {
  height: 100%;
}
.mymap {
  width: 100%;
  height: 100%;
}
.mymap >>> .anchorBL {
  display: none;
}
</style>


<template>
  <div>
    <v-card class="mb-1 pb-1 text-center progressLinear">
      <!-- 进度条 -->
      <PostProgressLinear></PostProgressLinear>
      <p class="mt-1 mb-0">当前已读20%</p>
    </v-card>
    <!-- 文章目录 -->
    <v-card color="#383C4A">
      <v-card-text>
        <p class="toc">{{ toc }}</p>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import PostProgressLinear from "@/components/plugins/PostProgressLinear";

export default {
  name: "Toc",
  components: {PostProgressLinear},
  props: [
    "toc"
  ],
  data() {
    return {
      // vuetify树形视图的数据案例
      items: [
        {
          id: 1,
          name: 'Applications :',
          children: [
            {id: 2, name: 'Calendar : app'},
            {id: 3, name: 'Chrome : app'},
            {id: 4, name: 'Webstorm : app'},
          ],
        },
        {
          id: 5,
          name: 'Documents :',
          children: [
            {
              id: 6,
              name: 'vuetify :',
              children: [
                {
                  id: 7,
                  name: 'src :',
                  children: [
                    {id: 8, name: 'index : ts'},
                    {id: 9, name: 'bootstrap : ts'},
                  ],
                },
              ],
            },
            {
              id: 10,
              name: 'material2 :',
              children: [
                {
                  id: 11,
                  name: 'src :',
                  children: [
                    {id: 12, name: 'v-btn : ts'},
                    {id: 13, name: 'v-card : ts'},
                    {id: 14, name: 'v-window : ts'},
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 15,
          name: 'Downloads :',
          children: [
            {id: 16, name: 'October : pdf'},
            {id: 17, name: 'November : pdf'},
            {id: 18, name: 'Tutorial : html'},
          ],
        },
        {
          id: 19,
          name: 'Videos :',
          children: [
            {
              id: 20,
              name: 'Tutorials :',
              children: [
                {id: 21, name: 'Basic layouts : mp4'},
                {id: 22, name: 'Advanced techniques : mp4'},
                {id: 23, name: 'All about app : dir'},
              ],
            },
            {id: 24, name: 'Intro : mov'},
            {id: 25, name: 'Conference introduction : avi'},
          ],
        },
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/variables.scss";

.progressLinear {
  background-color: $card-color;
  color: $font-color;
}

.toc {
  color: $title-color;
}
</style>

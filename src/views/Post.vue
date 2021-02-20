<template>
  <div>
    <v-row>
      <v-col cols="9">
        <v-card color="#383C4A">

          <!--文章头部信息-->
          <v-card-title class="d-flex justify-center">
            <h1 class="text-center text-h4 font-weight-bold">
              {{ post.title }}
            </h1>
          </v-card-title>

          <!-- 正文,css格式在@/assets/css/markdown.scss -->
          <Markdown class="markdown-body" :content="post.content" :options="options"/>
        </v-card>
      </v-col>

      <!-- 侧边栏 -->
      <v-col cols="3">
        <Side>
          <!-- 文章目录 -->
          <template slot="toc">
            <Toc :toc="toc"></Toc>
          </template>
        </Side>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Markdown from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import Side from "@/components/public/Side";
import Toc from "@/components/card/Toc";
import PostProgressLinear from "@/components/plugins/PostProgressLinear";

export default {
  name: "Post",
  components: {PostProgressLinear, Toc, Side, Markdown},
  data() {
    return {
      options: {
        linkAttributes: {
          attrs: {
            target: '_blank',
          }
        },
        image: {
          hAlign: 'left',
          viewer: true,
        },
      },
      toc: [],
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
  },
  created() {
    this.initPost()
    this.getToc()
  },
  methods: {
    initPost() {
      let category = this.$route.params.category === 'default' ? '' : this.$route.params.category
      let title = this.$route.params.title
      this.post = this.$store.getters.POST_GET_POST(category, title)
    },
    getToc() {
      // 一级目录的索引
      var count = 0;
      // 二级目录的索引
      var childrenCount;

      this.post.content.trim().split('\n').forEach((value, index) => {
        // 如果匹配到一级目录
        if (value.substr(0, 2) === '##' && value[2] === ' ') {
          this.toc.push(
              {
                name: (value.substr(3)),
                children: []
              }
          )
          // 一级目录的索引自增1
          count++
          // 二级目录的索引清零
          childrenCount = 0;

          // 如果匹配到二级目录
        } else if (value.substr(0, 3) === '###' && value[3] === ' ') {
          this.toc[count - 1].children.push(
              {
                name: (value.substr(4)),
                children: []
              }
          )
          // 二级目录的索引自增1
          childrenCount++

          // 如果匹配到三级目录
        } else if (value.substr(0, 4) === '####' && value[4] === ' ') {
          this.toc[count - 1].children[childrenCount - 1].children.push(
              {
                name: (value.substr(4))
              }
          )
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/markdown";
</style>

<style lang="scss">

</style>

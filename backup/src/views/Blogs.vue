<template>
  <div class="blogs">

    <!-- 栅格布局 1x1, 每行为一篇博文 -->
    <v-row class="pb-3" v-for="(item,index) in this.postList" :key="index">
      <!-- 每个博文单独占据一列 -->
      <v-col>
        <!-- 每个博文为一张卡片 -->
        <v-card>
          <v-img
              :src="image"
              :aspect-ratio="16/9"
              style="opacity:0.4;"
          >
            <!-- 博文标题, vuefity的h5字号,居中,加粗宽字体 padding-all=0*4px margin-all=0*4px -->
            <h2 class="text-h5 text-center font-weight-bold pa-0 ma-0">
              <router-link :to="{name:'Post',params:{title:item.title}}">
                {{ item.title }}
              </router-link>

            </h2>
            <v-divider></v-divider>

            <!-- 博文简介 -->
            <v-card-text class="pa-0 ma-0">
              <div>
                <Markdown class="md-body text-center" :content="item.abstract"/>
              </div>
            </v-card-text>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Markdown from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'

export default {
  name: "Blogs",
  components: {Markdown},
  data() {
    return {
      cardHeight: 200,
      image: require('../static/img/lin6.png')
    }
  },
  created() {
    this.postList = this.$store.state.posts
  },
  methods: {
    push() {
    }
  }
}
</script>

<style scoped>

</style>

<template>
  <div>
    <!-- 栅格布局 1x1, 每行为一篇博文 -->
    <v-row>
      <v-col cols="9">
        <v-card color="#383C4A"
                class="mb-3"
                :height="blogCardHeight"
                v-for="(post,index) in this.$store.state.posts" :key="index">
          <!-- 卡片内使用栅格布局 1x2 -->
          <v-row class="ma-0 pa-0">
            <!-- 左侧列为封面 -->
            <v-col cols="5" class="pa-0 ma-0">
              <v-img :src="image"
                     style="border-radius: 4px 0 0 4px"
                     :aspect-ratio="16/9"/>
            </v-col>

            <!--右侧列为博文信息 -->
            <v-col cols="7" class="">
              <!-- 博文标题-->
              <router-link :to="{
                name:'Post',
                params:{
                  title:post.title,
                  category:post.category.length>0?post.category.join('-'):'default',
                  }
              }"
                           style="text-decoration:none;">
                <h2 class="title text-h5 text-center font-weight-bold pa-0 ma-0"
                    style="color: #9FBC82;">
                  {{ post.title }}
                </h2>
              </router-link>

              <v-divider class="ma-2"></v-divider>

              <!-- 博文简介 -->
              <v-card-text class="pa-0 ma-0">
                <Markdown class="markdown-body text-center" :content="post.abstract" style="padding: 0 0"/>
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>

      <!-- 侧边栏 -->
      <v-col cols="3">
        <Side>
          <!-- 作者信息 -->
          <template slot="author">
            <Author></Author>
          </template>
          <!-- 公告 -->
          <template slot="notice">
            <Notice class="mt-1"></Notice>
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
import Author from "@/components/card/Author";
import Notice from "@/components/card/Notice";

export default {
  name: "Blogs",
  components: {Notice, Author, Side, Markdown},
  data() {
    return {
      blogCardHeight: 220,
      imgWidth: 270,
      imgHeight: 180,
      image: require('../static/img/background/background.jpg')
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/markdown";
</style>

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
          <p>创建时间：{{ createDate }}</p>
          <p>最后更新时间：{{ lastDate }}</p>

          <!-- 正文,css格式在@/assets/css/markdown.scss -->
          <Markdown class="markdown-body" :content="post.content" :options="options"/>
        </v-card>

        <!-- gitalk评论 -->
        <div id="gitalk-container"></div>
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
import github from "@/api/github";
import gitalk from "@/config/gitalk";
import 'gitalk/dist/gitalk.css'
import Gitalk from "gitalk";

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
      createDate: "",
      lastDate: "",
    }
  },
  created() {
    this.initPost()
    this.getToc()
    this.getDate()
  },
  mounted() {
    this.createGitalk()
  },
  methods: {
    initPost() {
      let category = this.$route.params.category === 'default' ? '' : this.$route.params.category
      let title = this.$route.params.title
      this.post = this.$store.getters.POST_GET_POST(category, title)
    },
    getDate() {
      github.getDate(this.post.path).then(res => {
        this.createDate = new Date(res.data.slice(-1)[0].commit.committer.date).format("yyyy-MM-dd hh:mm:ss")
        this.lastDate = new Date(res.data[0].commit.committer.date).format("yyyy-MM-dd hh:mm:ss")
      })
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
    },
    createGitalk() {
      // 传参id 获取gitalk配置
      let params = gitalk.gitalkConf(this.$route.path)
      // 实例化gitalk
      var gitalkObj = new Gitalk(params)
      // 挂载到html中
      gitalkObj.render('gitalk-container')
    }

  }
}
</script>

<style lang="scss">
@import "../assets/css/markdown";
</style>

<style lang="scss">

</style>

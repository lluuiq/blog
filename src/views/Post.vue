<template>
  <div>
    <v-row>
      <v-col cols="9" ref="post">
        <v-card color="#383C4A">

          <!--文章头部信息-->
          <v-card-title class="d-flex justify-center">
            <h1 class="text-center text-h4 font-weight-bold postTitle">
              {{ post.title }}
            </h1>
          </v-card-title>

          <v-card class="d-flex postInfo mb-3">
            <span class="pl-3">创建时间：{{ createDate }}</span>
            <span class="pl-6">更新时间：{{ lastDate }}</span>
            <span class="pl-6">文章分类：{{ post.category.length > 0 ? post.category.join('/') : 'default' }}</span>
          </v-card>

          <!-- 正文,css格式在@/assets/css/markdown.scss -->
          <Markdown :content="this.post.content" :options="options"/>
        </v-card>

        <!-- gitalk评论 -->
        <!--<div id="gitalk-container"></div>-->
        <!-- valine评论 -->
        <!--<div id="vcomments"></div>-->
      </v-col>

      <!-- 侧边栏 -->
      <v-col cols="3" ref="fixedDivFather">
        <div ref="fixedDiv" :style="this.isFixed === true?this.isFixedStyle:''">
          <Side>
            <!-- 文章目录 -->
            <template slot="toc">
              <Toc :process="process"></Toc>
            </template>
          </Side>
        </div>
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
      // 文章目录
      toc: [],
      // 文章创建时间与最后更新时间
      createDate: "",
      lastDate: "",
      isFixed: false,
      offsetTop: 0,
      isFixedStyle: {
        position: 'fixed',
        top: 0,
        width: '',
        paddingRight: '24px',
        zIndex: 999,
        marginTop: '12px',
      },
      process: 0,
    }
  },
  created() {
    this.initPost()
    this.getDate()
  },
  mounted() {
    // this.createGitalk()
    // this.createValine()
    this.listenerScroll()
    this.handleScroll()

  },
  methods: {
    // 初始化文章
    initPost() {
      let category = this.$route.params.category === 'default' ? '' : this.$route.params.category
      let title = this.$route.params.title
      this.post = this.$store.getters.POST_GET_POST(category, title)
    },
    // 获取日期
    getDate() {
      github.getDate(this.post.path).then(res => {
        this.createDate = new Date(res.data.slice(-1)[0].commit.committer.date).format("yyyy-MM-dd hh:mm:ss")
        this.lastDate = new Date(res.data[0].commit.committer.date).format("yyyy-MM-dd hh:mm:ss")
      })
    },
    // 处理视窗滚动事件
    listenerScroll() {
      // 创建监听
      window.addEventListener('scroll', this.handleScroll)
      // 获取要固定的元素的偏移量
      this.offsetTop = this.$refs.fixedDiv.offsetTop
      this.isFixedStyle.width = this.$refs.fixedDivFather.clientWidth + 'px'
    },
    handleScroll() {
      // 获取当前视窗的顶部偏移量
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.isFixed = scrollTop > this.offsetTop

      // dom元素渲染完毕后再计算高度来获得阅读进度
      this.$nextTick(() => {
        let count = parseInt(((scrollTop + window.innerHeight) / this.$refs.post.scrollHeight) * 100)
        this.process = count < 100 ? count : 100
      })
    },
    // 创建gitalk评论
    createGitalk() {
      // 传参id 获取gitalk配置, id为使用md5加密的url路径 防止重复以及解决label不能超过30字符的问题
      let params = gitalk.gitalkConf(this.$md5(this.$route.path))
      // 实例化gitalk
      var gitalkObj = new Gitalk(params)
      // 挂载到html中
      gitalkObj.render('gitalk-container')
    },
    // 创建valine评论
    createValine() {
      new Valine({
        el: '#vcomments',
        appId: 'kKfWnugSqGAcPYpeH8wNYltU-gzGzoHsz',
        appKey: 'NdwLtnM2yUza1v2VOJpKkQ4q'
      })
    },
  },
  // 生命周期结束时销毁监听
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/markdown";

.postInfo {
  align-items: center;
  background-color: gray;
  height: 50px;
}

.postTitle {
  color: $title-color;
}
</style>

<style lang="scss">
@import "../assets/css/markdown";
</style>

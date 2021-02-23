<template>
  <div>
    <v-card class="mb-1 pb-1 text-center progressLinear">
      <!-- 进度条 -->
      <PostProgressLinear :process="process"></PostProgressLinear>
      <p class="mt-1 mb-0">当前已读{{ process }}%</p>
    </v-card>

    <v-card color="#383C4A">
      <el-tree
          class="tree"
          ref="toc"
          :data="toc"
          node-key="id"
          :props="{children:'children',label:'name'}"
          highlight-current
          @check-change="checkChange"
          @node-click="clickTitle">
      </el-tree>
    </v-card>

    <!-- 文章目录 -->
    <!--<v-card color="#383C4A">-->
    <!--  <ul class="toc">-->
    <!--    <li v-for="(hTwo,index) in toc" :key="index">-->
    <!--      <p @click="jump(hTwo.id)">{{ hTwo.title }}</p>-->
    <!--      <ul v-if="hTwo.children.length>0">-->
    <!--        <li v-for="(hThree,index) in hTwo.children" :key="index">-->
    <!--          <a @click="jump(hThree.id)">{{ hThree.title }}</a>-->
    <!--          <ul v-if="hThree.children.length>0">-->
    <!--            <li v-for="(hFour,index) in hThree.children" :key="index">-->
    <!--              <a @click="jump(hFour.id)">{{ hFour.title }}</a>-->
    <!--            </li>-->
    <!--          </ul>-->
    <!--        </li>-->
    <!--      </ul>-->
    <!--    </li>-->
    <!--  </ul>-->
    <!--</v-card>-->
  </div>
</template>

<script>
import PostProgressLinear from "@/components/plugins/PostProgressLinear";

export default {
  name: "Toc",
  components: {PostProgressLinear},
  props: [
    "process"
  ],
  data() {
    return {
      toc: [],
      titles: [],
      openId: ['这是三级标题'],
    }
  },
  mounted() {
    this.getToc()
    this.listenerScroll()
    this.setTitles()
    this.handleScroll()
  },
  methods: {
    getToc() {
      // 一级目录的索引
      var count = 0;
      // 二级目录的索引
      var childrenCount;

      let md = document.getElementsByClassName('markdown-body')[0].children
      this.$nextTick(() => {
        for (let el of md) {
          if (el.localName === 'h2') {
            this.toc.push({
              id: el.id,
              name: el.innerText,
              children: [],
            })
            // 一级目录的索引自增1
            count++
            // 二级目录的索引清零
            childrenCount = 0;
          } else if (el.localName === 'h3') {
            this.toc[count - 1].children.push(
                {
                  id: el.id,
                  name: el.innerText,
                  children: [],
                }
            )
            // 二级目录的索引自增1
            childrenCount++

            // 如果匹配到三级目录
          } else if (el.localName === 'h4') {
            this.toc[count - 1].children[childrenCount - 1].children.push(
                {
                  id: el.id,
                  name: el.innerText
                }
            )
          }
        }
      })
    },
    // 点击目录的标题实现滑动跳转到锚点
    clickTitle(data) {
      document.getElementById(data.id).scrollIntoView({block: 'start', behavior: 'smooth'})
    },
    checkChange(data, isCheck, sonIsCheck) {
      if (sonIsCheck) {
        console.log(123)
      }
    },

    // 获取文章的所有标题
    setTitles() {
      let mdBody = document.getElementsByClassName('markdown-body')[0].children;
      this.$nextTick(() => {
        for (const mdBodyElement of mdBody) {
          if (mdBodyElement.localName === 'h2' || mdBodyElement.localName === 'h3' || mdBodyElement.localName === 'h4') {
            this.titles.push(mdBodyElement)
          }
        }
      })
    },

    listenerScroll() {
      window.addEventListener('scroll', this.handleScroll)
    },
    handleScroll() {
      let scroll = document.documentElement.scrollTop || document.body.scrollTop;
      this.$nextTick(() => {
        for (var i = this.titles.length - 1; i >= 0; --i) {
          if (scroll > this.titles[i].offsetTop) {
            console.log(this.titles[i].id)
            this.$refs.toc.setCurrentKey(this.titles[i].id)
            break;
          }
        }
      })
    },
  },
  destroyed() {
    document.removeEventListener("scroll", this.handleScroll);
  },

}
</script>

<style lang="scss" scoped>
@import "./src/assets/css/variables.scss";

// 阅读进度条
.progressLinear {
  background-color: $card-color;
  color: $font-color;
}

</style>

<!-- 全局样式用来修改tree-view默认的样式-->
<style lang="scss">
@import "./src/assets/css/variables.scss";

.tree {
  .is-current {
    .el-tree-node__content {
      color: red;
      background-color: blue;
    }
  }
}
</style>

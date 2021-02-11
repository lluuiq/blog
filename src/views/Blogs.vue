<template>
  <div class="blogs">
    博文列表
    {{ postList }}
    {{ htmlMD }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Blogs",
  data() {
    return {
      postList: {},
      htmlMD: ''
    }
  },
  created() {
    this.getPostList()
    this.readMD()
  },
  methods: {
    getPostList() {
      const filesMD = require.context('@/static/posts', true, /\.md$/);
      const filesMDNames = filesMD.keys();
      const tmepListDatas = [];
      filesMDNames.map((item) => {
        const listObj = {};
        const listItemS = item.split('/');
        if (listItemS.length > 0) {
          listObj.name = listItemS[1].replace('.md', '');
          listObj.path = item;
          listObj.children = [];
          listObj.showChild = false;
        }
        tmepListDatas.push(listObj);
      });
      console.log(tmepListDatas)
      this.postList = tmepListDatas
    },
    readMD() {
      const url = `@/static/posts/redis.md`;
      this.htmlMD = require(url)
    }
  }
}
</script>

<style scoped>

</style>

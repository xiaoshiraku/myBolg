<template>
       <div class="tag-top">
      <!-- 蓝色竖线 + 标题文字 -->
      <span class="blue-bar"></span>
      <span class="tag-text">文章分类</span>
    </div>
<div calss="tag-container">
        <TagList :tags="tags" @tag-click="handleTagSelected" />
    </div>
</template>


<script setup>
import TagList from '../components/tagList.vue';
import { ref } from 'vue';

const tags = ref([
    'jave', 'vue', '机器学习', 'c++', 'python', 'javascript', 'go', 'rust', '数据库', '算法', '数据结构', '前端', '后端', '全栈', 'DevOps', '云计算', '大数据', '人工智能', '区块链', '网络安全'
]);

</script>


<style scoped>
.blue-bar {
    display: inline-block;
    width: 4px;
    height: 16px;
    background-color: #409eff;
    margin-right: 6px;
}

.tag-top{
    margin-bottom: 8px;
}

.tag-text {
    font-weight: bold;
}
</style>
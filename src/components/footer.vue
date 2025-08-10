<template>
    <el-container>
        
        <el-footer class="bottem-bar">
            <!-- 标题部分 -->
             <div class="title">Xiaoshiraku的个人博客</div>
             <div class="blog-data">
              <span>文章数目:2</span>
              <span>最新发布:2</span>
              <span>注册数目:1</span>
              <span>评论数目:0</span>
              <span>访问量:2</span>
             </div>
               
        </el-footer>
    </el-container>
  </template>


<script setup>

</script>

<style scoped>
  /* 顶栏 */
  .bottem-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #409EFF;
  }
  .blog-data {
  /* 可选：添加容器内边距，让整体更美观 */
  padding: 12px 0;
  /* 可选：添加背景色区分区域 */
  /* background-color: #f5f7fa; */
}

.blog-data span {
  /* 关键：设置右侧间距实现分隔（最后一个元素会自动忽略多余间距） */
  margin-right: 16px;
  /* 可选：调整文字样式 */
  color: #606266;
  font-size: 14px;
}

/* 可选：给每个数据项添加竖线分隔（替代/的视觉效果） */
.blog-data span:not(:last-child)::after {
  content: "|";
  margin-left: 16px;
  color: #e0e0e0; /* 用浅色竖线避免过于突兀 */
}
</style>
<template>
    <div class="article-container">
      <el-card class="article-card">
        <!-- 新增：图片和文本的直接父容器，设置 Flex 布局 -->
        <div class="card-content">
          <div class="article-image">
            <el-image :src="article.imageUrl" fit="cover" alt="文章相关图片" />
          </div>
  
          <div class="article-text">
            <!-- 文章标题、信息、内容 -->
            <div class="article-title">{{ article.title }}</div> 
            <div class="article-intro">{{ article.intro }}</div>
            <div class="article-meta">
                  <div class="left-meta">
                    <span>{{ article.createBy }}</span> /
                    <span>{{ article.date }}</span> 
                  </div>
                  <div class="right-meta">
                    <span>阅读 {{ article.readCount }}</span> /
                    <span>评论 {{ article.commentCount }}</span> /
                    <span>点赞 {{ article.likeCount }}</span> /
                    <span class="category-tag">{{ article.category }}</span>
                  </div>
                </div>
           
          </div>
        </div>
      </el-card>
    </div>
  </template>

  <script setup>

  // 定义接收的文章数据结构
  defineProps({
      article: {
          type: Object,
          required: true,
          default: () => ({
              createBy: 'admin', // 创建者
              imageUrl: 'https://picsum.photos/400/300', // 默认图片链接
              title: 'Hello Halo',
              date: '2025-08-05 20:27',
              readCount: 12,
              commentCount: 0,
              likeCount: 0,
              category: '默认分类',
              intro: '如果你看到了这一篇文章，那么证明你已经安装成功了，感谢使用 Halo 进行创作，希望能够使用愉快。'
          })
      }
  });
  </script>

  <style scoped>
  /* 关键：给图片和文本的直接父容器设置 Flex 布局 */
  .card-content {
    display: flex; /* 让图片和文本横向排列 */
    gap: 16px; /* 图片和文本之间的间距 */
    padding: 4px; /* 与卡片边缘保持距离 */
  }
  
  /* 其他样式保持不变 */
  .article-card {
    width: 100%;
    margin: 20px auto;
    overflow: hidden; /* 防止内容溢出卡片 */
  }
  
  .article-image {
    width: 25%;
    height: 150px;
    flex-shrink: 0; /* 防止图片被压缩 */
    border-radius: 2px;
    overflow: hidden;
  }
  
  .article-text { 
    min-width: 0;
    /* 解决文本过长导致的溢出问题 */
    flex: 1; /* 文本占剩余空间 */
    display: flex;       /* 设置为Flex容器 */
    flex-direction: column; /* 纵向排列内容 */
  }

.article-title {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
}

.article-meta {
    color: #999;
    margin-bottom: 5px;
    margin-top: auto;    /* 自动占据上方剩余空间，实现底部对齐 */
    display: flex;
    justify-content: space-between; /* 左右分散对齐 */
}

.category-tag {
    background-color: #f5f7fa;
    padding: 2px 6px;
    border-radius: 4px;
    margin-left: 8px;
}

.article-intro {
    color: #666;
    line-height: 1.6;
}
  </style>
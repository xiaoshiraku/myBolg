<template>
    <div class="page-header">
        <!-- 标题 + 页码区域 -->
        <div class="header-top">
            <!-- 蓝色竖线 + 标题文字 -->
            <span class="blue-bar"></span>
            <span class="title-text">最新发布</span>
            <span class="page-info">第1页</span>
        </div>
        <!-- 操作栏 -->
        <div class="action-bar">
            <span class="sort">排序</span>
            <el-tag type="info" @click="handleSort('update')">最新发布</el-tag>
            <el-tag type="info" @click="handleSort('browse')">浏览</el-tag>
            <el-tag type="info" @click="handleSort('like')">点赞</el-tag>
            <el-tag type="info" @click="handleSort('comment')">评论</el-tag>
        </div>
    </div>
    <div class="tag-top">
      <!-- 蓝色竖线 + 标题文字 -->
      <span class="blue-bar2"></span>
      <span class="tag-text">文章分类</span>
    </div>
    <div calss="tag-container">
        <TagList :tags="tags" @tag-click="handleTagSelected" />
    </div>
    <div class="article-container">
        <!-- 可循环渲染多个文章，比如从接口获取列表数据 -->
        <div v-for="(item, index) in articleList" :key="item.id">
            <ArticleCard :article="item" />
        </div>
        <div class="pagination">
            <el-pagination @current-change="handleCurrentChange" background layout="prev, pager, next, jumper"
                :total="50" :page-size="10" :current-page="1"></el-pagination>
        </div>
    </div>
</template>

<script setup>
import ArticleCard from '../components/articleCard.vue';
import { ref, defineProps, defineEmits } from 'vue';
import TagList from '../components/tagList.vue';
import { ElTag } from 'element-plus'

const tags = ref([
    'jave', 'vue', '机器学习', 'c++', 'python', 'javascript', 'go', 'rust', '数据库', '算法', '数据结构', '前端', '后端', '全栈', 'DevOps', '云计算', '大数据', '人工智能', '区块链', '网络安全'
]);
const articleList = ref([
    {
        id: 1,
        createBy: 'admin',
        imageUrl: 'https://picsum.photos/400/300',
        title: 'Hello Halo 1',
        date: '2025-08-05 20:27',
        readCount: 12,
        commentCount: 0,
        likeCount: 0,
        temperature: 25.2,
        category: '默认分类',
        intro: '如果你看到了这一篇文章，那么证明你已经安装成功了，感谢使用 Halo 进行创作，希望能够使用愉快。'
    }, {
        id: 2,
        createBy: 'admin',
        imageUrl: 'https://picsum.photos/400/300',
        title: 'Hello Halo 2',
        date: '2025-08-05 20:27',
        readCount: 12,
        commentCount: 0,
        likeCount: 0,
        temperature: 25.2,
        category: '默认分类',
        intro: '如果你看到了这一篇文章，那么证明你已经安装成功了，感谢使用 Halo 进行创作，希望能够使用愉快。'
    }, {
        id: 3,
        createBy: 'admin',
        imageUrl: 'https://picsum.photos/400/300',
        title: 'Hello Halo 3',
        date: '2025-08-05 20:27',
        readCount: 12,
        commentCount: 0,
        likeCount: 0,
        temperature: 25.2,
        category: '默认分类',
        intro: '如果你看到了这一篇文章，那么证明你已经安装成功了，感谢使用 Halo 进行创作，希望能够使用愉快。'
    }, {
        id: 4,
        createBy: 'admin',
        imageUrl: 'https://picsum.photos/400/300',
        title: 'Hello Halo 4',
        date: '2025-08-05 20:27',
        readCount: 12,
        commentCount: 0,
        likeCount: 0,
        temperature: 25.2,
        category: '默认分类',
        intro: '如果你看到了这一篇文章，那么证明你已经安装成功了，感谢使用 Halo 进行创作，希望能够使用愉快。'
    }, {
        id: 5,
        createBy: 'admin',
        imageUrl: 'https://picsum.photos/400/300',
        title: 'Hello Halo 5',
        date: '2025-08-05 20:27',
        readCount: 12,
        commentCount: 0,
        likeCount: 0,
        temperature: 25.2,
        category: '默认分类',
        intro: '如果你看到了这一篇文章，那么证明你已经安装成功了，感谢使用 Halo 进行创作，希望能够使用愉快。'
    }
]);


// 定义 props（若需要动态传值可扩展）
defineProps({
    page: {
        type: Number,
        default: 2
    }
})

// 定义事件（若需要通知父组件操作可扩展）
const emit = defineEmits(['sort'])

// 处理排序/操作点击
const handleSort = (type) => {
    emit('sort', type)
    // 这里可写具体逻辑，比如根据 type 发请求排序
    console.log(`执行 ${type} 排序逻辑`)
}
</script>

<style scoped>
.page-header {
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* 标题栏和操作栏间距 */
    margin-bottom: 8px;
}

.header-top {
    display: flex;
    align-items: center;
    font-size: 16px;
}

.blue-bar {
    display: inline-block;
    width: 4px;
    height: 16px;
    background-color: #409eff;
    margin-right: 6px;
}

.blue-bar2 {
    display: inline-block;
    width: 4px;
    height: 16px;
    background-color: #409eff;
    /* 红色竖线 */
    margin-right: 6px;
}

.title-text {
    font-weight: bold;
}

.tag-top{
    margin-bottom: 8px;
}

.tag-text {
    font-weight: bold;
}

.page-info {
    margin-left: 8px;
    color: #666;
}

.action-bar {
    display: flex; 
      /* 操作项间距 */
    gap: 10px;
}

.el-tag {
    background-color: #FFFFFF;
    /* 鼠标悬停时背景色变化 */
    transition: background-color 0.3s ease;
    /* 添加过渡效果 */
}

.el-tag:hover {
    background-color: #f5f7fa;
    /* 鼠标悬停时的背景色变化 */
}


.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}
</style>

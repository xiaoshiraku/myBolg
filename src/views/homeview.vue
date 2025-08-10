<template>
    <div class="article-container">
        <ArticleCard :article="articleData" />
        <!-- 可循环渲染多个文章，比如从接口获取列表数据 -->
        <div v-for="(item, index) in articleList" :key="index">
            <ArticleCard :article="item" />
        </div>
        <div class="pagination">
            <el-pagination
                @current-change="handleCurrentChange"
                background
                layout="prev, pager, next, jumper"
                :total="50"
                :page-size="10"
                :current-page="1"
            ></el-pagination>
        </div>
    </div>
</template>

<script setup>
import ArticleCard from '../components/articleCard.vue';
import { ref, reactive } from 'vue';


const articleData = reactive({
    createBy: 'admin',
    imageUrl: 'https://picsum.photos/400/300', 
    title: 'Hello Halo',
    date: '2025-08-05 20:27',
    readCount: 12,
    commentCount: 0,
    likeCount: 0,
    temperature: 25.2,
    category: '默认分类',
    intro: '如果你看到了这一篇文章，那么证明你已经安装成功了，感谢使用 Halo 进行创作，希望能够使用愉快。'
});

const articleList = reactive([articleData]);
</script>

<style scoped>
.pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

</style>

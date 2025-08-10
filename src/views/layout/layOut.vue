<template>
  <el-container direction="vertical" class="main-container">
    <!-- 头部区域 -->
    <div class="header-container">
      <Header></Header>
    </div>

    <!-- 主体 + 底部 区域 -->
    <el-container class="content-and-footer">
      <!-- 主体区域：使用 flex 布局 -->
      <el-container class="content-container">
        <!-- 左侧边栏 -->
        <el-aside width="300px" class="aside-left">
          <leftAside></leftAside>
        </el-aside>
        <!-- 主内容区域 - 添加弹性布局和滚动 -->
        <el-main class="main-content">
          <router-view v-slot="{ Component }">
            <transition name="fade" mode="out-in">
              <component :is="Component" />
            </transition>
          </router-view>
        </el-main>
        <!-- 右侧边栏 -->
        <el-aside width="400px" class="aside-right">
          <rightAside></rightAside>
        </el-aside>
      </el-container>

      <!-- 底部区域 -->
      <el-footer class="footer-container">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </el-container>
</template>

<script setup>
import Header from '../../components/header.vue';
import leftAside from '../../components/leftAside.vue';
import rightAside from '../../components/rightaside.vue';
import Footer from '../../components/footer.vue';
</script>

<style scoped>
.main-container {
  height: 98vh; /* 让布局占满整个视口高度 */
  display: flex;
  flex-direction: column;
}

.content-and-footer {
  flex: 1; /* 让主体+底部区域占据剩余空间 */
  display: flex;
}

.content-container {
  flex: 1; /* 让主体区域（两侧边栏+主内容）占满内容区 */
  display: flex;
  overflow: hidden; /* 避免内部滚动影响整体布局 */
}

.aside-left {
  background-color: #f3f3f3;
  padding: 5px;
}

.aside-right {
  background-color: #f3f3f3;
  padding: 5px;
  overflow: hidden;
}

.main-content {
  background-color: #f3f3f3;
  flex: 1; /* 让主内容区域占据中间剩余空间 */
  padding: 5px;
  /*overflow-y: auto;  主内容滚动 */
}

.footer-container {
  padding: 5px;
}
</style>
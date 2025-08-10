<template>
  <div>
    <el-container>
      <el-header class="top-bar">
        <!-- 标题部分 -->
        <p class="title">Xiaoshiraku的个人博客</p>
        <!-- 菜单部分 -->
        <el-menu class="menu" mode = "horizontal"
          text-color="#333333"
          active-text-color="#409EFF">
          <el-menu-item index="1">首页</el-menu-item>
          <el-menu-item index="2">关于</el-menu-item>
          <el-menu-item index="3">系统</el-menu-item>
        </el-menu>

        <div class="search-container">
        <el-input v-model="searchValue" placeholder="搜索内容..." clearable class="search-input" />
        <el-button type="primary" @click="handleSearch" style="border-radius: 25px">
            <el-icon>
                <Search />
            </el-icon>
        </el-button>
       </div>

        <!-- 登录按钮等右侧部分-->
          <el-button type="primary" class="right-action"><el-icon><User /></el-icon>登录</el-button>
      </el-header>
    </el-container>
  </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* 顶栏 */
  .top-bar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 120px;
    border-bottom: 1px solid #eaeaea;
  }
  /* 标题 */
  .title {
    font-size: 20px;
    font-weight: bold;
    color: #409EFF;
  }
 /* 顶栏右侧区域 */
  .right-action {
    display: flex;
    align-items: center;
    border-radius: 25px;
  }
  /* 菜单 */
  .menu{
    display: flex;
    align-items: center;
    margin-left: 20px;
    background-color: #ffffff ;
    flex: 1; /* 让菜单占据剩余空间 */
    min-width: 300px; /* 确保能容纳3个菜单项 */
  }
  /* 搜索框 */
.search-input {
    width: 300px;
    margin-right: 10px;
    border-radius: 50px;
}

.search-container {
    display: right;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    padding: 40px;
}

  </style>
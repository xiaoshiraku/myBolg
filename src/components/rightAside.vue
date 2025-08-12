<template>
  <el-container>
    <el-aside>
      <div class="user-profile-container">
        <!-- 背景图片区域 -->
        <div class="background-image" :style="{ backgroundImage: `url(${backgroundImageUrl})` }"></div>
        <!-- 用户头像 -->
        <div class="avatar-container">
          <img :src="avatarUrl" alt="用户头像" class="avatar" />
        </div>
        <!-- 用户信息 -->
        <div class="user-info">
          <div class="username-level">
            <span class="username">{{ username }}</span>
          </div>
          <div class="stats">
            <div class="stat-item">
              <img :src="articleIconUrl" alt="文章图标" class="stat-icon" />
              <span class="stat-value">{{ articleCount }}</span>
            </div>
            <div class="stat-item">
              <img :src="commentIconUrl" alt="评论图标" class="stat-icon" />
              <span class="stat-value">{{ commentCount }}</span>
            </div>
            <div class="stat-item">
              <img :src="likeIconUrl" alt="点赞图标" class="stat-icon" />
              <span class="stat-value">{{ likeCount }}</span>
            </div>
          </div>
          <div class="motto">{{ motto }}</div>
        </div>
        <!-- 操作按钮 -->
        <div class="action-buttons">
          <button class="publish-article-btn">发布文章</button>
          <button class="user-center-btn">用户中心</button>
        </div>
      </div>
    </el-aside>
  </el-container>
</template>


<script setup>
import { ref } from 'vue';

// 背景图片地址
const backgroundImageUrl = ref('https://example.com/your-background-image.jpg');
// 头像地址
const avatarUrl = ref('https://example.com/your-avatar.jpg');
// 等级图标地址
const levelIconUrl = ref('https://example.com/level-icon.png');
// 文章图标地址
const articleIconUrl = ref('https://example.com/article-icon.png');
// 评论图标地址
const commentIconUrl = ref('https://example.com/comment-icon.png');
// 点赞图标地址
const likeIconUrl = ref('https://example.com/like-icon.png');
// 用户名
const username = ref('admin');
// 用户等级
const level = ref(1);
// 文章数量
const articleCount = ref(0);
// 评论数量
const commentCount = ref(40);
// 点赞数量
const likeCount = ref(0);
// 用户座右铭
const motto = ref('在沉默中努力，让成功自己发声');
</script>

<style scoped>
.user-profile-container {
  width: 240px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: white;
  margin-top: 30px;
  margin-left: 20px;
}

 .background-image {
  height: 100px;
  background-size: cover;
  background-position: center;
  position: relative;
}

 .avatar-container {
  text-align: center;
  margin-top: -50px;
} 

.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
}

.user-info {
  padding: 0 1px 10px;
}

.username-level {
  text-align: center;
  margin-bottom: 10px;
}

.username {
  font-size: 18px;
  font-weight: bold;
  margin-right: 5px;
}

.level {
  display: inline-flex;
  align-items: center;
}

.stats {
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
}

.stat-item {
  text-align: center;
  margin: 0 10px;
}

.stat-icon {
  width: 15px;
  height: 15px;
  margin-bottom: 5px;
}

.stat-value {
  font-size: 14px;
  color: #666;
}

.motto {
  text-align: center;
  color: #999;
  font-size: 10px;
}

.action-buttons {
  padding: 8px;
  display: flex;
  justify-content: space-around;
}

.publish-article-btn,
.user-center-btn {
  padding: 6px 14px;
  border: none;
  border-radius: 5px;
  color: white;
  font-weight: bold;
}

.publish-article-btn {
  background-color: #ff6699;
  transition: color 0.3s ease; /* 添加过渡效果，使颜色变化更平滑 */
}

.user-center-btn {
  background-color: #0099ff;
  transition: color 0.3s ease; /* 添加过渡效果，使颜色变化更平滑 */
}  
.publish-article-btn:hover {
  background-color: #ff3385; /* 鼠标悬停时的背景色变化 */
}
.user-center-btn:hover {
  background-color: #007acc; /* 鼠标悬停时的背景色变化 */
}
</style>
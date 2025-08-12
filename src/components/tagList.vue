<template>
   <div class="tag-list">
    <!-- 使用父组件传入的tags数据 -->
    <span 
      v-for="(tag, index) in tags" 
      :key="index" 
      class="tag" 
      :style="{ color: getRandomColor() }"
      @click="handleTagClick(tag)"
    >
      {{ tag }}
    </span>
  </div>
  </template>
  
  <script setup>  
  import { getRandomColor } from '../utils/common';
  import { defineProps, defineEmits } from 'vue';

// 定义接收的props，指定类型和默认值
const props = defineProps({
  tags: {
    type: Array,
    required: true, // 要求父组件必须传递该属性
    validator: (value) => {
      // 验证数组中的元素是否为字符串
      return value.every(item => typeof item === 'string');
    }
  }
});

// 定义事件，用于向父组件传递点击事件
const emit = defineEmits(['tag-click']);

// 标签点击事件处理
const handleTagClick = (tag) => {
  emit('tag-click', tag);
};

  </script>
  
  <style scoped>
  .tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
  
  .tag {
    padding: 4px 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    cursor: pointer;
    background-color: #ffffff;
    transition: color 0.3s ease; /* 添加过渡效果，使颜色变化更平滑 */
  }

  .tag:hover {
    background-color: #f0f0f0; /* 鼠标悬停时的背景色变化 */
  }
  </style>
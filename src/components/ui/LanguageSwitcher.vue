<template>
  <div class="language-switcher">
    <select v-model="currentLocale" @change="changeLocale">
      <option value="zh-CN">中文</option>
      <option value="en-US">English</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();
const currentLocale = ref("zh-CN");

const changeLocale = () => {
  locale.value = currentLocale.value;
  // 保存用户选择的语言到localStorage
  localStorage.setItem("language", currentLocale.value);
};

// 页面加载时读取用户之前选择的语言
onMounted(() => {
  const savedLanguage = localStorage.getItem("language");
  if (savedLanguage) {
    currentLocale.value = savedLanguage;
    locale.value = savedLanguage;
  }
});
</script>

<style scoped>
.language-switcher {
  position: absolute;
  top: 20px;
  right: 20px;
}

select {
  padding: 5px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: white;
  font-size: 14px;
}
</style>

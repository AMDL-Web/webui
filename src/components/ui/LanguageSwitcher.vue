<template>
  <div class="language-switcher">
    <el-select
      v-model="currentLocale"
      @change="changeLocale"
      placeholder="Select"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useI18n } from "vue-i18n";

const options = [
  {
    value: "zh-CN",
    label: "中文",
  },
  {
    value: "en-US",
    label: "English",
  },
  {
    value: "jp",
    label: "日本語",
  },
];

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
</style>

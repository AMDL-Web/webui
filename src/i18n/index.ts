import { createI18n } from "vue-i18n";

// 导入语言包
import zhCN from "../locales/zh-CN.json";
import enUS from "../locales/en-US.json";

// 定义支持的语言
const messages = {
  "zh-CN": zhCN,
  "en-US": enUS,
};

// 从localStorage获取保存的语言，如果没有则使用默认语言
const savedLocale = localStorage.getItem("language") || "zh-CN";

// 创建i18n实例
const i18n = createI18n({
  legacy: false, // 使用Composition API模式
  locale: savedLocale, // 默认语言
  fallbackLocale: "en-US", // 回退语言
  messages, // 语言包
});

export default i18n;

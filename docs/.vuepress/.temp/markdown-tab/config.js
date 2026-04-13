import { CodeTabs } from "D:/桌面/chu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "D:/桌面/chu/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "D:/桌面/chu/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};

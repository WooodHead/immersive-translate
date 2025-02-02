# 安装

### Edge 浏览器

已上架[Edge 商店](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)，[点击这里](https://microsoftedge.microsoft.com/addons/detail/amkbmndfnliijdhojkpoglbnaaahippg)安装

### 类 Chrome 浏览器

已上架[Chrome 商店](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh), [点击这里](https://chrome.google.com/webstore/detail/immersive-translate/bpoadfkcbjbfhfodiogcnhhhpibjhbnh)安装

### Firefox

已上架 [Firefox Addon 商店](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/)，[点击这里](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/) 安装。

### Safari

桌面版和移动版都支持，需要配合油猴插件安装,以[Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887)为例:

1. 安装[Userscripts safari 插件](https://itunes.apple.com/us/app/userscripts/id1463298887)，并授予其始终允许访问任何网站的权限。
2. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，刷新一下之后，会有沉浸式翻译扩展的浮动窗口在浮动在右侧。(safari 扩展首次安装之后，如果遇到没有出现浮窗的问题，建议多刷新一下网页，或者强制重启一下 Safari，以使其生效)

如果你以前没有使用过油猴脚本，可以点击参考[视频教程](https://youtu.be/vOaCFjYmQNM)

> 如果你使用 Stay.app , 需要在 Stay.app 的设置里，把该脚本的 Inject Mode 改为 Content, 因为目前 Stay 似乎有点问题，无法自动判断 inject 的模式。下个版本应该会修复。

### Android 安卓

1. 下载[Firefox Nightly](https://play.google.com/store/apps/details?id=org.mozilla.fenix&hl=en_US&gl=US)版本
2. 在 Firefox 的附加组件推荐里找到[Tamper Monkey](https://www.tampermonkey.net/),安装
3. 安装本扩展的[油猴脚本](https://immersive-translate.owenyoung.com/immersive-translate.user.js)

安装后，打开任意网页，会有该扩展的浮动窗口在右侧。

### 其他移动浏览器

比如 Kiwi 浏览器等等，只要支持油猴脚本的浏览器，都可以通过油猴脚本安装本扩展。

### 油猴脚本 GreasyFork 地址

你也可以通过[Greasy Fork](https://greasyfork.org/zh-CN/scripts/457196-immersive-translate) 商店安装油猴脚本，但是缺点是 [Userscripts](https://itunes.apple.com/us/app/userscripts/id1463298887) 似乎不支持 Greasyfork 托管的脚本的自动更新，因为 GreasyFork 不允许填写 `updateURL` 属性。

### 手动安装(追踪最新开发特性)

> 手动安装的话，无需等待商店审核，立即体验最新开发版本的功能。

所有代码已经打包上传到[Github 仓库](https://github.com/immersive-translate/immersive-translate)了, 使用以下命令 Clone 到本地：

```
git clone https://github.com/immersive-translate/next-immersive-translate.git
```

扩展位于`dist/chrome`, `dist/firefox`, `dist/userscript` 中。

**Chrome 手动安装**

1. 打开扩展管理窗口，`chrome://extensions`
2. 激活开发者模式
3. 载入`dist/chrome`

**Firefox 手动安装**

1. 打开`about:debugging#/runtime/this-firefox`
2. 临时载入附加组件
3. 选择`dist/firefox/manifest.json`即可

更新的时候直接：

```
git pull
```

然在在扩展管理页面选择 `Reload`

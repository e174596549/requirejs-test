# requirejs-test

## require.js

require.js 是一款 js 文件加载优化插件，可以模块化的加载 js 文件

- 引入方法
```javascript
<script src="./lib/require.js" data-main="main.js"></script>
```

## text.js

text.js 实现了以文本格式加载文件，这样就可以在 js 文件中插入大量html模板内容，实现 html 模块复用

- 引入方法

```javascript
require.config({
    paths: {
        "text": "lib/text",
    }
})
require(['text!city.html'], function(city) {
// dosomething
})

```

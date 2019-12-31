## 安装方法

name of image must be continuous number and start at 1（like:1.png, 2.png)

```javascript

<link rel="stylesheet" href="./dist/index.css">
<script src="/dist/prize.js"></script>

```

## 使用方法

```js
new Prize(el, options)
game.start(win, num) // 调用开始抽奖方法，传入是否中奖，奖品号码

```

## 参数说明

| 参数 | 是否必填 | 类型 | 备注 |
| :------- |:---- |:----------- | :--------|
| element | 是 | String / htmlElementObject | 可以传入css选择器名，或者dom节点 |
| options | 是 | Object | 初始化参数 |

- options属性

| 属性 | 是否必填 | 类型 | 备注 |
| :-------- | :---- | :--------- | :-------|
| imageSrc | 是 | String，默认值 '../images'| 图片的路径 |
| pageNum | 否 | Number 默认值 4 | 奖品循环几轮 |
| pageSize | 否 | Number 默认值 10 | 参与抽奖的奖品数量 |
| imageType | 否 | String，默认值 'png' | 图片类型 |

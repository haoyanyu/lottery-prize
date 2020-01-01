## 安装方法

name of image must be continuous number and start at 1（like:1.png, 2.png)

- 方法一

```javascript
<link rel="stylesheet" href="/dist/index.css">
<script src="/dist/prize.js"></script>

```

- 方法二

```bash
npm i lottery-prize
```

## 使用方法

- 方法一 script标签引入

```js
let game = new Prize(el, options)
game.start(win, num) // 调用开始抽奖方法，传入是否中奖，奖品号码

```

- 方法二 npm包管理

```js
import  Prize from 'lottery-prize'
import 'lottery-prize/dist/index.css'
let game = new Prize(el, options)
game.start(win, num) // 调用开始抽奖方法，传入是否中奖，奖品号码
```

## vue中引入

```js
<template>
<div>
  <div style="margin-top: 20px" id="prize-content"></div>
  <span id="btn" @click="start">抽奖</span>
  </div>
</template>

<script>
import  Prize from 'lottery-prize'
export default {
  name: 'test',
  data () {
    return {
      prize: null
    }
  },
  mounted () {
    this.$nextTick().then( _ => {
      this.prize = new Prize(document.querySelector('#prize-content'), {
        imageSrc: '../images',
        pageNum: 4,
        pageSize: 12,
        imageType: 'jpeg'
      });
    })
  },
  methods: {
    start () {
      let win = Math.random() > 0.5 ? true : false
      let num = Math.round(Math.random() * 12 )
      // console.log(win, num)
      this.prize.start(win, num)
    }
  }
}
</script>
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

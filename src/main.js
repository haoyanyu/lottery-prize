function checkNode (el) {
  let result = el
  if (!result) {
    return console.error('找不到当前节点', el)
  }
  if (typeof el === 'string') {
    let domName = el
    result = document.querySelector(domName)
    if (!result) {
      return console.error('找不到当前节点', el)
    }
  } else if (typeof el === 'object') {
    if (!el.nodeName) {
      return console.error('找不到当前节点', el)
    }
  }
  return result
}

class Prize {
  constructor (el, options) {
    this.prizeArr = [] // 所有奖品 
    this.pageSize = options.pageSize // 参与抽奖的奖品
    this.prize_list_h = '' // 奖品垂直排列后的高度
    this.prize_init = [] // 初始停留展示的奖品数字
    this.prize_list_item_h = 0 // 每个奖品容器的高度
    this.initData(el, options) && this.init()
    this.readyGame()
    let self = this
    window.onresize = function () {
      self.readyGame()
    }
  }
  initData (el, options) {
    this.el = checkNode(el)
    if (!this.el) return
    this.options = this.checkOptions(options)
    for (let i = 0; i < 3; i ++) {
      this.prize_init.push(Math.floor(Math.random() * this.pageSize))
    }
    return true
  }
  init () {
    this.prizeDomList = []
    let prizeWrap = document.createElement('div');
    prizeWrap.className = 'prize-goods-wrap';

    let prizeItem = document.createElement('div');
    prizeItem.className = 'prize-goods-list';
    prizeWrap.appendChild(prizeItem);
    for (let i = 0; i < 3; i ++) {
      let prizeGood = document.createElement('div');
      prizeGood.className = 'prize-goods';
      prizeGood.style.background = '#fff';
      prizeItem.appendChild(prizeGood);

      let prizeGoodBox = document.createElement('div');
      prizeGoodBox.className = 'prize-goods-box';
      prizeGoodBox.setAttribute('id', `prize${i + 1}`);
      prizeGood.appendChild(prizeGoodBox);

      let ul = document.createElement('ul');
      ul.className = 'prize-goods-ul';
      prizeGoodBox.appendChild(ul);
      this.prizeDomList.push(ul);
    }
    this.el.appendChild(prizeWrap)
    this.prizeWrap = prizeWrap
    // console.log(this.prizeDomList)
  }
  readyGame () {
    this.getPrizeHeight()
    this.getImages()
    this.setLi()
  }
  getPrizeHeight () {
    this.prize_list_item_h = (this.prizeWrap.clientHeight).toFixed(2)
  }
  getImages () {
    for (let i = 1; i <= this.options.pageNum; i++) {
      for (let j = 1; j <= this.pageSize; j++) {
        let src = `${this.options.imageSrc}/${j}.${this.options.imageType}`
        this.prizeArr.push({index: j, src})
      }
    }
  }
  setLi () {
    this.prizeDomList.forEach((ul, index) => {
      ul.innerHTML = ''
      this.prizeArr.forEach(item => {
        let li = document.createElement('li');
        li.style.height = this.prize_list_item_h + 'px';
        let img = document.createElement('img')
        img.setAttribute('src', item.src)
        li.appendChild(img)
        ul.appendChild(li)
      })
      let y = this.prize_list_item_h * this.prize_init[index]
      // console.log(this.prize_list_item_h, this.prize_init)
      ul.style.transitionDuration = '0ms'
      ul.style.transform = `translate(0px, -${y}px) translateZ(0px)`
    })
  }
  checkOptions (options) {
    if (!options) {
      return console.error('未检测到options相关参数')
    }
    let baseOptions = {
      images: [],
      imageType: 'png',
      pageNum: 4,
      pageSize: 10
    }
    return Object.assign({}, baseOptions, options)
  }
  start (win, num) {
    let self = this
    function removeListener () {
      let num = self.prize_num || []
      for (let i = 0; i < 3; i++) {
        let y0 = num[i] * self.prize_list_item_h;
        self.prizeDomList[i].style.transitionDuration = '0ms';
        self.prizeDomList[i].style.transform = `translate(0px, -${y0}px) translateZ(0px)`;
      }
      self.prizeDomList[2].removeEventListener('webkitTransitionEnd', removeListener)
    }
    if (win) {
      let y = (num + this.pageSize * (this.options.pageNum - 1)) * this.prize_list_item_h;
      for (let i = 0; i < 3; i++) {
        setTimeout(() => {
          this.prizeDomList[i].style.transitionDuration = '5000ms';
          this.prizeDomList[i].style.transform = `translate(0px, -${y}px) translateZ(0px)`;
        }, i * 300);
      }
      this.prize_num = new Array(3).fill(num)
      this.prizeDomList[2].addEventListener('webkitTransitionEnd', removeListener)
    } else {
      let num_list = randNum(this.pageSize)
      for (let i = 0; i < 3; i++) {
        let y = (num_list[i] + this.pageSize * (this.options.pageNum - 1)) * this.prize_list_item_h;
        setTimeout(() => {
          this.prizeDomList[i].style.transitionDuration = '5000ms';
          this.prizeDomList[i].style.transform = `translate(0px, -${y}px) translateZ(0px)`;
        }, i * 300);
      }
      this.prize_num = num_list
      this.prizeDomList[2].addEventListener('webkitTransitionEnd', removeListener)
    }
  }
}
function randNum (pageSize) {
  return [pageSize, pageSize, pageSize].map(size => Math.floor(Math.random() * size))
}
module.exports = Prize

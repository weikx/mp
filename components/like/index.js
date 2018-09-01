// pages/components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    liked: {
      type: Boolean
    },
    count: {
      type: Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: './images/like.png',
    noSrc: './images/like@dis.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike (event) {
      let liked = this.properties.liked
      let count = this.properties.count

      count = liked ? count - 1 : count + 1
      this.setData({
        count: count,
        liked: !liked
      })
    }
  }
})

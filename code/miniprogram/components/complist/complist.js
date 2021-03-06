// components/complist/complist.js
Component({
  options: {
    styleIsolation: 'shared',
  },
  properties: {
    title:String,
    icon:String
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeNames: ['1'],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      this.setData({
        activeNames: event.detail,
      });
    },
  }
})

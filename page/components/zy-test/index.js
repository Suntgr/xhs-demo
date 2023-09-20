Component({
  properties: {
    
  },
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  lifetimes: {
    attached: function() {
      const query = xhs.createSelectorQuery(this)
        query.select('.box').boundingClientRect();
        query.exec(res => {
            console.log('节点信息：', res[0].height);
        })
    },
  }
})

Component({
  properties: {
    test: String,
  },
  observers: {
    test(newVal) {
      console.log('[observers test]:', newVal)
    },
  },
})

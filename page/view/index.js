Page({
  data: {
    value: 2,
  },
  onClick() {
    console.log("newValue", this.data.value + 1);
    this.setData({ value: this.data.value + 1 });
  },
});

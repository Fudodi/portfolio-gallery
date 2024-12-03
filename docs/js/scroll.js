var scroll = new SmoothScroll()
new Vue({
  el: '#scrollTop',
  methods: {
    scrollTop: function () {
      scroll.animateScroll(0)
    }
  }
})
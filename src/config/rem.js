function getRem (designWidth, unit) {
  const html = document.getElementsByTagName('html')[0]
  let realWidth = document.documentElement.clientWidth
  realWidth > designWidth && (realWidth = designWidth)
  html.style.fontSize = `${realWidth / designWidth * unit}px`
}

getRem(750, 100)

// 监听手机旋转
window.addEventListener('orientationchange', function () {
  getRem(750, 100)
})

// resize 事件
window.addEventListener('resize', function () {
  getRem(750, 100)
})

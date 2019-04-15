// 计算屏幕规格
export let windowWidth = () => {
  let bodyWidth = document.body.clientWidth
  computeRem()
  // return bodyWidth >= 1024 ? 'bigWindow' : bodyWidth < 1024 && bodyWidth >= 768 ? 'middleWindow' : 'smallWindow'
  return bodyWidth > 768 ? 'bigWindow' : bodyWidth <= 768 && bodyWidth > 320 ? 'middleWindow' : 'smallWindow'
}

// 计算跟字体
let computeRem = () => {
  let bodyWidth = document.body.clientWidth
  // let drawingWidth = bodyWidth >= 768 ? 1920 : 750
  // let drawingWidth = bodyWidth >= 1024 ? 1920 : bodyWidth < 1024 && bodyWidth >= 768 ? 768 : 320
  let drawingWidth = bodyWidth > 768 ? 1920 : bodyWidth <= 768 && bodyWidth > 320 ? 768 : 320
  console.log(bodyWidth, drawingWidth)
  document.getElementsByTagName('html')[0].style.fontSize = bodyWidth * 100 / drawingWidth + 'px'
  console.log(document.getElementsByTagName('html')[0].style.fontSize)
}

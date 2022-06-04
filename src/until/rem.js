// rem等比适配配置文件
// 基准大小
const baseSize = 16
// 设置 rem 函数
function setRem () {
	//1.移动端屏幕分辨率小于854px
	//2.PC端屏幕分辨率大于854px
	console.log(document.documentElement.clientWidth)
	if(document.documentElement.clientWidth>854){
		const scale = document.documentElement.clientWidth / 1280
		// 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
		document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
	}else{
		const scale = document.documentElement.clientWidth / 500
		// 设置页面根节点字体大小（“Math.min(scale, 2)” 指最高放大比例为2，可根据实际业务需求调整）
		document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
	}
  // 当前页面屏幕分辨率相对于 1280宽的缩放比例，可根据自己需要修改
}
// 初始化
setRem()
// 改变窗口大小时重新设置 rem
window.onresize = function () {
  setRem()
}


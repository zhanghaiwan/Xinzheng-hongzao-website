/* // 轮播图 */
// 图片路径数组
let images = [
	"images/hongzaoshu1.jpg",
	"images/hongzaoshu2.jpg",
	"images/hongzaoshu3.jpg",
	"images/hongzaoshu4.jpg"
];
// 获取图片元素
let box = document.getElementById('displayed-image');
let i = 0;
let slideInterval;
// 图片切换函数
function slide() {
	i = (i + 1) % images.length;
	box.src = images[i];
}
// 页面加载完成后启动轮播
window.onload = function() {
	// 先显示第一张图
	box.src = images[0];
	// 每隔2秒切换一次
	slideInterval = setInterval(slide, 2000);
};
// 轮播图
let images = [
	"images/xisu1.jpg",
	"images/xisu2.jpg",
	"images/xisu3.jpg"
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
	// 每隔2.2秒切换一次
	slideInterval = setInterval(slide, 2200);
};
// ========== 注册表单验证逻辑 ==========
const registerForm = document.getElementById('registerForm');
const regSuccess = document.getElementById('regSuccess');
// 注册表单提交事件
registerForm.addEventListener('submit', function(e) {
	e.preventDefault(); // 阻止页面刷新
	let isRegValid = true;
	// 清空所有提示
	document.querySelectorAll('#registerForm .error-message').forEach(el => el.textContent = '');
	regSuccess.style.display = 'none';
	// 用户名验证：必填，2-10位汉字或者字母
	const username = document.getElementById('regUsername').value.trim();
	if (!username) {
		document.getElementById('usernameError').textContent = '用户名不能为空';
		isRegValid = false;
	} else if (!/^[a-zA-Z\u4e00-\u9fa5]{2,10}$/.test(username)) {
		document.getElementById('usernameError').textContent = '用户名需2-10位汉字/字母';
		isRegValid = false;
	}
	// 3. 手机号验证：选填，填的话为11位的有效号码
	const phone = document.getElementById('regPhone').value.trim();
	if (phone && !/^1[3-9]\d{9}$/.test(phone)) {
		document.getElementById('phoneError').textContent = '请输入11位有效手机号';
		isRegValid = false;
	}
	// 邮箱验证：选填，填的话要符合格式
	const email = document.getElementById('regEmail').value.trim();
	if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		document.getElementById('emailError').textContent = '请输入有效邮箱地址';
		isRegValid = false;
	}
	// 密码验证：必填，6-16位字母+数字
	const password = document.getElementById('regPassword').value.trim();
	if (!password) {
		document.getElementById('passwordError').textContent = '密码不能为空';
		isRegValid = false;
	} else if (!/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(password)) {
		document.getElementById('passwordError').textContent = '密码需6-16位字母+数字';
		isRegValid = false;
	}
	// 验证通过：显示成功提示
	if (isRegValid) {
		regSuccess.style.display = 'block';
	}
});
// 注册表单重置按钮：清空内容并隐藏提示
document.getElementById('resetBtn').addEventListener('click', function() {
	document.querySelectorAll('#registerForm .error-message').forEach(el => el.textContent = '');
	regSuccess.style.display = 'none';
});
// 留言表单验证
const messageForm = document.getElementById('messageForm');
const msgSuccess = document.getElementById('msgSuccess');
// 留言表单提交事件
messageForm.addEventListener('submit', function(e) {
	e.preventDefault(); // 阻止页面刷新
	let isMsgValid = true;
	// 1. 清空所有提示
	document.querySelectorAll('#messageForm .error-message').forEach(el => el.textContent = '');
	msgSuccess.style.display = 'none';

	// 2. 留言类型验证：必填
	const msgType = document.getElementById('msgType').value;
	if (!msgType) {
		document.getElementById('msgTypeError').textContent = '请选择留言类型';
		isMsgValid = false;
	}
	// 3. 留言内容验证：必填，至少2字
	const msgContent = document.getElementById('msgContent').value.trim();
	if (!msgContent) {
		document.getElementById('msgContentError').textContent = '留言内容不能为空';
		isMsgValid = false;
	} else if (msgContent.length < 2) {
		document.getElementById('msgContentError').textContent = '留言内容至少2个字';
		isMsgValid = false;
	}
	// 4. 验证通过：显示成功提示，不清空
	if (isMsgValid) {
		msgSuccess.style.display = 'block';
	}
});
// 留言表单重置按钮：清空内容并隐藏提示
document.getElementById('msgResetBtn').addEventListener('click', function() {
	document.querySelectorAll('#messageForm .error-message').forEach(el => el.textContent = '');
	msgSuccess.style.display = 'none';
});
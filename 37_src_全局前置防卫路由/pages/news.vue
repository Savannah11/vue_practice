<template>
	<div>
		<ul>
			<li :style="{ opacity }">欢迎学习Vue</li>
			<li>news001</li>
			<li>news002</li>
			<li>news003</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'News',
	data() {
		return {
			opacity: 1

		}
	},
	beforeDestroy() {
		console.log('nes组件要被销毁了')
		// 定义在这里不合适 news 利用keep-alive被缓存了下来 定时器则一直在运行
		// clearInterval(this.timer)
	},
	mounted() {
		console.log('mounted', this)
		this.timer = setInterval(() => {
			this.opacity -= 0.01
			if (this.opacity <= 0) this.opacity = 1
		}, 20)
	},
	activated() {
		// 激活某组件时
		console.log('news组件被激活')

	},
	deactivated() {
		console.log('news组件失活，定时器被清除')
		clearInterval(this.timer)
	},
}
</script>

<style>
</style>
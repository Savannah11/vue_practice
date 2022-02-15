// 多个组件复用该方法
export const hunhe = {
    methods: {
        showName() {
            alert(this.schoolName);
        },
    },
    mounted() {
        console.log("hello,I'm from mounted")
    },
}
// 原组件中已有属性、方法 不会覆盖原组件属性
// 但生命周期函数中的内容会一同使用 1+1
export const hunhe2 = {
    data() {
        return {
            newA: '添加的混合属性',
            age: 67
        }
    }
}
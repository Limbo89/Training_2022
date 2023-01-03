<template>
    <div>
        <div class="properties">
            <p>Введите цвет</p>
            <input type="text" v-model="color">
            <p>Введите цвет обводки</p>
            <input type="text" v-model="border">
            <p>Введите размер</p>
            <input type="text" v-model="size">
            <button @click="addBall()">Создать</button>
        </div>
        <div class="balls">
            <ball-component v-for="(ball, i) in balls" :key="i" :size="ball.size" :border="ball.border" />
        </div>
    </div>
</template>
<script>
import BallComponent from './list-element/BallComponent.vue'
export default {
    components: {
        BallComponent
    },
    data() {
        return {
            balls: [],
            color: '',
            size: '',
            border: '',
        }
    },
    methods: {
        addBall() {
            this.balls.push({
                size: this.size,
                border: this.border,
                color: this.color,
            })
            console.log(this.balls);
        }
    },
}
</script>
<style lang="scss">
body {
    background-color: rgb(53, 177, 59);
}
</style>
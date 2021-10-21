<template>
    <div class="wrapper">
        <div class="welcome">
            <h3 class="title">MCQ TEST</h3>
            <p>Total 30 Questions</p>
            <button class="btn" @click="$emit('start-quiz')">Start Quiz</button>
        </div>
    </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Welcome',
});
</script>

<style lang="scss">
@import '../styles/_constants.scss';

.wrapper {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    .welcome {
        width: 576px;
        height: 320px;
        background: $secondary-bg;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border-radius: $general-border-radius;
    }
}
</style>

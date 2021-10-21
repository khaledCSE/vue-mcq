<template>
    <div class="wrapper">
        <div class="result">
            <h3 class="title">MCQ RESULT</h3>
            <p class="cone">🎉</p>
            <p>You Got {{ correctAnswers }} Correct Answers</p>
            <button class="btn" @click="$emit('reset-quiz')">Take Again</button>
        </div>
    </div>
</template>

<script lang="ts" scoped>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Result',
    props: { correctAnswers: Number },
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

    .result {
        width: 576px;
        height: 320px;
        background: $secondary-bg;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        border-radius: $general-border-radius;

        .cone {
            font-size: 60px;
        }
    }
}
</style>

<template>
    <Welcome v-if="!started && !ended" @start-quiz="startQuiz" />
    <Quiz
        v-if="started"
        :questions="questions"
        @answer="handleAnswer"
        @finish="endQuiz"
    />
    <Result
        v-if="!started && ended"
        :correctAnswers="correct"
        @reset-quiz="resetQuiz"
    />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Welcome from './components/Welcome.vue';
import Quiz from './components/Quiz.vue';
import Result from './components/Result.vue';
import questions from './seed/questions';

export default defineComponent({
    name: 'App',
    components: {
        Welcome,
        Quiz,
        Result,
    },
    data() {
        return {
            started: false,
            ended: false,
            questions,
            correct: 0,
        };
    },
    methods: {
        startQuiz() {
            this.started = true;
        },
        handleAnswer(prop: any) {
            const { questionId, answerGiven } = prop;
            const question = this.questions.find((q) => q.id === questionId);
            if (answerGiven === question?.answer) {
                this.correct = this.correct + 1;
            }
            const index = this.questions.findIndex((q) => q.id === questionId);
            const updated = { ...this.questions[index], answered: true };
            this.questions = [
                ...this.questions.slice(0, index),
                updated,
                ...this.questions.slice(index + 1),
            ];
        },
        endQuiz() {
            this.started = false;
            this.ended = true;

            console.log(this.questions);
        },
        resetQuiz() {
            this.started = false;
            this.ended = false;
            this.correct = 0;
        },
    },
});
</script>

<style lang="scss">
@import './styles/_constants.scss';
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Roboto', sans-serif;
    #app {
        min-height: 100vh;
        max-width: $nav-width;
        margin-left: auto;
        margin-right: auto;

        // border: 1px solid salmon;
    }

    .btn {
        padding: 10px 80px;
        background: $primary-bg;
        color: #fff;
        border: none;
        outline: none;
        cursor: pointer;
        border-radius: 5px;

        &:hover {
            opacity: 0.8;
        }
    }
}
.title {
    color: $primary-bg;
}
</style>

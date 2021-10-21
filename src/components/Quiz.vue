<template>
    <div class="wrapper">
        <nav>
            <span>Remaining Time: </span>
            <span>00: 00: 00</span>
        </nav>

        <div class="questions">
            <div
                class="question-card"
                v-for="question in questions"
                :key="question.id"
            >
                <p class="question">{{ question.id }}. {{ question.title }}</p>
                <p
                    class="answer"
                    v-for="option in question.options"
                    :key="option"
                    @click="
                        $emit('answer', {
                            questionId: question.id,
                            answerGiven: option,
                        })
                    "
                >
                    <i class="far fa-circle"></i>
                    {{ option }}
                </p>
            </div>
        </div>
        <div class="btn-wrapper">
            <button class="btn" @click="$emit('finish')">Finish Quiz</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Quiz',
    props: {
        questions: Array,
    },
});
</script>

<style lang="scss" scoped>
@import '../styles/_constants.scss';

.wrapper {
    width: 100%;
    min-height: 100vh;

    display: flex;
    flex-direction: column;
    gap: 10px;

    .btn-wrapper {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
}

nav {
    height: 117px;
    width: 100%;
    background: $secondary-bg;
    border-radius: $general-border-radius;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
    color: $primary-bg;
    font-weight: bold;
}

.questions {
    width: 100%;
    min-height: 50vh;
    // background: #000;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    gap: 20px;

    .question-card {
        width: 100%;
        height: $card-height;
        background: $secondary-bg;
        border-radius: $general-border-radius;
        padding: 30px;
        color: $primary-bg;

        .question {
            font-weight: bold;
            margin-bottom: 10px;
        }
        .answer {
            margin: 10px 0;
            cursor: pointer;
        }
    }
}
</style>

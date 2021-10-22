<template>
    <div class="wrapper">
        <nav>
            <span>Remaining Time: </span>
            <span>{{ time }}</span>
        </nav>

        <div class="questions">
            <div
                class="question-card"
                v-for="question in questions"
                :key="question.id"
                :style="{ pointerEvents: question.answered && 'none' }"
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
    data: () => ({
        time: '',
    }),
    mounted() {
        this.showTimeRemaining();
    },
    methods: {
        timeFormat(time: number) {
            return time > 10 ? `${time}` : `0${time}`;
        },
        showTimeRemaining() {
            let total_seconds = 1800;
            const timer = setInterval(() => {
                total_seconds -= 1;

                if (total_seconds < 0) {
                    clearInterval(timer);
                    this.$emit('finish');
                }

                let seconds = total_seconds % 60;
                let minutes = Math.floor((total_seconds % 3600) / 60);
                let hours = Math.floor((total_seconds % (3600 * 24)) / 3600);

                let time = `${this.timeFormat(hours)} : ${this.timeFormat(
                    minutes
                )} : ${this.timeFormat(seconds)}`;
                this.time = time;
            }, 1000);
        },
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
        label {
            margin-left: 10px;
            font-size: 1.2rem;
        }
        .answer {
            margin: 10px 0;
            cursor: pointer;

            &:active {
                font-weight: bold;
            }
        }
    }
}
</style>

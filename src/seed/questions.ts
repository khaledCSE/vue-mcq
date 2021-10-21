export interface iQuestion {
    id: string;
    title: string;
    options: string[];
    answer: string;
}
export default [
    {
        id: 1,
        title: "What is the past form of 'eat'?",
        options: ['eat', 'ate', 'eaten', 'have ate'],
        answer: 'ate',
    },
    {
        id: 2,
        title: "What is the past form of 'Do'?",
        options: ['do', 'have done', 'has do', 'did'],
        answer: 'did',
    },
];

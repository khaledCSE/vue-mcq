export interface iQuestion {
    id: string;
    title: string;
    options: string[];
    answer: string;
}

const data = [
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
    {
        id: 3,
        title: 'Which variable type is INVALID in Javascript?',
        options: ['int', 'var', 'const', 'let'],
        answer: 'int',
    },
    {
        id: 4,
        title: 'console.log("Pizzatown".substring(3, 7)); Will print what to the console?',
        options: ['zzat', 'zato', 'atow', 'izzato'],
        answer: 'zato',
    },
    {
        id: 5,
        title: 'Who created nodejs?',
        options: ['Ryan Dahl', 'Ryan Gosling', 'Ryan Reynolds', 'Chuck Norris'],
        answer: 'Ryan Dahl',
    },
    {
        id: 6,
        title: 'Who created linux?',
        options: [
            'Shola Ameobi',
            'Linus Torvalds',
            'Ozan Tufan',
            'Albert Hopkins',
        ],
        answer: 'Linus Torvalds',
    },
    {
        id: 7,
        title: 'What Is The Most Common Letter In The English Alphabet?',
        options: ['C', 'A', 'E', 'D'],
        answer: 'E',
    },
    {
        id: 8,
        title: 'On Every Continent, There Is A City Named What?',
        options: ['Liverpool', 'Dundee', 'Cordoba', 'Rome'],
        answer: 'Rome',
    },
    {
        id: 9,
        title: 'What’s The Hardest Rock?',
        options: ['Diamond', 'Ruby', 'Perl', 'Bitumin'],
        answer: 'Diamond',
    },
    {
        id: 10,
        title: 'In A Website Browser Address Bar, What Does “WWW” Stand For?',
        options: [
            'Wage Wastage Weekly',
            'Wolves of Wall Street',
            'Woman With Weapon',
            'World Wide Web',
        ],
        answer: 'World Wide Web',
    },
    {
        id: 11,
        title: 'What Animal Can Clean Its Own Ear With Its Tongue?',
        options: ['Giraffe', 'Elephant', 'Panda', 'Cow'],
        answer: 'Giraffe',
    },
    {
        id: 12,
        title: 'Coprastastaphobia Is The Fear Of What?',
        options: ['Height', 'Constipation', 'Weight', 'Dark'],
        answer: 'Constipation',
    },
    {
        id: 13,
        title: 'What Is The Only Fruit That Has Its Seeds On The Outside?',
        options: ['Banana', 'Mango', 'Strawberry', 'Melon'],
        answer: 'Strawberry',
    },
    {
        id: 14,
        title: 'What Vitamin Does The Sun’s Ultraviolet Rays Help The Skin Produce?',
        options: ['B', 'A', 'D', 'C'],
        answer: 'D',
    },
    {
        id: 15,
        title: 'What Vitamin Does The Sun’s Ultraviolet Rays Help The Skin Produce?',
        options: ['B', 'A', 'D', 'C'],
        answer: 'D',
    },
    {
        id: 16,
        title: 'What Vitamin Does The Sun’s Ultraviolet Rays Help The Skin Produce?',
        options: ['B', 'A', 'D', 'C'],
        answer: 'D',
    },
    {
        id: 17,
        title: 'The Statue Of Liberty Was Given To The US By Which Country?',
        options: ['Bangladesh', 'France', 'Namibia', 'India'],
        answer: 'France',
    },
    {
        id: 18,
        title: 'What is the name of the longest river in the world?',
        options: ['Nile River', 'Padma', 'Jamuna', 'Amazon'],
        answer: 'Nile River',
    },
    {
        id: 19,
        title: 'In the Solar System, which is the hottest planet?',
        options: ['Earth', 'Mars', 'Pluto', 'Venus'],
        answer: 'Venus',
    },
    {
        id: 20,
        title: 'How many holes are there on a golf course?',
        options: ['18', '5', '55', '30'],
        answer: '18',
    },
];

const res = data.map((el) => ({ ...el, answered: false }));

export default res;

export class Answers {
    id: number;
    questionId: number;
    answer: string;
    correct: boolean;
    selected: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.questionId = data.questionId;
        this.answer = data.answer;
        this.correct = data.correct;
    }
}
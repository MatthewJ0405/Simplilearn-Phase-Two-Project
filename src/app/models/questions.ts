import { Answers } from './answers';

export class Questions {
    id: number;
    question: string;
    answers: Answers[];
    answered: boolean;

    constructor(data: any) {
        data = data || {};
        this.id = data.id;
        this.question = data.question;
        this.answers = [];
        data.answers.forEach(answer => {
            this.answers.push(new Answers(answer));
        });
    }
}
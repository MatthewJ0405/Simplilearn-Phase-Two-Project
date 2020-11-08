import { Questions } from './questions';

export class Quiz {
    id: number;
    title: string;
    questions: Questions[];

    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.title = data.title;
            this.questions = [];
            data.questions.forEach(question => {
                this.questions.push(new Questions(question));
            });
        }
    }
}
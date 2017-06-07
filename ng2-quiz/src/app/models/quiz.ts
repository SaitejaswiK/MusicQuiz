import { QuizConfig } from './quiz-config';
import { Question } from './question';

export class Quiz {
    id: number;
    name: string;
    config: QuizConfig;
    questions: Question[];
    songs:HTMLAudioElement;
    constructor(data: any) {
        if (data) {
            this.id = data.id;
            this.name = data.name;
            this.config = new QuizConfig(data.config);
            this.songs = data.songs;
            this.questions = [];
            data.questions.forEach(q => {
                this.questions.push(new Question(q));
            });
        }
    }
}

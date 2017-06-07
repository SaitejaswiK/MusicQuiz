import { Option } from './option';

export class Question {
    id: number;
    name: string;
    questionTypeId: number;
    options: Option[];
    songs:HTMLAudioElement;
    answered: boolean;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.songs = data.songs;
        this.questionTypeId = data.questionTypeId;
        this.options = [];
        data.options.forEach(o => {
            this.options.push(new Option(o));
        });
    }
}

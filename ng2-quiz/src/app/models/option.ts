export class Option {
    id: number;
    questionId: number;
    name: string;
    songs:HTMLAudioElement;
    isAnswer: boolean;
    selected: boolean;

    constructor(data: any) {
        this.id = data.id;
        this.songs = data.songs;
        this.questionId = data.questionId;
        this.name = data.name;
        this.isAnswer = data.isAnswer;
    }
}

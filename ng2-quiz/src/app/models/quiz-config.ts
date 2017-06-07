export class QuizConfig {
    allowBack: boolean;
    allowReview: boolean;
    duration: number;  
    pageSize: number;

    constructor(data: any) {
        data = data || {};
        this.allowBack = data.allowBack;
        this.allowReview = data.allowReview;
        this.duration = data.duration;
        this.pageSize = data.pageSize;
        
    }
}
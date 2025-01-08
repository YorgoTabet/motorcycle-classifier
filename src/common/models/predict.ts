export interface PredictionItem {
    prediction: string;
    probability: number;
}

export interface IPredictReturn {   
    type: string;
    time: string;
    data: Array<string>;
    endpoint: string;
    fn_index: number;
}


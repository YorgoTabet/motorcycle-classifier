import { Client } from "@gradio/client";



export const classifyMotorcycleImage = async (exampleImage: Blob) => {
    const client = await Client.connect("Yoxxx/motorcycle-classifier");
    return await client.predict("/predict", { 
                    img: exampleImage, 
    });
}





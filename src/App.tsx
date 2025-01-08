
import { useState } from 'react'
import './App.css'
import {ImageUpload} from './common/components/ImageUpload'
import { classifyMotorcycleImage } from './common/services/predict'
import { IPredictReturn, PredictionItem } from './common/models/predict';
import Button from './common/components/Button';
import { parseDataArray } from './common/utils/json';

function App() {
  const [imageBlob, setImageBlob] = useState<Blob | null>(null)
  const [predictionResult, setPredictionResult] = useState<IPredictReturn>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  function handleOnUpload(blob: Blob) {
    setImageBlob(blob);
  }

  const handlePredict = async () => {
    if (imageBlob) {
      setIsLoading(true)
      classifyMotorcycleImage(imageBlob).then((result) => {

        setIsLoading(false)
        setPredictionResult(result as unknown as IPredictReturn)
      })
    }
  }
  console.log(predictionResult)

  return (
    <>
    <p>Motorcycle classifier</p>
    <p>Upload an image and click predict to know the motorcycle type</p>
    <ImageUpload  onUploadSuccessful={handleOnUpload}/>
    <Button disabled={!imageBlob} isLoading={isLoading} onClick={handlePredict} >Predict</Button>
    <p>{parseDataArray(predictionResult?.data)?.map((el) => {
      const parsedEl= JSON.parse(JSON.stringify(el)) as PredictionItem
      
      const prediction = parsedEl?.prediction;
      const key = parsedEl?.prediction + parsedEl?.probability.toString();
      const probabilityPercentage = `${parseFloat(parsedEl?.probability.toFixed(2)) * 100}%`;


      return <p key={key}>{prediction} - {probabilityPercentage}</p>
    })}</p>
    </>
  )
}



export default App

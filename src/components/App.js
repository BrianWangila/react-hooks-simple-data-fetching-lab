// create your App component here
import React, {useEffect, useState} from "react";

function App(){

  const [randomImage, setRandomImage] = useState()

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((r) => r.json())
    .then((data) => {setRandomImage(data.message)})}, []
  )
  if (!randomImage) 
      return <p>Loading...</p>
  return(
   
    
    <img src={randomImage} alt="A Random Dog"/>
    
  )
     
}
export default App
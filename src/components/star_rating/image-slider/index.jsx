import { useState } from 'react';

export default function ImageSlider({ url, limit }) {
    
    const [images, setImages] = useState([])
    const [current, setCurrentSlide] = useState(0)
    const [errorMsg, setErrorMsg] = useState(null)

    async function fetchImages(getUrl){
        try{

        } catch(e){

        }
    }

    useEffect(()=> {
        if(url !== '') fetchimages(url)
    }, [url])

    return <div className=""container></div>
}
import axios from 'axios';
import React, {useEffect, useState} from 'react';

const useCallapi = () => {

    const[weather,setWeather]=useState(null);
    const [isLoading, setIsLoading]= useState();
    
    useEffect(() => {        
        const handleError=()=>{
            setIsLoading(true);             
        }        
        const success = position => {
            const lat = position.coords.latitude
            const lon = position.coords.longitude
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=6ae50eeb73b440cda906389ec9ac3eff`)
            .then(res=> setWeather(res.data))
        }   
        navigator.geolocation.getCurrentPosition(success, handleError)         
    }, [])
    useEffect(() => {
    window.addEventListener('click', _ => {window.location.reload();});
    }, [])   
    return {weather,isLoading}
};

export default useCallapi;
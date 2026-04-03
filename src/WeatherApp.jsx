import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city:"Delhi",
            feelslike:314.2,
            temp:307.2,
            tempMin:307.2,
            tempMax:307.2,
            humidity:70,
            weather:"haze"    
       }
    );

    let updateInfo = (newInfo ) => {
        setWeatherInfo(newInfo );
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>weather app by delta</h2>
            <SearchBox updateInfo= {updateInfo }/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(
        {
            city:"Delhi",
            feelsLike:29.49,
            temp:29.05,
            tempMin:29.05,
            tempMax:29.05,
            humidity:48,
            weather:"drizzle"    
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
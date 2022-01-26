import { useContext } from "react"
import { Alert } from "react-bootstrap"
import PlantsContext from "../utils/PlantsContext"

function WeatherCard() {
  const { weather } = useContext(PlantsContext)
  //   console.log(weather.weather[0].icon)
  const city = weather?.name
  const weatherInfo = weather?.weather[0]
  console.log(weatherInfo)
  const main = weatherInfo?.main
  const description = weatherInfo?.description
  const ic = weatherInfo?.icon
  const temp = Math.round(weather?.main?.temp)
  const tempMax = Math.round(weather?.main?.temp_max)
  const tempMin = Math.round(weather?.main?.temp_min)
  const icon = `http://openweathermap.org/img/wn/${ic}@2x.png`
  return (
    <>
      <Alert variant="success" style={{ position: "fixed", right: 900, top: 100, width: 250 }}>
        <Alert.Heading>{weather?.name}</Alert.Heading>
        <p>{weather?.weather[0]?.description}</p>
        <p>temp:{temp} </p>
        <p>Max temp:{tempMax}</p>
        <p>Min temp:{tempMin}</p>
        <img src={icon} />
      </Alert>
    </>
  )
}

export default WeatherCard

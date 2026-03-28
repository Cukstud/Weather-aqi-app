function Weather({data}){
    if (!data) return null;
    return(
     <div>
      <h1 className="text-5xl font-extrabold">{data.name}</h1>
      <p className="text-1xl font-extrabold">Temperature: {data.main.temp} °C</p>
      <p className="text-1xl font-extrabold">Condition: {data.weather[0].description}</p>
    </div>
    )
}

export default Weather
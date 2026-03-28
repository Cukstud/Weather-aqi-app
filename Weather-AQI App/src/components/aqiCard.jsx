function AQICard({ data,city }) {
     if (!data|| !data.list || data.list.length === 0) {
    return <p>Loading AQI...</p>;
  }
    const getAQILabel = (value)=>{
        switch(value){
            case 1:
                return "Good";
            case 2:
                return "Fair";
            case 3:
                return "Moderate";
            case 4:
                return "Poor";
            case 5:
                return "Very Poor";
            default:
                return "Unknown";        
        }
    }
    const d = data.list[data.list.length - 1];
    return(
        <div>
                <h1 className="text-5xl font-extrabold">{city}</h1>
                <h3 className="text-1xl font-extrabold">AQI: {d.main.aqi} ({getAQILabel(d.main.aqi)})</h3>
    
        </div>
    )
}

export default AQICard
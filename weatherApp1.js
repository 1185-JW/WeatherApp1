const apiKey ="c4786700e71249e38a073701230808";

async function showWeather()
{
    const cityInp = document.getElementById("cityInp");
    const cityName = cityInp.value ;

    try 
    {
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes&units=metric`);

        const data = await response.json(); 

        if(data.error){ throw new Error(data.error.message || 'City not found'); }

        console.log(data);




        document.getElementById("H1").innerHTML = `${data.location.name}`;

        document.getElementById("H2").innerHTML = `${data.current.condition.text}`;

        document.getElementById("Imgg").src = `${data.current.condition.icon}`;

        document.getElementById("Par1").innerHTML = `${data.location.region}`;

        document.getElementById("Par2").innerHTML = `${data.location.country}`;

        document.getElementById("TempH1").innerHTML = `${data.current.temp_c}°`;


        document.getElementById("d2_a").innerHTML =`${data.current.air_quality.co}`;

        document.getElementById("d2_b").innerHTML =`${data.current.air_quality.no2}`;

        document.getElementById("d2_c").innerHTML =`${data.current.air_quality.o3}`;

        document.getElementById("d2_d").innerHTML =`${data.current.air_quality.so2}`;

        document.getElementById("d2_e").innerHTML =`${data.current.air_quality.pm10}`;

        document.getElementById("d2_f").innerHTML =`${data.current.air_quality.pm2_5}`;


        document.getElementById("FLd2_a").innerHTML =`${data.current.feelslike_c}`;

        document.getElementById("FLd2_b").innerHTML =`${data.current.feelslike_f}`;

        document.getElementById("FLd2_c").innerHTML =`${data.current.gust_kph}`;

        document.getElementById("FLd2_d").innerHTML =`${data.current.gust_mph}`;

        document.getElementById("FLd2_e").innerHTML =`${data.current.humidity}`;

        document.getElementById("FLd2_f").innerHTML =`${data.current.precip_in}`;

        document.getElementById("FLd2_g").innerHTML =`${data.current.precip_mm}`;

        document.getElementById("FLd2_h").innerHTML =`${data.current.pressure_in}`;

        document.getElementById("FLd2_i").innerHTML =`${data.current.pressure_mb}`;

        document.getElementById("FLd2_j").innerHTML =`${data.current.temp_c}`;

        document.getElementById("FLd2_k").innerHTML =`${data.current.temp_f}`;

        document.getElementById("FLd2_l").innerHTML =`${data.current.uv}`;


        document.getElementById("WD1").innerHTML = `${data.current.wind_degree}`;

        document.getElementById("WD2").innerHTML =`${data.current.wind_dir}`;
       
        document.getElementById("WD3").innerHTML =`${data.current.wind_kph}`;

        document.getElementById("WD4").innerHTML =`${data.current.wind_mph}`;
        



       cityInp.value = "";
    }

    catch(error)
    {
        alert("Error fetching weather data. Please try again.")
        console.error(error);
    }
}
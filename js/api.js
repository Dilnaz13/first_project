const par_t = document.getElementById('Par_t')
const lond_t = document.getElementById('Lond_t')
const wash_t = document.getElementById('Wash_t')

const par_s = document.getElementById('Par_s')
const lond_s = document.getElementById('Lond_s')
const wash_s = document.getElementById('Wash_s')

async function Api() {
    const respons_par = await fetch('https://api.open-meteo.com/v1/forecast?latitude=48.8534&longitude=2.3488&current=temperature_2m,wind_speed_10m&hourly=temperature_2m')
    const respons_lond = await fetch('https://api.open-meteo.com/v1/forecast?latitude=51.5085&longitude=-0.1257&current=temperature_2m,wind_speed_10m&hourly=temperature_2m')
    const respons_wash = await fetch('https://api.open-meteo.com/v1/forecast?latitude=38.8951&longitude=-77.0364&current=temperature_2m,wind_speed_10m&hourly=temperature_2m')
    const data_par = await respons_par.json()
    const data_lond = await respons_lond.json()
    const data_wash = await respons_wash.json()
    return [data_par, data_lond, data_wash]
}

async function output() {
    try {
        let out = await Api()
        console.log(out)
        par_t.textContent = `Air temperature: ${out[0].current.temperature_2m} \u00B0C`
        lond_t.textContent = `Air temperature: ${out[1].current.temperature_2m} \u00B0C`
        wash_t.textContent = `Air temperature: ${out[2].current.temperature_2m} \u00B0C`
        par_s.textContent = `Wind speed: ${out[0].current.wind_speed_10m} m/s`
        lond_s.textContent = `Wind speed: ${out[1].current.wind_speed_10m} m/s`
        wash_s.textContent = `Wind speed: ${out[2].current.wind_speed_10m} m/s`
    }
    catch(error) {
        console.log(error)
    }
    finally {
        setTimeout(out, 10000)
    }
}

output()
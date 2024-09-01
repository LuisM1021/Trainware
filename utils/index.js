function renderPrice(price){
    return parseFloat(price.toFixed(2))
}

async function getCountry(){
    try {
        const position = await getCurrentPositionPromise(); 
        return await searchCountry(position.coords.latitude, position.coords.longitude) 
    } catch (error) {
        return {error: true}
    }
}

async function searchCountry(lat, lon){
    const res = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json&addressdetails=1`);
    const data = await res.json();
    return data.address.country;
}

function getCurrentPositionPromise() {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
            (position) => resolve(position),
            (error) => reject(new Error(error.message))
        );
    });
}
export { renderPrice, getCountry }
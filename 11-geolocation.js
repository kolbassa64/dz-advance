function getGeolocation() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve(position);
      },
      (error) => {
        reject(error);
      }
    )
  })
}

getGeolocation()
      .then((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const aboba = document.createElement('div');
        document.body.appendChild(aboba);
        aboba.textContent = `Широта: ${latitude}, Долгота: ${longitude}`
      })
      .catch((error) => {
        aboba.textContent = `Ошибка: ${error.message}`;
      })

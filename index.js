//Ejemplo de funcion asincrona

async function funcionAsincrona() {
  const promesa = await fetch("https://api.nasa.gov/planetary/apod", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await promesa.json();
  console.log(data);
}

funcionAsincrona();
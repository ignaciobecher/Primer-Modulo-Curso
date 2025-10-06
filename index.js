function createProduct(name, price) {
  try {
    if (!name) {
      throw new Error("Nombre requerido");
    }
  } catch (error) {
    console.log(error);
  }finally{
    console.log("Ejecución finalizada");
  }
}

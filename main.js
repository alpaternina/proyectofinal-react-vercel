const consulta = (permiso) => new Promise((resolve, reject) => {
   if (permiso) {
    resolve("Genial, accediste a la información")
   }
   reject("No tiene los permisos necesarios")
})

console.log (consulta (true))
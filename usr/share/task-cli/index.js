const fs = require('fs');
const path = require('path');

// Obtener el directorio actual
const currentDirectory = __dirname;


// Verificar si se pasó al menos un segundo argumento
if (process.argv.length < 3) {
  console.log('No se pasó un segundo argumento.');
} else {

  switch(process.argv[2]){
    case "add":
      console.log("ACCION ADD");
    break;
    case "update":
      console.log("ACCION UPDATE");
    break;
    case "delete":
      console.log("ACCTION DELETE");
    break;
    case "mark-in-progress":
      console.log("ACCTION MARK");
    break;
    case "mark-done":
      console.log("ACCITON MARK-DONE");
    break;
    case "list":
      console.log("ACCTION LIST");
    break;
  }
}

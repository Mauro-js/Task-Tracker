// Verificar si se pasó al menos un segundo argumento
if (process.argv.length < 4) {
  console.log('No se pasó un segundo argumento.');
} else {
  // Imprimir el segundo argumento
  console.log('El segundo argumento es:', process.argv[3]);
}

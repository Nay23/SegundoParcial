
import * as fs from 'fs';

export const escribirJson = () => {

    const persona = {
      "nombre":"Pedro",
      "apellido": "Arias",
      "edad": 58,
      "salario": 2500,
      "activo": true
    }
      
      const contenido = JSON.stringify(persona, null, 4);

      const path = './data/nuevo.json';
      
      fs.writeFile(path, contenido, (error) => {
        if (error) console.log(error);
        
        console.log(`El archivo '${path}' se ha creado correctamente.`);
        
      });
    
}

export const leerJson = () => {

    fs.readFile('./data/nuevo.json', (error, contenido) => {
        if (error) console.log(error);
        
        const objeto = JSON.parse(contenido);
        
        console.log(objeto);
    })
}


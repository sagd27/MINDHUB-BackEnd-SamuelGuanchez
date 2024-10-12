import "dotenv/config.js";
import '../../config/database.js'
import Familiar from '../Familiar.js'

let familia = [
        {
          name: "Juan",
          apellido: "Pérez",
          edad: "30",
          cedula: "123456789",
          comidaFavorita: "Pizza",
          altura: "1.75m",
          peso: "75kg",
          tieneCarro: true,
          tieneMoto: false,
          direcion: "Calle 123, Ciudad"
        },
        {
          name: "María",
          apellido: "Gómez",
          edad: "28",
          cedula: "987654321",
          comidaFavorita: "Sushi",
          altura: "1.65m",
          peso: "60kg",
          tieneCarro: false,
          tieneMoto: true,
          direcion: "Avenida 456, Ciudad"
        },
        {
          name: "Pedro",
          apellido: "López",
          edad: "35",
          cedula: "456789123",
          comidaFavorita: "Pasta",
          altura: "1.80m",
          peso: "85kg",
          tieneCarro: true,
          tieneMoto: false,
          direcion: "Calle 789, Ciudad"
        },
        {
          name: "Ana",
          apellido: "Martínez",
          edad: "26",
          cedula: "789123456",
          comidaFavorita: "Tacos",
          altura: "1.60m",
          peso: "55kg",
          tieneCarro: false,
          tieneMoto: false,
          direcion: "Avenida 123, Ciudad"
        },
        {
          name: "Luis",
          apellido: "Hernández",
          edad: "40",
          cedula: "321654987",
          comidaFavorita: "Hamburguesas",
          altura: "1.85m",
          peso: "90kg",
          tieneCarro: true,
          tieneMoto: true,
          direcion: "Calle 456, Ciudad"
        },
        {
          name: "Carla",
          apellido: "Ramírez",
          edad: "22",
          cedula: "654987321",
          comidaFavorita: "Ensalada",
          altura: "1.70m",
          peso: "65kg",
          tieneCarro: false,
          tieneMoto: false,
          direcion: "Avenida 789, Ciudad"
        },
        {
          name: "José",
          apellido: "Fernández",
          edad: "33",
          cedula: "123987456",
          comidaFavorita: "Ceviche",
          altura: "1.78m",
          peso: "78kg",
          tieneCarro: true,
          tieneMoto: false,
          direcion: "Calle 159, Ciudad"
        },
        {
          name: "Laura",
          apellido: "Díaz",
          edad: "29",
          cedula: "456123789",
          comidaFavorita: "Pollo Asado",
          altura: "1.67m",
          peso: "62kg",
          tieneCarro: false,
          tieneMoto: true,
          direcion: "Avenida 258, Ciudad"
        },
        {
          name: "Diego",
          apellido: "Morales",
          edad: "31",
          cedula: "987321654",
          comidaFavorita: "Arepas",
          altura: "1.74m",
          peso: "70kg",
          tieneCarro: true,
          tieneMoto: false,
          direcion: "Calle 357, Ciudad"
        },
        {
          name: "Sofía",
          apellido: "Castro",
          edad: "24",
          cedula: "321987654",
          comidaFavorita: "Empanadas",
          altura: "1.68m",
          peso: "58kg",
          tieneCarro: false,
          tieneMoto: false,
          direcion: "Avenida 654, Ciudad"
        }
      ];


      Familiar.insertMany(familia)
      
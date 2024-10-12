import "dotenv/config.js";
import '../../config/database.js'
import Mascota from '../Mascota.js'

let mascotas = [
        {
          nombre: "Firulais",
          raza: "Labrador",
          color: "Marrón",
          vacunado: true,
          edad: 5,
          sexo: "Macho",
          peso: 30,
          altura: 60,
          tipoPelaje: "Corto",
          ultimaConsulta: new Date("2024-08-15"),
          nombreDueño: "Carlos Pérez"
        },
        {
          nombre: "Nina",
          raza: "Beagle",
          color: "Tricolor",
          vacunado: true,
          edad: 3,
          sexo: "Hembra",
          peso: 12,
          altura: 40,
          tipoPelaje: "Corto",
          ultimaConsulta: new Date("2024-09-20"),
          nombreDueño: "Ana Gómez"
        },
        {
          nombre: "Rocky",
          raza: "Pitbull",
          color: "Gris",
          vacunado: true,
          edad: 4,
          sexo: "Macho",
          peso: 35,
          altura: 55,
          tipoPelaje: "Corto",
          ultimaConsulta: new Date("2024-07-10"),
          nombreDueño: "Juan Martínez"
        },
        {
          nombre: "Bella",
          raza: "Poodle",
          color: "Blanco",
          vacunado: false,
          edad: 2,
          sexo: "Hembra",
          peso: 7,
          altura: 30,
          tipoPelaje: "Rizado",
          ultimaConsulta: new Date("2024-08-22"),
          nombreDueño: "María Ramírez"
        },
        {
          nombre: "Simba",
          raza: "Golden Retriever",
          color: "Dorado",
          vacunado: true,
          edad: 6,
          sexo: "Macho",
          peso: 32,
          altura: 65,
          tipoPelaje: "Largo",
          ultimaConsulta: new Date("2024-06-30"),
          nombreDueño: "Luis Fernández"
        },
        {
          nombre: "Luna",
          raza: "Bulldog Francés",
          color: "Negro",
          vacunado: false,
          edad: 3,
          sexo: "Hembra",
          peso: 9,
          altura: 33,
          tipoPelaje: "Corto",
          ultimaConsulta: new Date("2024-08-10"),
          nombreDueño: "Carla Díaz"
        },
        {
          nombre: "Max",
          raza: "Pastor Alemán",
          color: "Negro y Fuego",
          vacunado: true,
          edad: 5,
          sexo: "Macho",
          peso: 40,
          altura: 70,
          tipoPelaje: "Medio",
          ultimaConsulta: new Date("2024-09-01"),
          nombreDueño: "José López"
        },
        {
          nombre: "Mila",
          raza: "Cocker Spaniel",
          color: "Marrón",
          vacunado: false,
          edad: 4,
          sexo: "Hembra",
          peso: 14,
          altura: 38,
          tipoPelaje: "Largo",
          ultimaConsulta: new Date("2024-07-20"),
          nombreDueño: "Laura Castillo"
        },
        {
          nombre: "Toby",
          raza: "Dálmata",
          color: "Blanco y Negro",
          vacunado: true,
          edad: 6,
          sexo: "Macho",
          peso: 28,
          altura: 60,
          tipoPelaje: "Corto",
          ultimaConsulta: new Date("2024-09-05"),
          nombreDueño: "Diego Herrera"
        },
        {
          nombre: "Chispa",
          raza: "Chihuahua",
          color: "Café Claro",
          vacunado: false,
          edad: 2,
          sexo: "Hembra",
          peso: 3,
          altura: 20,
          tipoPelaje: "Corto",
          ultimaConsulta: new Date("2024-08-25"),
          nombreDueño: "Sofía Castro"
        }
      ];

Mascota.insertMany(mascotas)

      
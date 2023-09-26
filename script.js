import Moto from "./moto.js"
import Gpu from "./gpu.js"

const nuevaMoto = new Moto();
nuevaMoto.setMarca("Honda");

const colorMoto = new Moto();
colorMoto.setColor("Negro");


const asus = new Gpu();
asus.setFabricante("ASUS");

const nuevoModelo = new Gpu();
nuevoModelo.setModelo("rtx-3070");

console.table(nuevaMoto.getMarca());
console.table(colorMoto.getColor());
console.table(asus.getFabricante());

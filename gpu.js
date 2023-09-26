class Gpu {

    #fabricante = "ninguno";
    #modelo = "ninguno";

    setFabricante(fabricante) {
        this.#fabricante = fabricante;

    }

    getFabricante() {
        return this.#fabricante;

    }
    setModelo(modelo) {
        this.#modelo = modelo;
    }
    getModelo() {
        return this.#modelo;
    }
}

export default Gpu
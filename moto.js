class Moto {

    #marca = "ninguna";
    #colorPrincipal = "elegir";

    setMarca(marca) {
        this.#marca = marca;

    }

    getMarca() {
        return this.#marca;

    }
    setColor(colorMoto) {
        this.#colorPrincipal = colorMoto;
    }
    getColor() {
        return this.#colorPrincipal;

    }

}
export default Moto;
export class ItemClass {

  /**
   * Imagen del item.
   */
  image: any

  /**
   * Nombre del item
   */
  name: string

  /**
   * Descripción de las características del item de cara a la explicación en texto.
   */
  description: string

  /**
   * Flag para indicar si el jugador puede utilizar el item.
   * Por ejemplo una espada puede utilizarse, mientras que un armario no.
   */
  isInventariable: Boolean

  constructor(name: string, description: string, isInventariable: Boolean) {

    this.name = name
    this.description = description
    this.isInventariable = isInventariable
  }
}
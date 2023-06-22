import { ItemClass } from './ItemClass'

export class FurnitureClass extends ItemClass {
  /**
   * Lista de objetos que pueden estar contenidos dentro de este. Una mesa puede tener encima una llave.
   */
  containedItems: Array<ItemClass>[]

  constructor(
    containedItems: Array<ItemClass>[],
    name: string,
    description: string,
    isInventariable: Boolean
  ) {
    super(name, description, isInventariable)
    this.containedItems = containedItems
  }
}

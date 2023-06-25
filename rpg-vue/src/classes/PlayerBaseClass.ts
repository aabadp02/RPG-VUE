import { ItemClass } from './ItemClass'

export class PlayerBaseClass {
  currentHealthPoints: number

  maxHealthPoints: number

  inventory: Array<ItemClass>[]

  position: Array<number>[2]

  isAlive: boolean

  constructor(
    currentHealthPoints: number,
    maxHealthPoints: number,
    inventory: Array<ItemClass>[],
    position: Array<number>[2],
    isAlive: boolean
  ) {
    this.currentHealthPoints = currentHealthPoints
    this.maxHealthPoints = maxHealthPoints
    this.inventory = inventory
    this.position = position
    this.isAlive = isAlive
  }
}

import { ItemClass } from './ItemClass'

export class WeaponClass extends ItemClass {
  
  /**
   * Cantidad de daño que provoca el arma 
   */
  attack: number

  /**
   * Cantidad de defensa que otorga. Una espada puede otorgar cierta cantidad de defensa ya que se puede bloquear con ella.
   */
  defense: number

  constructor(attack: number, defense: number, name: string, description: string, isInventariable: Boolean) {
    
    super(name, description, isInventariable)
    this.attack = attack
    this.defense = defense
  }
}

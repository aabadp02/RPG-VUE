import type { EnumTiposCasilla } from '@/constants/EnumTiposCasilla'
import type { ItemClass } from './ItemClass'

/**
 * @author: santi
 *
 * Clase que representa las posiciones del mapa con las que el jugador podrá interactuar, ya sea moviéndose
 * o haciendo uso de lo que contengan (si por ejemplo en una casilla hay un objeto)
 */
export class CasillaClass {
  /**
   * Clasificador de la casilla que nos dará información sobre la misma para que el jugador sepa qué interacciones puede tener con ella.
   * Por ejemplo: no podrá pasar por una casilla de tipo obstáculo
   */
  tipoCasilla: EnumTiposCasilla

  /**
   * Parámetro que determina si la casilla ya sido vista por el jugador para mostrar la imagen del elemento que contiene
   */
  isRevealed: boolean

  image?: any

  /**
   * Representa un objeto contenido en la casilla. Es opcional, ya que no todas las casillas tendrán items.
   */
  item?: ItemClass

  constructor(isRevealed: boolean, tipoCasilla: EnumTiposCasilla, image?: any, item?: ItemClass) {
    this.isRevealed = isRevealed
    this.tipoCasilla = tipoCasilla
    this.image = image
    this.item = item
  }
}

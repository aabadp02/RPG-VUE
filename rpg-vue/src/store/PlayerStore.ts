import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { PlayerBaseClass } from '../classes/PlayerBaseClass'

export const usePlayerBaseStore = defineStore('PlayerBaseStore', () => {
  let player: PlayerBaseClass

  /**
   * Sumamos la cantidad pasada por parámetro a la vida del jugador. En caso de que al sumar dicha cantidad,
   * se supere el máximo de vida, le ponemos el máximo.
   * Si te chupas una pocion a full vida te jodes
   */
  function increaseHealthPoints(amount: number) {
    player.currentHealthPoints += amount

    if (player.currentHealthPoints > player.maxHealthPoints) {
      player.currentHealthPoints = player.maxHealthPoints
    }
  }

  /**
   * Restamos la cantidad pasada por parámetro a la vida del jugador.
   * En caso de que al restar acabe en 0 o menos, pondremos el estado del jugador como muerto.
   */
  function decreaseHealthPoints(amount: number) {
    player.currentHealthPoints -= amount

    if (player.currentHealthPoints <= 0) {
      player.isAlive = false
    }
  }

  /**
   * Función para atacar
   */
  function attack() {
    

    
  }
})

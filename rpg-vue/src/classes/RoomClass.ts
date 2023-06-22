import { EnumTiposCasilla } from '@/constants/EnumTiposCasilla'
import { CasillaClass } from './CasillaClass'

export class RoomClass {
  /**
   * Número filas
   */
  rows: number

  /**
   * Número de columnas
   */
  columns: number

  /**
   * Matriz representa el espacio de la room, por donde se podrá mover el jugador
   */
  maze: CasillaClass[][]

  constructor(width: number, height: number) {
    this.rows = width
    this.columns = height
    this.maze = []

    for (var i: number = 0; i < this.rows; i++) {
      this.maze[i] = []
      for (var j: number = 0; j < this.columns; j++) {
        this.maze[i][j] = new CasillaClass(false, EnumTiposCasilla.SUELO)
      }
    }

    this.maze = this.crearLimitesAlrededor(this.maze, this.columns, this.rows)
  }

  crearLimitesAlrededor(matrix: CasillaClass[][], height: number, width: number) {
    matrix.forEach((fila, index) => {
      if (index == 0 || index == height - 1) {
        fila.forEach((value, index) => {
          fila[index] = new CasillaClass(false, EnumTiposCasilla.OBSTACULO)
        })
      } else {
        fila[0] = new CasillaClass(false, EnumTiposCasilla.OBSTACULO)
        fila[width - 1] = new CasillaClass(false, EnumTiposCasilla.OBSTACULO)
      }
    })
    return matrix
  }
}

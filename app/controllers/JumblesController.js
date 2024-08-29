import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"

export class JumblesController {

  constructor() {
    console.log(`Jumbles controller is live `)

    this.drawJumbles()
  }


  drawJumbles() {
    const jumbles = AppState.jumbles
    let JumblesHTML = ``
    jumbles.forEach(jumble => JumblesHTML += jumble.JumbleHTMLTemplate)
    setHTML(`jumblesList`, JumblesHTML)
  }

}
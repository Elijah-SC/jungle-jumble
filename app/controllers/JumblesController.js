import { AppState } from "../AppState.js"
import { setHTML } from "../utils/Writer.js"
import { getFormData } from "../utils/FormHandler.js"
import { jumblesService } from "../services/jumblesService.js"
export class JumblesController {

  constructor() {
    console.log(`Jumbles controller is live `)
    AppState.on('jumbles', this.drawJumbles)
    this.drawJumbles()
  }


  drawJumbles() {
    const jumbles = AppState.jumbles
    let JumblesHTML = ``
    jumbles.forEach(jumble => JumblesHTML += jumble.JumbleHTMLTemplate)
    setHTML(`jumblesList`, JumblesHTML)
  }

  createJumbles() {
    event.preventDefault()
    console.log('creating jumble');
    const jumblesForm = event.target
    const jumblesFormData = getFormData(jumblesForm)

    jumblesService.createJumbles(jumblesFormData);


  }

}
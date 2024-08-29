import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumbles.js"

class JumblesService {


  createJumbles(jumblesFormData) {
    const jumblesData = AppState.jumbles
    const newJumblesData = new Jumble(jumblesFormData)
    jumblesData.push(newJumblesData)

  }

}

export const jumblesService = new JumblesService()
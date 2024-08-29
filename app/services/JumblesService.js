import { AppState } from "../AppState.js"
import { Jumble } from "../models/Jumbles.js"

class JumblesService {

  setActiveJumble(jumblesId) {
    const jumble = AppState.jumbles
    const foundJumble = jumble.find(jumble => jumble.id == jumblesId)
    // console.log(`current active jumble`, AppState.activeJumble)
    AppState.activeJumble = foundJumble
    // console.log(`new active jumble`, AppState.activeJumble)

  }


  createJumbles(jumblesFormData) {
    const jumblesData = AppState.jumbles
    const newJumblesData = new Jumble(jumblesFormData)
    jumblesData.push(newJumblesData)

  }

}

export const jumblesService = new JumblesService()
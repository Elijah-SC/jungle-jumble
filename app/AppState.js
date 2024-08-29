import { Jumble } from "./models/Jumbles.js"
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {


  /**@type {Jumble[]} */
  jumbles = [

  ]


  /**@type {Jumble} */
  activeJumble = null
}

export const AppState = createObservableProxy(new ObservableAppState())
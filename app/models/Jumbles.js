import { generateId } from "../utils/GenerateId.js"

export class Jumble {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.body = data.body
    // to best keep track of the fastest times you might want these properties too! They would start null cause no one has completed these yet.
    this.fastestTime = null
    this.startTime = null
    this.endTime = null
  }



  get JumbleHTMLTemplate() {
    return `<div class="d-flex justify-content-evenly align-items-center m-3">
            <button>Start</button>
            <p class="">${this.name}</p> <span><i class="mdi mdi-timer"></i> 34 seconds</span> <span>55 wpm</span>
          </div>`
  }
}

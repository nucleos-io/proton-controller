'use strict'

/**
 *
 */
module.exports = class ProtonController {
  constructor(app) {

    if (!app.controllers) {
      throw new Error('The app should have a controllers object')
    }

    app.controllers[this.name] = this
    this.app = app
    if (this.isGlobal()) {
      global[this.name] = this
    }

  }

  isGlobal() {
    return true
  }

  get name() {
    return this.constructor.name
  }
}

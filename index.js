'use strict'

/**
 * Base Controller
 * Inherit of this class for create controllers
 */
module.exports = class ProtonController {

  constructor(proton) {
    this.app = proton.app
    this._bindToApp()
    this.expose()
  }

  /**
   * @return class name
   */
  get name() {
    return this.constructor.name
  }

  /**
   * @description Expose this controller globally,
   * Overwrite and return false for not expose the controller
   *
   * @return true | false
   */
  expose() {
    global[this.name] = this
    return true
  }

  /**
   * @description Bind this controller to the app.controllers objects
   */
  _bindToApp() {
    this.app.controllers[this.name] = this
  }

}

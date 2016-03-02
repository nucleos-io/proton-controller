'use strict'

/**
 * @class
 * @classdesc this class define a proton controller
 * @author Luis Hernandez
 */
class ProtonController {

  constructor(proton) {
    this.proton = proton
  }

  expose(controller) {
    global[this.name] = (!controller) ? this : controller
  }

  get name() {
    return this.constructor.name
  }

  set fileName(fileName) {
    this.fileName = fileName
  }
}

module.exports = ProtonController

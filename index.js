'use strict'


const Gluon = require('proton-gluon')

/**
 * Base Controller
 * Inherit of this class for create controllers
 */
module.exports = class ProtonController extends Gluon {

  constructor(proton) {
    super(proton)
  }

  _bindToApp() {
    this.proton.app.controllers[this.name] = this
  }

}

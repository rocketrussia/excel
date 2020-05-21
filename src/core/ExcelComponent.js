import {DomListener} from '@core/DomListener';

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.unsubscirbers = []

    this.prepare()
  }
  // Setup component before init
  prepare() {}

  // Return component template
  toHTML() {
    return ''
  }

  // Notify listeners about event
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Subscribe to event
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscirbers.push(unsub)
  }

  // Init component, add listeners
  init() {
    this.initDOMListeners()
  }

  // Delete component, clear listeners
  destroy() {
    this.removeDOMListeners()
    this.unsubscirbers.forEach(unsub => unsub())
  }
}

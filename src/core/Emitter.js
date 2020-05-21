export class Emitter {
  constructor() {
    this.listeners = {}
  }

  // dispatch, fire, trigger
  // Notify listeners if they exist
  // table.emit('table:select', {a: 1})
  emit(eventName, ...args) {
    if (!Array.isArray(this.listeners[eventName])) {
      return false
    }
    this.listeners[eventName].forEach(listener => {
      listener(...args)
    })
    return true
  }

  // on, listen
  // Subscribe on notify or add new listener
  // formula.subscribe('table:select', () => {})
  subscribe(eventName, fn) {
    this.listeners[eventName] = this.listeners[eventName] || []
    this.listeners[eventName].push(fn)
    return () => {
      this.listeners[eventName] =
        this.listeners[eventName]
            .filter(listener => listener !== fn)
    }
  }
}

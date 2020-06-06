import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import {changeTitle} from '@/redux/actions'
import {defaultTitle} from '@/constants'
import {debounce} from '@core/utils'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input'],
      ...options,
    })
  }

  prepare() {
    this.onInput = debounce(this.onInput, 300)
  }

  toHTML() {
    const title = this.store.getState().title || defaultTitle
    return `
        <div class="header__left-block">

          <img class="logo" src="logo.ico" alt="Simple Excel" width="24">
          
          <input type="text" class="left-block__title-input" value="${title}">

        </div>
        
        <div>
          
          <div class="header__right-block">
            <div class="button">
              <span class="material-icons white">
                delete
              </span>
            </div>

            <div class="button">
              <span class="material-icons white">
                exit_to_app
              </span>
            </div>
          </div>

        </div>
`
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}

import {ExcelComponent} from '@core/ExcelComponent'
import {$} from '@core/dom'
import {changeTitle} from '@/redux/actions'
import {defaultTitle} from '@/constants'
import {debounce} from '@core/utils'
import {ActiveRoute} from '@core/routes/ActiveRoute';

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      listeners: ['input', 'click'],
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
          <a href="/" style="text-decoration: none">
          <img class="logo" src="logo.ico" alt="Simple Excel" width="24">
          </a>
          <input type="text" class="left-block__title-input" value="${title}">

        </div>
        
        <div>
          
          <div class="header__right-block">
            <div class="button" data-button="remove">
              <span class="material-icons white" data-button="remove">
                delete
              </span>
            </div>

            <div class="button" data-button="exit">
              <span class="material-icons white" data-button="exit">
                exit_to_app
              </span>
            </div>
          </div>

        </div>
`
  }

  onClick(event) {
    const $target = $(event.target)

    if ($target.data.button === 'remove') {
      const decision = confirm('Do you want delete this table?')

      if (decision) {
        localStorage.removeItem('excel:' + ActiveRoute.param)
        ActiveRoute.navigate('')
      }
    } else if ($target.data.button === 'exit') {
      ActiveRoute.navigate('')
    }
  }

  onInput(event) {
    const $target = $(event.target)
    this.$dispatch(changeTitle($target.text()))
  }
}

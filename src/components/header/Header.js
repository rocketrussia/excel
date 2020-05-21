import {ExcelComponent} from '@core/ExcelComponent'

export class Header extends ExcelComponent {
  static className = 'excel__header'

  constructor($root, options) {
    super($root, {
      name: 'Header',
      ...options
    });
  }

  toHTML() {
    return `
        <div class="header__left-block">

          <img class="logo" src="logo.ico" alt="Simple Excel" width="24">
          
          <input type="text" class="left-block__title-input" value="New Table">

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
}

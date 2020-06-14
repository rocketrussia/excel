import {storage} from '@core/utils'

export function toHTML(key) {
  const model = storage(key)
  const id = key.split(':')[1]
  return `
    <li class="list__record">
            <img 
              class="icon-margin" 
              src="favicon.ico" 
              width="24px" 
              height="24px" 
              alt="Table"
            >
            <a href="#excel/${id}">${model.title}</a>
            <strong class="push-right">
                ${new Date(model.lastOpenedDate).toLocaleDateString()}
                ${new Date(model.lastOpenedDate).toLocaleTimeString()}
            </strong>
    </li>
  `
}

function getAllKeys() {
  const keys = []
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (!key.includes('excel')) {
      continue
    }
    keys.push(key)
  }
  return keys
}

export function createRecordsTable() {
  const keys = getAllKeys()
  if (!keys.length) {
    return `
    <p style="text-align: center">Sorry, but You not create no one table</p>
    `
  }
  return `
    <div class="table__list-header">
      <span>Table Name</span>
      <span>Last opened</span>
    </div>

    <div class="table__list">
      ${keys.map(toHTML).join('')}
    </div>
  `
}

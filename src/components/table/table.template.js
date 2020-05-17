const CODES = {
  A: 65,
  Z: 90
}

function toCell(_, col) {
  // TODO: selected
  return `
    <div class="data__cell" contenteditable="true" data-col="${col}">
        ${''}
    </div>
  `
}

function toColumn(col, index) {
  return `
    <div class="data__column" data-type="resizable" data-col="${index}">
        ${col}
        <div class="column__resize" data-resize="col"></div>
    </div>
  `
}

function createRow(index, content) {
  const resize = index ?
    `<div class="row__resize" data-resize="row"></div>` :
    ''
  return `
    <div class="table__row" data-type="resizable">
      <div class="row__info">
        ${index ? index : ''}
        ${resize}
      </div>
      <div class="row__data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1 // Compute cols count
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(toChar)
      .map(toColumn)
      .join('')

  rows.push(createRow(null, cols))

  for (let i = 0; i < rowsCount; i++) {
    const cells = new Array(colsCount)
        .fill('')
        .map(toCell)
        .join('')

    rows.push(createRow(i + 1, cells))
  }
  return rows.join('')
}

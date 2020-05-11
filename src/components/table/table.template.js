const CODES = {
  A: 65,
  Z: 90
}

function toCell(cell) {
  // TODO: selected
  return `
    <div class="data__cell" contenteditable="true">${cell}</div>
  `
}

function toColumn(col) {
  return `
    <div class="data__column">${col}</div>
  `
}

function createRow(index, content) {
  return `
    <div class="table__row">
      <div class="row__info">${index ? index : ''}</div>
      <div class="row__data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowsCount = 40) {
  const colsCount = CODES.Z - CODES.A
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

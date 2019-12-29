import { range as _range, head, tail } from 'lodash'

export const closest = (arr, n) => {
  return arr.reduce((prev, curr) => {
    return Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev
  })
}

export const range = (start = 0, end, step = 1) => {
  return _range(start, end + 1, step)
}

export const transpose = (arr, n) => {
  return arr.map(e => {
    const h = head(e) + n
    return [h, ...tail(e)]
  })
}

export const repeat = (arr, n) => {
  if (n < 2) {
    return arr
  } else {
    return Array(n)
      .fill(arr)
      .flat(1)
  }
}

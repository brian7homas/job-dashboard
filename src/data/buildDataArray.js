export const builDataArray = (count, arr) => {
  for (const [key, value] of Object.entries(count)) arr.push({ 'name': key, 'value': value })
}
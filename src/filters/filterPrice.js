export default function filterPrice (val) {
  val = parseFloat(val)
  return val.toFixed(2) + ' руб.'
}
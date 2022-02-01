
export default function RenderDropdownItem(item) {
  return <option value={`${item.i + 1}`}>{item.item}</option>;
}

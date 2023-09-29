import { useSnapshot } from 'valtio'
import state from '../store'
import { SketchPicker } from 'react-color'

const ColorPicker = () => {
  const snap = useSnapshot(state)

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        onChange={(color) => (state.color = color.hex)}
        disableAlpha
      />
    </div>
  )
}

export default ColorPicker

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-svg-core'
import { icon } from '../core/icon'

interface Props {
  prefix?: IconPrefix | 'fa-brands'
  name: IconName
  size: number
}

export const Icon = ({ prefix, name, size }: Props) => {
  const customIcon = icon({ prefix: prefix as any, iconName: name })

  if (!customIcon?.html || !customIcon?.html?.length) {
    throw new Error(`Could not find icon ${prefix} ${name}`)
  }

  return (
    <div
      html={customIcon.html[0]}
      style={`min-width: ${size * 0.7}px; min-height: ${size * 0.7}px;max-width: ${size}px; max-height: ${size}px;`}
    />
  )
}

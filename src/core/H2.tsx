interface Props {
  children?: any
  color?: string
}

export const H2 = ({ children, color }: Props) => {
  return (
    <h2
      class={`${color || 'text-emerald-500'} text-4xl sm:text-5xl font-light block text-center sm:text-left p-0 mb-4`}
    >
      {children}
    </h2>
  )
}

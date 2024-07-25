import { ComponentPropsWithRef, forwardRef } from 'react'

export type BoxProps = ComponentPropsWithRef<'div'>

export const Box = forwardRef<HTMLDivElement, BoxProps>(function Box({ ...props }, ref) {
  return <div ref={ref} {...props} />
})

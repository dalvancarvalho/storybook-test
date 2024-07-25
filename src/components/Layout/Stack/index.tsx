import { Box, BoxProps } from '@/components'
import { cn } from '@/utils'

type StackProps = BoxProps

export function Stack({ className, ...props }: StackProps) {
  return <Box className={cn('flex flex-col items-start', className)} {...props} />
}

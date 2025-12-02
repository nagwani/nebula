import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const baseStyles = {
  disable: 'disabled:pointer-events-none disabled:opacity-50',
  focus:
    'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:no-underline focus-visible:outline-primary-500 focus-visible:rounded-lg focus-visible:border-transparent',
  svg: '[&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
}

const buttonVariants = cva(
  cn(
    'gap-2 rounded-lg px-4 py-3 text-sm font-medium inline-flex cursor-pointer items-center justify-center whitespace-nowrap transition-colors',
    baseStyles.disable,
    baseStyles.focus,
    baseStyles.svg
  ),
  {
    variants: {
      variant: {
        Solid:
          'border border-transparent bg-primary-600 text-white hover:bg-primary-700 focus:bg-primary-700 active:bg-primary-800',
        'Outline Dark':
          'border border-primary-600 text-primary-600 hover:border-primary-800 hover:bg-primary-100 hover:text-primary-800 focus:border-primary-800 focus:bg-primary-100 focus:text-primary-800 active:border-primary-900 active:bg-primary-200 active:text-primary-900',
        'Outline Light':
          'border border-white text-white hover:border-gray-300 hover:bg-gray-800 focus:border-gray-300 focus:bg-gray-800 active:border-gray-400 active:bg-gray-700',
        Ghost:
          'border border-transparent text-primary-600 hover:bg-primary-100 hover:text-primary-800 focus:bg-primary-100 focus:text-primary-800 active:bg-primary-200 active:text-primary-900',
        'Ghost Neutral':
          'border border-transparent text-gray-600 hover:bg-gray-200 hover:text-gray-800 focus:bg-gray-200 focus:text-gray-800 active:bg-gray-300 active:text-gray-900',
        'Ghost Light':
          'border border-transparent text-white hover:border-gray-300 hover:bg-gray-800 focus:border-gray-300 focus:bg-gray-800 active:border-gray-400 active:bg-gray-700',
        Link: 'p-0 text-primary-600 hover:text-primary-800 hover:underline hover:underline-offset-2 focus:text-primary-800 active:text-primary-900',
        'Link Underline':
          'p-0 text-gray-900 underline underline-offset-3 hover:text-primary-600 focus:text-primary-600 active:text-primary-800',
        'Link Dark':
          'p-0 text-gray-900 hover:text-primary-600 hover:underline hover:underline-offset-3 focus:text-primary-600 active:text-primary-800',
        'Link Light':
          'p-0 text-white hover:text-primary-200 hover:underline hover:underline-offset-3 focus:text-primary-200 active:text-primary-300',
        'Nav Link Dark':
          'md:px-1 md:py-3 rounded-none border-s-0 border-transparent hover:border-primary-600 hover:text-primary-600 focus:border-primary-600 focus:text-primary-600 active:border-primary-800 active:text-primary-800',
      },
    },
    defaultVariants: {
      variant: 'Solid',
    },
  }
)

const Button = ({
  text = '',
  children = '',
  className = '',
  link = '#',
  variant,
  ...props
}) => {
  return (
    <a
      className={cn(buttonVariants({ variant }), className)}
      href={link}
      {...props}
    >
      {text}
      {children}
    </a>
  )
}

export default Button
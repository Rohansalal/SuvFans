"use client"

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cn } from "@/lib/utils"

const Form = ({ className, ...props }: React.FormHTMLAttributes<HTMLFormElement>) => (
  <form className={cn("space-y-6", className)} {...props} />
)

const FormField = ({
  control,
  name,
  render,
}: {
  control?: any
  name: string
  render: (props: { field: any }) => React.ReactElement
}) => {
  const [field, setField] = React.useState({ value: "", onChange: () => {} })
  
  React.useEffect(() => {
    if (control) {
      const subscription = control.register(name)
      setField({ value: "", onChange: subscription.onChange })
      return () => subscription.unsubscribe?.()
    }
  }, [control, name])
  
  return render({ field: { name, value: field.value, onChange: field.onChange, onBlur: () => {} } })
}

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("space-y-2", className)} {...props} />
  )
})
FormItem.displayName = "FormItem"

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <LabelPrimitive.Root
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      {...props}
    />
  )
})
FormLabel.displayName = "FormLabel"

const FormControl = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => {
  return <div ref={ref} {...props} />
})
FormControl.displayName = "FormControl"

const FormMessage = ({
  error,
}: {
  error?: { message?: string }
}) => {
  if (!error?.message) return null
  return (
    <p className="text-xs text-red-500 font-medium">
      {error.message}
    </p>
  )
}

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
}

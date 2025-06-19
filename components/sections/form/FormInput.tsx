import type React from "react"

interface FormInputProps {
  id: string
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  pattern?: string
  minLength?: number
  children?: React.ReactNode
  helpText?: string
  helpId?: string
  icon?: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>
  className?: string
}

export const FormInput = ({
  id,
  name,
  type = "text",
  placeholder,
  required = false,
  pattern,
  minLength,
  children,
  label,
  helpText,
  helpId,
  icon: Icon,
  className,
}: FormInputProps) => {
  // Embedded styles for maximum modularity
  const styles = {
    container: "space-y-2",
    label: "text-sm font-medium text-gray-700",
    required: "text-red-500",
    group: "relative group",
    icon: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 transition-all duration-300 group-focus-within:text-gosholo-primary group-focus-within:scale-110",
    input: {
      base: "w-full px-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-primary focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base",
      withIcon:
        "w-full pl-10 pr-3 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-primary focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base",
      withPasswordToggle:
        "w-full pl-10 pr-12 py-3 sm:py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gosholo-primary focus:border-transparent transition-all duration-300 hover:border-gosholo-light-blue text-base",
    },
    helpText: "text-xs text-gray-500",
  }

  // Auto-determine the appropriate input style based on props
  const getInputClassName = () => {
    if (className) return className // Use custom className if provided

    if (Icon && children) return styles.input.withPasswordToggle // Icon + children (password toggle)
    if (Icon) return styles.input.withIcon // Just icon
    return styles.input.base // Default
  }

  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.label}>
        {label}{" "}
        {required && (
          <span className={styles.required} aria-label="Required">
            *
          </span>
        )}
      </label>
      <div className={Icon ? styles.group : undefined}>
        {Icon && <Icon className={styles.icon} aria-hidden={true} />}
        <input
          type={type}
          id={id}
          name={name}
          className={getInputClassName()}
          placeholder={placeholder}
          required={required}
          aria-required={required}
          pattern={pattern}
          minLength={minLength}
          aria-describedby={helpId}
        />
        {children}
      </div>
      {helpText && (
        <p id={helpId} className={styles.helpText}>
          {helpText}
        </p>
      )}
    </div>
  )
}

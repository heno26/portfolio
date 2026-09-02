import "./Button.css";

/**
 * Polymorphic button: renders an <a> when `href` is provided (internal
 * anchor or external link), otherwise a native <button>.
 */
export default function Button({
  as,
  href,
  external,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "trailing",
  disabled = false,
  className = "",
  children,
  ...rest
}) {
  const classes = ["btn", `btn-${variant}`, `btn-${size}`, className].filter(Boolean).join(" ");

  const content = (
    <>
      {Icon && iconPosition === "leading" && <Icon size={16} aria-hidden="true" />}
      <span>{children}</span>
      {Icon && iconPosition === "trailing" && <Icon size={16} aria-hidden="true" />}
    </>
  );

  if (disabled) {
    return (
      <span className={classes} aria-disabled="true" data-disabled="true">
        {content}
      </span>
    );
  }

  if (href) {
    const externalProps = external
      ? { target: "_blank", rel: "noopener noreferrer" }
      : {};
    return (
      <a className={classes} href={href} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  const Component = as || "button";
  return (
    <Component className={classes} {...rest}>
      {content}
    </Component>
  );
}

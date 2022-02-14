type Props={
  onClick?: any,
  icon: React.ReactElement,
  label?: string,
  className?: string,
  classNameLabel?: string,
}

const IconButton: React.FC<Props> = ({
  onClick,
  icon,
  label,
  className,
  classNameLabel,
}:Props): React.ReactElement =>{
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {icon}
      {label && <span className={classNameLabel}>{label}</span>}
    </button>
  )
}

export default IconButton;
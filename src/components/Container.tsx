import "../stylesheets/layout/container.scss";
type Props = {
  children: React.ReactNode,
}

const Container: React.FC<Props> = ({
  children,
}:Props):React.ReactElement =>{
  return(
    <div className="container">
      {children}
    </div>
  )
} 

export default Container;
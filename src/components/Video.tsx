type Props = {
  type: string,
  videoId: string,
  title: string,
  className?: string,
}

const Video: React.FC<Props> =({
  type,
  videoId,
  title,
  className,
}): React.ReactElement =>{
  return (
    <div>
      {type === "youtube" && <iframe 
        title={title}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encryted-media; gyroscope; picture-in-picture"
        allowFullScreen 
        className={className}
      />}
    </div>
  );

}
  

export default Video;
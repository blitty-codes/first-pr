interface imageProps {
  url: string;
}

const Avatar = ({ url }: imageProps) => <img src={url} className="m-auto" width={150} height={150} />;

export default Avatar;
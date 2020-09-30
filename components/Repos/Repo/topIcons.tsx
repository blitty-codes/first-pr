import CommentIcon from "icons/comment";
import StarIcon from "icons/star";

interface topIconProps {
  stars: number;
  comments: string;
}

const TopIcons = ({stars, comments}: topIconProps) => {
  return (
    <>
      <div className="inline-block m-auto mr-5">
        <div className="w-min-0 m-auto border-2 border-gray-600 border-opacity-25 rounded">
          <StarIcon width={30} height={30} />
        </div>
        <p className="text-sm text-xl text-center">{stars}</p>
      </div>
      <div className="inline-block m-auto">
        <div className="w-min-0 m-auto border-2 border-gray-600 border-opacity-25 rounded">
          <CommentIcon width={30} height={30} />
        </div>
        <p className="text-sm text-xl text-center">{comments}</p>
      </div>
    </>
  );
};

export default TopIcons;
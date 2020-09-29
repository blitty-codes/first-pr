import StarIcon from 'icons/star';
import CommentIcon from 'icons/comment';
import HomeSiteIcon from 'icons/homeSite';

interface RepoProps {
  title: string;
  createdBy: string;
  description: string;
  homepage: string;
  stars: number;
  comments: string;
  avatar_owner: string;
  has_wiki: boolean;
}

const Repo = ({
  title,
  createdBy,
  description,
  homepage,
  stars,
  comments,
  avatar_owner,
  has_wiki,
}: RepoProps) => (
  <div className="xl:w-1/3 lg:w-1/3 ms:w-full md:w-full p-5 mr-4 ml-4 mb-8 border-2 border-gray-600 border-opacity-25 rounded shadow-lg ">
    <div className="w-auto">
      <div className="relative top-info">
        <div className="inline-block m-auto w-auto p">
          <div className="border-2 border-gray-600 border-opacity-25 rounded">
            <StarIcon width={30} height={30} />
          </div>
          <p className="text-sm text-2xl text-center">{stars}</p>
        </div>
        <div className="inline-block m-auto">
          <div className="border-2 border-gray-600 border-opacity-25 rounded">
            <CommentIcon width={30} height={30} />
          </div>
          <p className="text-sm text-2xl text-center">{comments}</p>
        </div>
      </div>
      <div className="border p-2 border-gray-400 border-opacity-25 rounded">
        <div className="mb-6">
          <h1 className="text-4xl text-center text-gray-800 font-bold focus:text-blue-600">
            {title}
          </h1>
          <hr />
        </div>
        <div className="grid grid-cols-2 grid-flow-col gap-2">
          <div className="row-span-3 p-2">
            <div className="overflow-auto break-all">
              <h5 className="font-bold">Descrition</h5>
              <h5 className="ml-2 pb-1">{description}</h5>
            </div>
            <h3 className="font-bold">Created</h3>
            <h3 className="ml-2">
              <a href={`https://github.com/${createdBy}`}>{createdBy}</a>
            </h3>
          </div>
          <div className="row-span-2 col-span-2 overflow-auto break-word">
            <div className="">
              <img src={avatar_owner} />
            </div>
            <div className="mt-4">
              <a href={homepage} target="_blanck" className="flex flex-row">
                <HomeSiteIcon width={20} height={20} />{" "}
                <p className="w-min-0 text-base align-top font-bold">
                  homepage
                </p>
              </a>
            </div>
            <div>Wiki: {has_wiki ? "Yes" : "No"}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Repo;

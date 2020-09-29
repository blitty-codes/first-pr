interface RepoProps {
  title: string;
  createdBy: string;
  shortDescription: string;
  score: number;
  // link: string;
}
// the link is generated with the title and createdBy
// https://github.com/${createdBy}/${title}

const Repo = ({ title, createdBy, shortDescription, score }: RepoProps) => (
  <div className="xl:w-1/4 lg:w-1/4 ms:w-full md:w-full p-5 mr-4 ml-4 mb-8 border-2 border-gray-600 border-opacity-25 rounded shadow-lg overflow-auto break-all">
    <div className="h-full border p-2 border-gray-400 border-opacity-25 rounded">
      <div className="mb-6">
        <h1 className="text-4xl text-center text-gray-800 font-bold">
          <a href={`https://github.com/${createdBy}/${title}`}>
            {title.toUpperCase()}
          </a>
        </h1>
        <hr />
      </div>
      <h3 className="font-bold">
        Created
      </h3>
      <h3 className="ml-2">
        <a href={`https://github.com/${createdBy}`}>{createdBy}</a>
      </h3>
      <h5 className="font-bold">
        Descrition
      </h5>
      <h5 className="ml-2 pb-1">
        {shortDescription}
      </h5>
      <div className="inline-block pb-2">
        <p className="text-sm align-text-bottom">Score: {score}</p>
      </div>
    </div>
  </div>
)

export default Repo;

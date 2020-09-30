import TopIcons from 'components/Repos/Repo/topIcons'
import Title from './title';
import Avatar from './image';
import HomePage from './homepage';
import React from 'react';
import Description from './description';
import Creator from './creator';

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
  <div className="xl:w-2/5 lg:w-2/5 ms:w-full md:w-full p-5 mr-4 ml-4 mb-8 border-2 border-gray-600 border-opacity-25 rounded shadow-lg ">
    <div>
      <div className="relative onTop">
        <TopIcons stars={stars} comments={comments} />
      </div>
      <div className="border block p-2 border-gray-400 border-opacity-25 rounded">
        <div className="mb-6">
          <Title text={title} />
        </div>
        <div className="flow-root">
          <div className="float-right ml-4 my-2 h-150 pl-ms pb-ms">
            <div className="">
              <Avatar url={avatar_owner} />
            </div>
            <div className="mt-4">
              <HomePage website={homepage} />
            </div>
            <Creator userName={createdBy} />
            <div>Wiki: {has_wiki ? "Yes" : "No"}</div>
          </div>
          <Description text={description} />
        </div>
      </div>
    </div>
  </div>
);

export default Repo;

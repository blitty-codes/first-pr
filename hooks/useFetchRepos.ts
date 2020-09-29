import { useEffect, useMemo, useState } from 'react';
import useAppContext from './useAppContext';

const URL =
   'https://api.github.com/search/issues?q=label:%22good%20first%20issue%22+language:typescript+language:%22javascript%22+state:open&sort=created&order=desc';

const BASE_URL =
   'https://api.github.com/search/issues?q=label:%22good%20first%20issue%22';

const PAGINAION =
   'https://api.github.com/search/issues?q=stress+test+label:bug+language:python+state:closed&page=2';

const PER_PAGE =
   'https://api.github.com/search/issues?q=stress+test+label:bug+language:python+state:closed&per_page=100';

interface Request {
   items: Array<IssueInfo>;
}

interface IssueInfo {
   title: string;
   body: string;
   comments: string;
   repository_url: string;
}

interface Owner {
   avatar_url: string;
}

interface RepositoryInfo extends IssueInfo {
   stargazers_count: number;
   homepage?: string;
   has_wiki: boolean;
   owner: Owner;
}

const useFetchRepos = () => {
   const { state } = useAppContext();
   const [repos, setRepos] = useState<Array<RepositoryInfo>>([]);

   useEffect(() => {
      const getReposData = async () => {
         const fillUrl = state.lang.reduce(
            (acc, lang) => `+language:%22${lang}%22${acc}`,
            ''
         );

         const rawData = await fetch(
            `${BASE_URL}${fillUrl}+state:open&sort=created&order=desc`
         );

         const { items }: Request = await rawData.json();

         const populateItems: Array<RepositoryInfo> = await Promise.all(
            items.map(async (item) => {
               const rawData = await fetch(item.repository_url);
               const data: RepositoryInfo = await rawData.json();

               return {
                  title: item.title,
                  body: item.body,
                  comments: item.comments,
                  repository_url: item.repository_url,
                  owner: { avatar_url: data.owner.avatar_url },
                  homepage: data?.homepage,
                  has_wiki: data.has_wiki,
                  stargazers_count: data.stargazers_count,
               } as RepositoryInfo;
            })
         );

         setRepos(populateItems);
      };

      getReposData();
   }, [state.lang]);

   return { repos };
};

export default useFetchRepos;

import useFetchRepos from 'hooks/useFetchRepos';

import Repo from './Repo';

const Repos = () => {
   // mb-4
   const { repos } = useFetchRepos();
   let i = 0;

   console.log(repos);

   return (
     <section className="flex flex-wrap mt-8 ms:mt-10 md:mt-10 self-center">
       <Repo
         title="Issue issue #444"
         createdBy="World"
         description="Hello world, dfafsdafasfdsadfsafdsfd"
         homepage="https://IwI"
         stars={155}
         comments="555"
         avatar_owner="https://AvatarWorld"
         has_wiki={true}
       />
       {repos.map((repoInfo) => (
         <Repo
           key={i++}
           title={repoInfo.title}
           createdBy="NOMBRE USUARIO CREADOR"
           description={repoInfo.body}
           homepage={repoInfo.homepage}
           stars={repoInfo.stargazers_count}
           comments={repoInfo.comments}
           avatar_owner={repoInfo.owner.avatar_url}
           has_wiki={repoInfo.has_wiki}
         />
       ))}
     </section>
   );
};

export default Repos;

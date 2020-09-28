// import CloseIcon from '../../../icons/close.svg';

import CloseIcon from 'icons/close';

interface LanguageProps {
   name: string;
}

const Language = ({ name }: LanguageProps) => {
   return (
      <div className="bg-cool-gray-200 rounded p-2 mr-3 flex place-items-center">
         <p>{name}</p>
         <div className="pl-3">
            <div className="bg-purple-400 rounded-full p-1 cursor-pointer">
               <CloseIcon width={14} height={14} />
            </div>
         </div>
      </div>
   );
};

export default Language;

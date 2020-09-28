import CloseIcon from 'icons/close';

interface LanguageProps {
   name: string;
   removeLang: (lang: string) => void;
}

const Language = ({ name, removeLang }: LanguageProps) => {
   return (
      <div className="bg-cool-gray-200 rounded p-2 mr-3 mb-3 flex place-items-center">
         <p>{name}</p>
         <div className="pl-3">
            <div
               className="bg-purple-400 rounded-full p-1 cursor-pointer"
               onClick={() => removeLang(name)}
            >
               <CloseIcon width={14} height={14} />
            </div>
         </div>
      </div>
   );
};

export default Language;

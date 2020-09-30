interface descriptionProps {
  text: string;
}

const Description = ({ text }: descriptionProps) => (
  <>
    <h5 className="font-bold">Descrition</h5>
    <h5 className="break-words ml-2 pb-1">
      {text === "" ? "No description." : text}
    </h5>
  </>
);

export default Description;
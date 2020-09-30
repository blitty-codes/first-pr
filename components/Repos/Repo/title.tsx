interface titleProps {
  text: string;
}

const Title = ({text}: titleProps) => (
  <>
    <h1 className="text-4xl text-center text-gray-800 font-bold focus:text-blue-600">
      {text}
    </h1>
    <hr />
  </>
);

export default Title;
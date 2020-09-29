interface CloseIconProps {
   width?: number;
   height?: number;
}

const CloseIcon = ({ width, height }: CloseIconProps) => {
   return (
      <svg
         fill="none"
         stroke="currentColor"
         viewBox="0 0 24 24"
         xmlns="http://www.w3.org/2000/svg"
         width={width}
         height={height}
         style={{margin:"auto"}}
      >
         <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M6 18L18 6M6 6l12 12"
         ></path>
      </svg>
   );
};

export default CloseIcon;

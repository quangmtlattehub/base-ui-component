export default function InputAmount(props: {
  value: number;
  setValue: Function;
  className?: string;
}) {
  return (
    <div
      className={`flex w-[150px] h-[44px] flex-col items-start gap-[10px] rounded-[8px] border-[1px]  border-[rgba(255,255,255,0.14)] ${props.className}`}
    >
      <div className="flex justify-between items-center flex-[1_0_0] self-stretch">
        <i
          onClick={() => {
            if (props.value > 1) {
              props.setValue(props.value - 1);
            }
          }}
          className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-tl-[4px] rounded-br-none rounded-tr-none rounded-bl-[4px] bg-[rgba(255,_255,_255,_0.10)]  cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M5 12.5H19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
        <span className="text-[#FFF]  text-[16px] not-italic font-normal leading-[28px]">
          {props.value}
        </span>
        <i
          onClick={() => {
            props.setValue(props.value + 1);
          }}
          className="flex w-[44px] h-[44px] p-[10px] justify-center items-center rounded-tl-none rounded-br-[4px] rounded-tr-[4px] rounded-bl-none bg-[rgba(255,_255,_255,_0.10)] cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
          >
            <path
              d="M12 5.5V19.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M5 12.5H19"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </i>
      </div>
    </div>
  );
}

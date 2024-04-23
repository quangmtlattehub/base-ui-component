import clsx from "clsx";
import React from "react";
interface PaginationProps {
  pageCurrent: number;
  onChangePage: (page: number) => void;
  total: number;
}
function Pagination(props: PaginationProps) {
  const { pageCurrent, total, onChangePage } = props;
  return (
    <div className="flex items-center justify-center gap-x-4 flex-wrap gap-y-4 relative z-[1]">
      <div
        className={clsx([
          "p-1 sm:p-[10px] hover bg-white/10 sm:w-[48px] sm:h-[48px] w-[30px] h-[30px] rounded flex items-center justify-center",
          pageCurrent === 1 &&
            "opacity-30 hover:opacity-30 hover:cursor-not-allowed",
        ])}
        onClick={() => {
          if (pageCurrent > 1) {
            onChangePage(pageCurrent - 1);
          }
        }}
      >
        <img
          src="/images/icon/arrow-left.svg"
          alt="back"
          className="sm:w-auto w-2 object-contain"
        />
      </div>
      {Array.from({ length: total }, (_, index) => (
        <div
          onClick={() => {
            onChangePage(index + 1);
          }}
          className={clsx([
            "p-1 sm:p-[10px] hover bg-white/10 sm:w-[48px] sm:h-[48px] w-[30px] h-[30px] rounded flex items-center justify-center",
            pageCurrent === index + 1 && "bg-gradient",
          ])}
        >
          {index + 1}
        </div>
      ))}
      <div
        className={clsx([
          "p-1 sm:p-[10px] hover bg-white/10 sm:w-[48px] sm:h-[48px] w-[30px] h-[30px] rounded flex items-center justify-center",
          pageCurrent === total &&
            "opacity-30 hover:opacity-30 hover:cursor-not-allowed",
        ])}
        onClick={() => {
          if (pageCurrent < total) {
            onChangePage(pageCurrent + 1);
          }
        }}
      >
        <img
          src="/images/icon/arrow-right.svg"
          alt="next"
          className="sm:w-auto w-2 object-contain"
        />
      </div>
    </div>
  );
}

export default Pagination;

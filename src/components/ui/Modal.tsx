import clsx from "clsx";
import React, { ReactNode } from "react";
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  classContainer?: string;
}
function Modal(props: ModalProps) {
  const { isOpen, onClose, children, classContainer } = props;

  if (isOpen) {
    return (
      <div
        onClick={onClose}
        className="fixed inset-0 top-[104px] z-40 bg-black/30"
      >
        <div
          style={{ width: "calc(100% - 30px)" }}
          onClick={(e) => {
            e.stopPropagation();
          }}
          className={clsx([
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#303030] sm:!w-[460px] rounded-2xl",
            classContainer,
          ])}
        >
          {children}
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}

export default Modal;

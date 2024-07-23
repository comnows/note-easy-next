import { ChildrenType } from "@/app/lib/types";
import { useRef } from "react";
import { MdClose } from "react-icons/md";

type ModalProps = ChildrenType & {
  isOpen: boolean;
  onClose: () => void;
};

function Modal({ isOpen, onClose, children }: ModalProps) {
  const overlay = useRef<HTMLDivElement>(null);

  return (
    <>
      {isOpen && (
        <div
          ref={overlay}
          onClick={(e) => {
            if (e.target === overlay.current) {
              onClose();
            }
          }}
          className="fixed flex justify-center items-center top-0 left-0 size-full bg-black/50"
        >
          <div className="relative bg-white rounded-lg p-10">
            <button onClick={onClose} className="absolute top-4 right-4">
              <MdClose />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;

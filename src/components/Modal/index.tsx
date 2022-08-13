import { createPortal } from 'react-dom';

export default function ({
  children,
  show,
}: {
  children: JSX.Element;
  show: boolean;
}) {
  return show
    ? createPortal(
        <div className="top-0 flex justify-center pt-20 l-0 h-screen w-screen absolute bg-black/50 z-10">
          <div
            className="relative w-96
        md:w-128
        rounded-md
        lg:w-192 h-96  bg-white "
          >
            {children}
          </div>
        </div>,
        document.querySelector('body') as HTMLElement
      )
    : null;
}

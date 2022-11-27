import React from "react";

const ModalBook = ({ setShowModal, title, children }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative md:w-[400px] my-6 mx-auto ">
          <div className="border shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between   border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-sm text-center font-semibold px-5 mt-2">
                {" "}
                Book Now{" "}
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={() => setShowModal(false)}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  ×
                </span>
              </button>
            </div>

            <div className="relative py-2 px-4 flex-auto">
              <div className="my-4 text-slate-500 text-sm leading-relaxed">
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-50 fixed inset-0 z-40 bg-sky-900"></div>
    </>
  );
};

export default ModalBook;

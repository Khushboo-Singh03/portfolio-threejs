const people = [
  {
    name: "Leslie Alexander",
    role: "Co-Founder / CEO",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  // More people...
];

export default function Certificate() {
  return (
    <>
      <div className="flex-wrap justify-center py-12 items-center">
        <div className="flex justify-between items-center">
          <h1 className="pr-6">
            Hello Jiya, how are you? May I help you? Hello Jiya, how are you?
            May I help you? Hello Jiya, how are you? May I help you?
          </h1>

          <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
            <div className="flex h-full justify-center items-center">
              <img src="" alt="hello" />
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-6">
          <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
            <div className="flex h-full justify-center items-center">
              <img src="" alt="hello" />
            </div>
          </div>
          <h1 className="pl-6">
            Hello Jiya, how are you? May I help you? Hello Jiya, how are you?
            May I help you? Hello Jiya, how are you? May I help you?
          </h1>

        </div>
        <div className="flex justify-between items-center b-6">
          <h1 className="pr-6">
            Hello Jiya, how are you? May I help you? Hello Jiya, how are you?
            May I help you? Hello Jiya, how are you? May I help you?
          </h1>

          <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
            <div className="flex h-full justify-center items-center">
              <img src="" alt="hello" />
            </div>
          </div>
        </div>
       {/*  <div className="flex justify-between items-center mt-6">
          <div className="transform rounded-xl h-40 w-60 sm:h-64 sm:w-64 bg-white shadow-xl transition duration-300 hover:scale-105 flex-shrink-0">
            <div className="flex h-full justify-center items-center">
              <img src="" alt="hello" />
            </div>
          </div>
          <h1 className="pl-6">
            Hello Jiya, how are you? May I help you? Hello Jiya, how are you?
            May I help you? Hello Jiya, how are you? May I help you?
          </h1>

        </div> */}
      </div>
    </>
  );
}

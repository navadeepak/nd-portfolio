import React from "react";

function AboutFirst() {
  return (
    <div className="h-[85vh] flex items-center justify-center">
      <p className="flex flex-col gap-10">
        <span className="flex flex-nowrap text-5xl">
          <span className="text-[#4ade80] flex">H</span>ello,
        </span>
        <p className=" flex flex-col gap-5">
          {" "}
          <span className=" text-8xl first-letter:text-[#4ade80]">
            I'm Navadeepak{" "}
          </span>{" "}
          <span className="flex flex-row gap-5">
            <span className="text-3xl">as a</span>{" "}
            <span className="overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 text-4xl text-[#4ade80] font-bold typing-animation">
              {(() => {
                const texts = [
                  "Frontend Web Developer",
                  "CSS Developer",
                  "React Developer",
                ];
                const [currentIndex, setCurrentIndex] = React.useState(0);
                const [subIndex, setSubIndex] = React.useState(0);
                const [reverse, setReverse] = React.useState(false);

                React.useEffect(() => {
                  if (subIndex === texts[currentIndex].length + 1 && !reverse) {
                    setTimeout(() => setReverse(true), 1000);
                  } else if (subIndex === 0 && reverse) {
                    setReverse(false);
                    setCurrentIndex(
                      (prevIndex) => (prevIndex + 1) % texts.length
                    );
                  }

                  const timeout = setTimeout(
                    () => {
                      setSubIndex(
                        (prevSubIndex) => prevSubIndex + (reverse ? -1 : 1)
                      );
                    },
                    reverse ? 100 : 150
                  );
                  return () => clearTimeout(timeout);
                }, [subIndex, reverse, currentIndex]);

                return texts[currentIndex].substring(0, subIndex);
              })()}
            </span>
          </span>
        </p>
      </p>
      <h1></h1>
    </div>
  );
}

export default AboutFirst;

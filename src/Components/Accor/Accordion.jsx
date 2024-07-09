import { useState } from "react";
import { AccordionWrapper } from "./AccordianStyled";
import accordionData from "./accordianData";

export default function Accordions() {
  const [isClicked, setIsClicked] = useState(null);

  const handleIsClicked = (id) => {
    if (isClicked === id) {
      // if previously clicked accordion-item is already open, then close it.
      return setIsClicked(null);
    }

    // and open the currently clicked accordion-item having the id value we passed.
    setIsClicked(id);
  };

  return (
    <>
      <h1 className="text-[22px] sm:text-[32px] text-center font-semibold sm:w-[85vw] w-[80vw] sm:mt-0 mt-10 mb-[5vh]  mx-auto">
        FAQ'S
      </h1>
      <>
        <section className="section flex justify-center w-[100%]">
          <AccordionWrapper>
            {accordionData.map((currValue) => {
              const { id, title, content } = currValue;
              return (
                <div className="accordion_item" key={id}>
                  {/*===== Accordion-title =====*/}
                  <div
                    className={`accordion_title ${
                      isClicked === id ? "active" : ""
                    }`}
                    onClick={() => handleIsClicked(id)}
                  >
                    <h2>{title}</h2>
                    <div className="toggle_icon">
                      <span className="text-black">+</span>
                      <span>-</span>
                    </div>
                  </div>

                  {/* ===== Accordion-content ===== */}
                  <div className="accordion_content">
                    <p>{content}</p>
                  </div>
                </div>
              );
            })}
          </AccordionWrapper>
        </section>
      </>
    </>
  );
}

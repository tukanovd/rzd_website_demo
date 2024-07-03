import Spoiler from "./Spoiler";
import { useState } from "react";

type AccordionOption = {
  id: string;
  header: string;
  body: string;
};

type AccordionType = {
  options: AccordionOption[];
};

const Accordion = ({ options }: AccordionType) => {
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  return (
    <div>
      {options.map((item: AccordionOption) => {
        const { header, body, id } = item;
        const isOpened = id === selectedOption;
        const handleOptionClick = () => {
          if (selectedOption === id) {
            setSelectedOption(null);
          } else setSelectedOption(id);
        };

        return (
          <Spoiler
            key={id}
            header={header}
            isOpen={isOpened}
            onClick={handleOptionClick}
          >
            {body}
          </Spoiler>
        );
      })}
    </div>
  );
};

export default Accordion;

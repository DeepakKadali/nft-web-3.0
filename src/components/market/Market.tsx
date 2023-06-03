import { Button } from '@material-tailwind/react';
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

type Props = {}

type IconProps = {
  id:number,
  open:number
}

const Icon = (args:IconProps) => {
  const {id,open} = args;
  if (id !== open) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    );
  } else {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
      </svg>
    );
  }
}

const Market = (props: Props) => {

  const [open1, setOpen1] = useState(0);
  const [open2, setOpen2] = useState(0);
  

  const handleOpen1 = (value:any) => {
    setOpen1(open1 === value ? 0 : value);
  };

  const handleOpen2 = (value: any) => {
    setOpen2(open2 === value ? 0 : value);
  };
  
  
  
  return (
    <section id="marketplace">
      <div className="pb-20">
        <div className="flex mt-20">
          <div className="basis-1/4">
            <div className="text-blue-300 font-teko text-2xl">COLLECTION</div>
            <div className="dark:text-white text-6xl font-teko">
              BORED APES NFT ITEMS
            </div>
            <div className="text-secondary text-sm">
              Bored Ape Yacht Club, often colloquially called Bored Apes, Bored
              Ape or BAYC.
            </div>
            <Button className="py-4 mt-6 border-black bg- text-black dark:bg-transparent rounded-full justify-center items-center drop-shadow-none	border-2 dark:border-white dark:text-white">
              view on Opensea
            </Button>
          </div>
          <div className="flex gap-2">
            <div>
              <img
                className="h-[280px] w-[250px]"
                src="https://i.seadn.io/gae/ZfZdJWnEAsF_XwHWDI8iLjjGhvXxgp1E7R0DeZbANABVW8Y6XTeIvh7_9jvUAieKAsiP4kJ8ev0JXL2Wj6rTpz6UuWE--gNQAOVW2Q?auto=format&dpr=1&w=1000"
                alt="alt"
              />
            </div>
            <div>
              <img
                className="h-[280px] w-[250px]"
                src="https://i.seadn.io/gae/7aqFJWm8Gh1UMq58utbbNm2BQGhFgPq6o6QK-YWIt6-wVqv5j4g37xuKCLGwrKI7i9ivgrEjAk8DbYi-KVOW0YDFUzegbKR0Vy5f?auto=format&dpr=1&w=512"
                alt="alt"
              />
            </div>
            <div>
              <img
                className="h-[280px] w-[250px]"
                src="https://i.seadn.io/gae/X-sI3O4cZ7iYip5PdpF8v5aSBQAw3BX_GqV9pp_m9DU8ehd9_7uBqbm_aFfTrqyf-gr96zsp83RENrymCwS63DdZXFEy5QxAfiw_?auto=format&dpr=1&w=512"
                alt="alt"
              />
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="items-center justify-center text-center">
            <div className="text-blue-300 font-teko text-2xl">FAQS</div>
            <div className="dark:text-white font-teko text-6xl">
              FREQUENTLY ASKED QUESTIONS
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <div className="basis-1/2 flex flex-col gap-2">
              <Fragment>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open1 === 1}
                  icon={<Icon id={1} open={open1} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open1 === 1
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen1(1)}
                  >
                    WHERE ARE YOUR COMPANY BRANCHES LOCATED
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open1 === 2}
                  icon={<Icon id={2} open={open1} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open1 === 2
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen1(2)}
                  >
                    WHAT is THE NFTX-SPACE?
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open1 === 3}
                  icon={<Icon id={3} open={open1} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open1 === 3
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen1(3)}
                  >
                    WHAT is METAMASK
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open1 === 4}
                  icon={<Icon id={4} open={open1} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open1 === 4
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen1(4)}
                  >
                    HOW CAN I BUY,SELL,MINT NFT?
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
              </Fragment>
            </div>
            <div className="basis-1/2 flex flex-col gap-2">
              <Fragment>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open2 === 5}
                  icon={<Icon id={5} open={open2} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open2 === 5
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen2(5)}
                  >
                    WHAT is THE BEST SELLING LIQUID AT THE MOMENT?
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open2 === 6}
                  icon={<Icon id={6} open={open2} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open2 === 6
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen2(6)}
                  >
                    HOW TO CREATE AN ACCOUNT?
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open2 === 7}
                  icon={<Icon id={7} open={open2} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open2 === 7
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen2(7)}
                  >
                    ARE NFTS LEGAL AROUND THE WORLD?
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
                <Accordion
                  className="bg-black bg-opacity-20 dark:bg-white dark:bg-opacity-20 rounded-2xl"
                  open={open2 === 8}
                  icon={<Icon id={8} open={open2} />}
                >
                  <AccordionHeader
                    className={`dark:text-white font-teko text-xl border-none px-5 py-[10px] ${
                      open2 === 8
                        ? "bg-pink-300 dark:bg-blue-300 dark:text-black rounded-t-2xl"
                        : ""
                    }`}
                    onClick={() => handleOpen2(8)}
                  >
                    WHAT IS CURRENT BEST CRYPTO?
                  </AccordionHeader>
                  <AccordionBody className="px-5 dark:text-white">
                    We&apos;re not always in the position that we want to be at.
                    We&apos;re constantly growing. We&apos;re constantly making
                    mistakes. We&apos;re constantly trying to express ourselves
                    and actualize our dreams.
                  </AccordionBody>
                </Accordion>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Market
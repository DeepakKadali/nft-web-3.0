import { Button } from "@material-tailwind/react";
import logo from "../../assets/logo.png";

type Props = {};

const Home = (props: Props) => {
  return (
    <section id="home">
      <div className="pt-14 flex justify-between">
        <div className="basis-1/2">
          <div className="font-extrabold text-8xl  dark:text-white font-teko">
            DISCOVER COLLECT SELL DIGITAL NFT.
          </div>
          <div className="text-[30px] dark:text-secondary">
            Genearte 10,000+ NFT Collection Only by Uploading the layers, and
            get ready to sell your collection.
          </div>
          <div className="mt-6">
            <Button className="py-4 mr-4 bg-pink-300  dark:bg-bluebg rounded-full justify-center items-center">
              GET STARTED
            </Button>{" "}
            <Button className="py-4 border-black bg- text-black dark:bg-transparent rounded-full justify-center items-center drop-shadow-none	border-2 dark:border-white dark:text-white">
              JOIN DISCORD
            </Button>
          </div>
        </div>
        <div className="relative basis-1/2 ">
          <div className="absolute filter blur-xl dark:opacity-25 opacity-20 top-[50px]  -left-4 w-[500px] h-[500px] bg-purple-300 rounded-full"></div>
          <div className="absolute filter blur-xl dark:opacity-20 opacity-20 -left-[200px] w-[500px] h-[500px] bg-blue-300 rounded-full"></div>

          <img className="" src={logo} alt="logo" />
        </div>
      </div>

      <div className="bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 rounded-2xl">
        <div className="flex justify-around py-5 border-b-4 dark:border-backclr">
          <div>
            <h1 className="text-[60px] font-mono dark:text-white font-teko">
              1.5K+
            </h1>
            <div className="dark:text-white text-lg -mt-4">Collections</div>
          </div>
          <div>
            <h1 className="text-[60px] font-mono dark:text-white font-teko">
              102K+
            </h1>
            <div className="dark:text-white text-lg -mt-4">Artworks</div>
          </div>
          <div>
            <h1 className="text-[60px] font-mono dark:text-white font-teko">
              3.2K+
            </h1>
            <div className="dark:text-white text-lg -mt-4">Artists</div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="px-[100px] h-[250px] border-r-4 dark:border-backclr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-20 text-secure"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
              />
            </svg>

            <h1 className="dark:text-white text-xl font-teko">
              STRONG SECURITY
            </h1>
            <div className="dark:text-secondary text-sm">
              Secure transactions and record information with 2-factor
              authentication(2FA)
            </div>
          </div>
          <div className="px-[100px] h-[250px] border-r-4 dark:border-backclr">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-20 text-purple-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 12a2.25 2.25 0 00-2.25-2.25H15a3 3 0 11-6 0H5.25A2.25 2.25 0 003 12m18 0v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6m18 0V9M3 12V9m18 0a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 9m18 0V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v3"
              />
            </svg>

            <h1 className="dark:text-white text-xl font-teko">
              PAYMENTS OPTIONS
            </h1>
            <div className="dark:text-secondary text-sm">
              Flexible payment of methods with Visa, Mastetrcard, Paypal, bank
              transfer
            </div>
          </div>
          <div className="px-[100px] h-[250px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 h-20 text-pink-300"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>

            <h1 className="dark:text-white text-xl font-teko">
              MARKET UPDATED
            </h1>
            <div className="dark:text-secondary text-sm">
              The most accurate and trusted source for market cap, valuation and
              cryptocurrency information
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

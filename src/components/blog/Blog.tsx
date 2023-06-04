import logo from "../../assets/optimus.png";

type Props = {};

const Blog = (props: Props) => {
  return (
    <section id="blog">
      <div className="flex justify-between gap-24 my-[70px]">
        <div className="basis-1/2 h-[410px] bg-optimus rounded-2xl">
          <img
            className="w-full object-contain min-h-0 h-full"
            src={logo}
            alt="optimus-prime"
          />
        </div>

        <div className="basis-1/2 pr-[100px]">
          <div className="font-teko text-blue-300 text-2xl">ABOUT US</div>
          <div className="font-teko text-6xl dark:text-white">
            DISCOVER MORE COLLECT AND SELL RARE NFTS
          </div>
          <div className="dark:text-secondary">
            A non-fungible token is a unique digital identifier that is recorded
            on a blockchain, and is used to certify ownership and authenticity.
            It cannot be copied, substituted, or subdivided.
          </div>
          <div className="flex pt-6 gap-4">
            <div className="text-sm py-2 px-4 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 dark:text-white rounded-full">
              Wide range of Platforms
            </div>
            <div className="text-sm py-2 px-4 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 dark:text-white rounded-full">
              World Class Artists
            </div>
          </div>
          <div className="flex pt-2 gap-4">
            <div className="text-sm py-2 px-4 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 dark:text-white rounded-full">
              Any type pf Assets
            </div>
            <div className="text-sm py-2 px-4 bg-black dark:bg-white bg-opacity-10 dark:bg-opacity-10 dark:text-white rounded-full">
              Fast Payments
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="items-center justify-center text-center">
          <div className="text-blue-300 font-teko text-2xl">KEY FEATURES</div>
          <div className="dark:text-white font-teko text-6xl">
            ACCESS THE FUTURE
          </div>
        </div>

        <div className="flex gap-10 items-center justify-between mt-10">
          <div className="h-60 w-80 bg-gradient-to-br from-pink-100 to-pink-300 dark:from-gray1 dark:to-gray3 rounded-2xl p-5">
            <div className="py-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1010 1010"
                id="money"
                className="h-16 w-16"
              >
                <circle cx="505" cy="505" r="505" fill="#ACAF48"></circle>
                <path
                  fill="#FC6E51"
                  d="M505 348.529c24.352 0 68.708 4.537 90.9 10.1 50.402-52.364 124.199-46.683 129.06-36.396 2.95 6.264-21.59 41.564-38.16 66.696 26.69 23.238 49.277 59.16 60.6 90.9h40.4v86.008l-41.9 19.411c-15.938 43.852-49.306 81.45-92.773 107.45v70.187c0 2.27-.849 4.517-2.584 6.215-1.727 1.735-7.142 3.471-9.37 3.471h-83.799v-52.354s-39.019.058-52.355 0c-12.387-.06-41.889 0-41.889 0v52.354h-82.446c-3.157 0-6.353-1.736-9.243-3.492-2.89-1.795-1.173-4.122-2.593-6.963v-41.9s-81.254-65.61-83.78-157.102c-.255-9.212.277-22.034 0-31.425C293.423 424.595 375.387 348.53 505 348.53z"
                ></path>
                <path
                  fill="#454545"
                  d="M641.173 782.67h-83.799c-5.578 0-10.1-4.517-10.1-10.099v-42.245c-12.506.02-33.279.03-42.298-.01-7.694-.029-22.025-.01-31.746-.02v42.275c0 5.582-4.522 10.1-10.1 10.1h-82.446c-5.559 0-10.249-2.387-14.485-4.961-6.248-3.876-6.618-9.844-6.737-11.807-.004-.02-.004-.05-.004-.069a10.11 10.11 0 0 1-.71-3.718v-37.234c-16.645-14.627-81.442-76.874-83.774-161.491-.128-4.656-.07-10.21 0-15.801.029-2.407.059-4.814.074-7.151-34.389-6.323-61.296-27.144-62.874-49.79-.395-5.642.498-24.58 28.56-31.592 5.36-1.292 10.893 1.943 12.244 7.358 1.352 5.415-1.943 10.899-7.353 12.25-5.153 1.282-13.734 4.37-13.3 10.583.7 10.022 17.354 25.23 43.768 30.813C289.803 409.336 378.483 338.429 505 338.429c22.656 0 63.007 3.807 87.719 9.104 42.55-40.943 96.97-44.898 120.416-41.032 11.353 1.854 18.208 5.593 20.96 11.412 4.409 9.38-2.476 21.867-32.185 66.518l-1.923 2.9c22.222 21.482 42.324 51.9 54.396 82.397H787.8c5.583 0 10.1 4.518 10.1 10.101v86.008c0 3.935-2.289 7.506-5.859 9.163l-38.14 17.675c-16.286 41.77-48.243 79.005-90.674 105.675v64.535c0 5.119-1.997 9.893-5.627 13.434-4.024 4.054-12.29 6.352-16.427 6.352zm-261.856-20.75c.833.414 1.263.532 1.47.552h72.243v-42.254c0-5.573 4.508-10.09 10.08-10.1-.01 0 29.546-.07 41.96 0 13.325.068 52.285 0 52.29 0h.014a10.096 10.096 0 0 1 10.1 10.1v42.254h73.699c.241-.05 1.095-.326 1.854-.631v-69.142a10.1 10.1 0 0 1 4.916-8.67c42.275-25.29 73.694-61.597 88.47-102.233a10.065 10.065 0 0 1 5.247-5.711l36.04-16.698V489.93h-30.3a10.086 10.086 0 0 1-9.508-6.707c-11.452-32.095-34.107-66.114-57.725-86.68-3.811-3.313-4.581-8.945-1.8-13.176l6.722-10.13c9.271-13.927 23.893-35.902 28.589-46.12-15.95-4.183-70.453-3.078-110.498 38.516-2.511 2.603-6.23 3.698-9.736 2.79-22.01-5.513-65.615-9.793-88.444-9.793-119.05 0-201.353 68.007-209.821 173.317.123 4.775.059 10.347-.005 15.88-.065 5.316-.133 10.584-.01 15.012 2.372 85.84 79.251 148.896 80.03 149.517a10.129 10.129 0 0 1 3.753 7.862v40.124c.159.552.281 1.085.37 1.578z"
                ></path>
                <path
                  fill="#454545"
                  d="M625.904 451.955c0 11.62 9.45 21.068 21.069 21.068 11.648 0 21.067-9.449 21.067-21.068 0-11.639-9.419-21.107-21.067-21.107-11.62 0-21.069 9.468-21.069 21.107zM570.314 398.585H439.685c-5.578 0-10.1-4.518-10.1-10.1 0-5.583 4.522-10.1 10.1-10.1h130.63c5.578 0 10.1 4.517 10.1 10.1 0 5.582-4.522 10.1-10.1 10.1z"
                ></path>
                <path
                  fill="#FFF"
                  d="M429.25 313.179c0 41.84 33.91 75.75 75.75 75.75s75.75-33.91 75.75-75.75-33.91-75.75-75.75-75.75-75.75 33.91-75.75 75.75z"
                ></path>
                <path
                  fill="#454545"
                  d="M505 399.029c-47.339 0-85.85-38.516-85.85-85.85s38.511-85.85 85.85-85.85 85.85 38.516 85.85 85.85-38.511 85.85-85.85 85.85zm0-151.5c-36.198 0-65.65 29.451-65.65 65.65 0 36.198 29.452 65.65 65.65 65.65s65.65-29.452 65.65-65.65c0-36.198-29.452-65.65-65.65-65.65z"
                ></path>
                <circle cx="505" cy="313.179" r="45.45" fill="#FFB933"></circle>
              </svg>
            </div>
            <div className="dark:text-white font-teko text-2xl">
              FUELING THE METAVERSE
            </div>
            <div className="dark:text-secondary">
              The Metaverse is the Next Generation of the Internet.As one of its
              earliest explorers , You will help fuel its Expansion
            </div>
          </div>
          <div className="h-60 w-80 bg-gradient-to-br from-pink-100 to-pink-300 dark:from-gray1 dark:to-gray3 rounded-2xl p-5">
            <div className="py-2 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enableBackground="new 0 0 64 64"
                viewBox="0 0 64 64"
                id="coin"
                className="h-16 w-16"
              >
                <path
                  fill="#F0908B"
                  d="M22.6,19.3c-1.3,0.2-2.5,0.7-3.7,1.3c-5.4-1.3-11.9,0.4-12.6,2c-0.6,1.3,2.2,4,4.1,5.6  c-0.9,1.7-1.5,3.5-1.8,5.5c-1.9,0.2-4.5,0.8-4.9,2.4c-0.7,2.7,0,9,3.5,9.7c1.5,0.3,3.2,0.3,4.6,0.3c1.3,1.6,2.9,2.8,4.7,4L14.9,57  h10.3l1.4-3.7c0.8,0.1,1.6,0.2,2.4,0.2c1.3,0,2.7-0.3,4-0.5L32,57h9.8c0,0,7.7-10.1,8.8-15.6c0.7-1.7,1.3-3.5,1.2-5.4  C51.6,32.1,46.5,15.1,22.6,19.3z"
                ></path>
                <path
                  fill="#FFD766"
                  d="M35.1,6.1c-5.2,0-9.4,4.2-9.4,9.4c0,3.4,1.8,6.3,4.4,8c2.1,0,4.7,0.2,7,1.2c4.3-0.9,7.5-4.7,7.5-9.2  C44.5,10.3,40.3,6.1,35.1,6.1z"
                ></path>
                <path
                  fill="none"
                  stroke="#2C3E50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M49.2 27.8c-1.1-1.5-2.4-2.9-4-4.2M26.7 20c-.7-1.3-1.1-2.8-1.1-4.3 0-5.2 4.2-9.4 9.4-9.4s9.4 4.2 9.4 9.4c0 2.8-1.2 5.2-3.1 7"
                ></path>
                <path
                  fill="none"
                  stroke="#2C3E50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="  M38.5,12.7c0,0-0.3-1.5-3.4-1.5c-2.4,0-3.4,1.3-3.4,2.5s1.4,2,3.4,2c2.7,0,3.4,0.9,3.4,2c0,1.5-1.6,2.5-3.4,2.5  c-1.8,0-3.2-1-3.4-1.5"
                ></path>
                <line
                  x1="35"
                  x2="35"
                  y1="10"
                  y2="21"
                  fill="none"
                  stroke="#2C3E50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></line>
                <circle
                  cx="16"
                  cy="32.8"
                  r="1"
                  fill="none"
                  stroke="#2C3E50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                ></circle>
                <path
                  fill="none"
                  stroke="#2C3E50"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeMiterlimit="10"
                  strokeWidth="2"
                  d="M22.6 19.3c-1.3.3-2.5.7-3.7 1.3-5.4-1.3-11.9.4-12.6 2-.6 1.3 2.2 4 4.1 5.6-.9 1.7-1.5 3.5-1.8 5.5-1.9.2-4.5.8-4.9 2.4-.7 2.7 0 9 3.5 9.7 1.5.3 3.2.3 4.6.3 1.3 1.6 2.9 2.8 4.7 4L14.9 57h10.3l1.4-3.7c.8.1 1.6.2 2.4.2 1.3 0 2.7-.3 4-.5L32 57h9.8c0 0 7.7-10.1 8.8-15.6.7-1.7 1.2-3.5 1.2-5.4M49.6 32.2c0 0 6.9.4 6.5-4.5-.3-3.6-2.1-4.3-3.3-2.8-1 1.3 0 4.9 4.2 4.7 4.2-.2 3-5.5 3-5.5M26.5 23.8c0 0 8-1.5 12.5 2.1"
                ></path>
              </svg>
            </div>
            <div className="dark:text-white font-teko text-2xl">
              INITIAL METAVERSE OFFERING
            </div>
            <div className="dark:text-secondary">
              The Metaverse is the Next Generation of the Internet.As one of its
              earliest explorers , You will help fuel its Expansion
            </div>
          </div>
          <div className="h-60 w-80 bg-gradient-to-br from-pink-100 to-pink-300 dark:from-gray1 dark:to-gray3 rounded-2xl p-5">
            <div className="py-4 pl-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                id="money"
              >
                <g fillRule="evenodd" transform="translate(0 -1004.362)">
                  <circle
                    cx="37.045"
                    cy="28.409"
                    r="12.5"
                    fill="#50b748"
                    transform="matrix(1.92 0 0 1.92 -47.127 973.817)"
                  ></circle>
                  <path
                    fill="#10a711"
                    className="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
                    d="M46.645 31.871a24 24 0 0 0 .48-1.451 24 24 0 0 0 .133-.596L32.57 15.137l-.707-.707-.402.402-1.961-1.963-.928-.373-.373.93L46.645 31.87zM29.453 47.346a24 24 0 0 0 1.639-.418 24 24 0 0 0 2.254-.823 24 24 0 0 0 2.16-1.042 24 24 0 0 0 2.045-1.254 24 24 0 0 0 1.91-1.454 24 24 0 0 0 1.756-1.634 24 24 0 0 0 1.584-1.803 24 24 0 0 0 1.394-1.951 24 24 0 0 0 1.194-2.08 24 24 0 0 0 .98-2.19 24 24 0 0 0 .233-.699l-15.8-15.799-.001-.002a7.571 7.571 0 0 0-.531-.482l-.002-.002a7.52 7.52 0 0 0-.961-.664 7.491 7.491 0 0 0-.557-.299L26 12h-1v1l1.027 1.027c-.175-.012-.349-.027-.527-.027-.259 0-.514.013-.766.04-.224.022-.444.058-.662.1l-1.644-1.644-.93.373.373.928.772.771a7.507 7.507 0 0 0-1.91 1.145c-.058.047-.109.101-.165.15l-.726-.726-.707-.707-.428.425L16.852 13l-1-1h-1v1h-1v1l1 1 3.695 3.695a7.45 7.45 0 0 0-.395 4.309v.002c.1.487.248.957.438 1.404v.002c.19.448.422.873.691 1.272l.002.002c.135.198.278.39.43.574l.002.002c.152.184.313.362.482.531l.002.002 4.574 4.574-.64-.369-.938 1.625L18.07 27.5l-.865-.5-.496.857L12.852 24l-1-1h-1v1h-1v1l1 1 4.617 4.617-.264-.152-.5.865 2.93 2.93-.465.803 12.283 12.283zm-2.31.422a24 24 0 0 0 1.503-.229l-11.11-11.111-.866-.5-.5.867 10.973 10.973z"
                    color="#000"
                    fontFamily="sans-serif"
                    fontWeight="400"
                    transform="translate(0 1004.362)"
                  ></path>
                  <path
                    className="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal"
                    fill="#fff"
                    d="M8.426 3v1h-1v1h1v1h1V5h1V4h-1V3h-1zm10.148 0v1h1V3h-1zm-2.572.496-.93.373.373.928.928-.371-.371-.93Zm6.144 0-.373.93.928.37.373-.927-.928-.373zM19.074 5c-4.136 0-7.5 3.362-7.5 7.496s3.364 7.496 7.5 7.496 7.5-3.362 7.5-7.496S23.21 5 19.074 5Zm-6.365.43-.707.707.707.707.707-.707-.707-.707Zm12.729 0-.708.707.707.707.708-.707-.707-.707ZM19.073 6a6.49 6.49 0 0 1 6.5 6.496 6.49 6.49 0 0 1-6.5 6.496 6.49 6.49 0 0 1-6.467-7.162A6.49 6.49 0 0 1 19.074 6Zm8.627 2.492-.928.373.373.928.928-.373-.373-.928zM16.631 9v.014h-.024v1h1.016c.92 0 1.384.432 1.55.97h-2.542v.989h2.543c-.168.538-.633.972-1.551.972h-1.016V13.938h.29l3.013 2.97.701-.71-2.361-2.329c1.07-.227 1.758-1.024 1.947-1.904h1.342v-.988H20.2a2.447 2.447 0 0 0-.472-.989h1.812V9h-4.908zm10.943 3v1h1v-1h-1zM4.426 14v1h-1v1h1v1h1v-1h1v-1h-1v-1h-1zm22.72 1.207-.373.928.928.373.373-.928-.928-.373zM10.78 18l-1.5 2.598.866.5 1.5-2.598-.866-.5Zm14.659.156-.708.707.707.707.708-.707-.707-.707ZM8.779 21.465l-.5.865.866.5.5-.865-.866-.5zm4.465.267-2.5 4.33.865.5 2.5-4.33-.865-.5zm4.463.268-1.5 2.598.867.5 1.5-2.598-.867-.5zm7.719 3v1h-1v1h1v1h1v-1h1v-1h-1v-1h-1zm-9.719.465-.5.865.867.5.5-.865-.867-.5zm-5.463 1.463-.5.867.865.5.5-.867-.865-.5z"
                    color="#000"
                    fontFamily="sans-serif"
                    fontWeight="400"
                    overflow="visible"
                    transform="translate(6.426 1013.362)"
                  ></path>
                </g>
              </svg>
            </div>
            <div className="dark:text-white font-teko text-2xl">INCUBATION</div>
            <div className="dark:text-secondary">
              The Metaverse is the Next Generation of the Internet.As one of its
              earliest explorers , You will help fuel its Expansion
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

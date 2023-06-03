import logo from '../../assets/vrlogo.png';
import { Button } from '@material-tailwind/react';
type Props = {}

const Road = (props: Props) => {
  return (
    <section id="roadmap">
      <div className="mt-20">
        <div className="h-[310px] bg-pink-300 dark:bg-vr rounded-2xl flex relative">
          <div className="absolute filter blur-xl dark:opacity-20 opacity-20 top-[-80px] w-[600px] left-[-20px] h-[600px] bg-bluebg dark:bg-purple-300 rounded-full"></div>

          <div className="basis-1/2 relative">
            <img
              className="absolute min-h-0 h-[450px] w-[450px] bottom-0"
              src={logo}
              alt="logo"
            />
          </div>
          <div className="basis-1/2 justify-center items-center my-auto mx-auto">
            <div className="dark:text-white text-6xl font-teko">
              JOIN US NOW
            </div>
            <div className="dark:text-white text-sm w-2/3">
              While you may think NFTs merely consist of owning the rights to
              pieces of artwork, they're actually much more than that. Many also
              also grant their owners certain utility, often in the form of
              access to exclusive events
            </div>
            <Button className="py-4 mt-6 border-black bg- text-black dark:bg-transparent rounded-full justify-center items-center drop-shadow-none	border-2 dark:border-white dark:text-white">
              view on Opensea
            </Button>
          </div>
        </div>

        <div className="mt-20 flex">
          <div className="basis-1/2">
            <div className="text-4xl font-bold first-letter:text dark:text-white font-teko">
              SPACE.
            </div>
            <div className="flex gap-4 mt-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="twitter"
                className="h-6 w-6 dark:text-white fill-current"
              >
                <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="instagram"
                className="h-6 w-6 dark:text-white fill-current"
              >
                <path d="M12,9.52A2.48,2.48,0,1,0,14.48,12,2.48,2.48,0,0,0,12,9.52Zm9.93-2.45a6.53,6.53,0,0,0-.42-2.26,4,4,0,0,0-2.32-2.32,6.53,6.53,0,0,0-2.26-.42C15.64,2,15.26,2,12,2s-3.64,0-4.93.07a6.53,6.53,0,0,0-2.26.42A4,4,0,0,0,2.49,4.81a6.53,6.53,0,0,0-.42,2.26C2,8.36,2,8.74,2,12s0,3.64.07,4.93a6.86,6.86,0,0,0,.42,2.27,3.94,3.94,0,0,0,.91,1.4,3.89,3.89,0,0,0,1.41.91,6.53,6.53,0,0,0,2.26.42C8.36,22,8.74,22,12,22s3.64,0,4.93-.07a6.53,6.53,0,0,0,2.26-.42,3.89,3.89,0,0,0,1.41-.91,3.94,3.94,0,0,0,.91-1.4,6.6,6.6,0,0,0,.42-2.27C22,15.64,22,15.26,22,12S22,8.36,21.93,7.07Zm-2.54,8A5.73,5.73,0,0,1,19,16.87,3.86,3.86,0,0,1,16.87,19a5.73,5.73,0,0,1-1.81.35c-.79,0-1,0-3.06,0s-2.27,0-3.06,0A5.73,5.73,0,0,1,7.13,19a3.51,3.51,0,0,1-1.31-.86A3.51,3.51,0,0,1,5,16.87a5.49,5.49,0,0,1-.34-1.81c0-.79,0-1,0-3.06s0-2.27,0-3.06A5.49,5.49,0,0,1,5,7.13a3.51,3.51,0,0,1,.86-1.31A3.59,3.59,0,0,1,7.13,5a5.73,5.73,0,0,1,1.81-.35h0c.79,0,1,0,3.06,0s2.27,0,3.06,0A5.73,5.73,0,0,1,16.87,5a3.51,3.51,0,0,1,1.31.86A3.51,3.51,0,0,1,19,7.13a5.73,5.73,0,0,1,.35,1.81c0,.79,0,1,0,3.06S19.42,14.27,19.39,15.06Zm-1.6-7.44a2.38,2.38,0,0,0-1.41-1.41A4,4,0,0,0,15,6c-.78,0-1,0-3,0s-2.22,0-3,0a4,4,0,0,0-1.38.26A2.38,2.38,0,0,0,6.21,7.62,4.27,4.27,0,0,0,6,9c0,.78,0,1,0,3s0,2.22,0,3a4.27,4.27,0,0,0,.26,1.38,2.38,2.38,0,0,0,1.41,1.41A4.27,4.27,0,0,0,9,18.05H9c.78,0,1,0,3,0s2.22,0,3,0a4,4,0,0,0,1.38-.26,2.38,2.38,0,0,0,1.41-1.41A4,4,0,0,0,18.05,15c0-.78,0-1,0-3s0-2.22,0-3A3.78,3.78,0,0,0,17.79,7.62ZM12,15.82A3.81,3.81,0,0,1,8.19,12h0A3.82,3.82,0,1,1,12,15.82Zm4-6.89a.9.9,0,0,1,0-1.79h0a.9.9,0,0,1,0,1.79Z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="github"
                className="h-6 w-6 dark:text-white fill-current"
              >
                <path d="M7.999 0C3.582 0 0 3.596 0 8.032a8.031 8.031 0 0 0 5.472 7.621c.4.074.546-.174.546-.387 0-.191-.007-.696-.011-1.366-2.225.485-2.695-1.077-2.695-1.077-.363-.928-.888-1.175-.888-1.175-.727-.498.054-.488.054-.488.803.057 1.225.828 1.225.828.714 1.227 1.873.873 2.329.667.072-.519.279-.873.508-1.074-1.776-.203-3.644-.892-3.644-3.969 0-.877.312-1.594.824-2.156-.083-.203-.357-1.02.078-2.125 0 0 .672-.216 2.2.823a7.633 7.633 0 0 1 2.003-.27 7.65 7.65 0 0 1 2.003.271c1.527-1.039 2.198-.823 2.198-.823.436 1.106.162 1.922.08 2.125.513.562.822 1.279.822 2.156 0 3.085-1.87 3.764-3.652 3.963.287.248.543.738.543 1.487 0 1.074-.01 1.94-.01 2.203 0 .215.144.465.55.386A8.032 8.032 0 0 0 16 8.032C16 3.596 12.418 0 7.999 0z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                id="facebook"
                className="h-6 w-6 dark:text-white fill-current"
              >
                <path d="M20.9,2H3.1A1.1,1.1,0,0,0,2,3.1V20.9A1.1,1.1,0,0,0,3.1,22h9.58V14.25h-2.6v-3h2.6V9a3.64,3.64,0,0,1,3.88-4,20.26,20.26,0,0,1,2.33.12v2.7H17.3c-1.26,0-1.5.6-1.5,1.47v1.93h3l-.39,3H15.8V22h5.1A1.1,1.1,0,0,0,22,20.9V3.1A1.1,1.1,0,0,0,20.9,2Z"></path>
              </svg>
            </div>
            <div className="dark:text-secondary mt-8">
              All Rights Reserved © 2023
            </div>
          </div>
          <div className="basis-1/2 flex">
            <div className="basis-1/3">
              <div className="text-2xl font-teko dark:text-white">
                MAERKET PLACE
              </div>
              <div className="dark:text-secondary">About us</div>
              <div className="dark:text-secondary">Our Team</div>
              <div className="dark:text-secondary">Team Details</div>
              <div className="dark:text-secondary">Error 404</div>
              <div className="dark:text-secondary">Cart Page</div>
            </div>
            <div className="basis-1/3">
              <div className="text-2xl font-teko dark:text-white">COMPANY</div>
              <div className="dark:text-secondary">Wallet</div>
              <div className="dark:text-secondary">Create Page</div>
              <div className="dark:text-secondary">Login Page</div>
              <div className="dark:text-secondary">Registration</div>
              <div className="dark:text-secondary">Checkout</div>
            </div>
            <div className="basis-1/3">
              <div className="text-2xl font-teko dark:text-white">
                MAERKET PLACE
              </div>
              <div className="dark:text-secondary">Contact us</div>
              <div className="dark:text-secondary">Shop page</div>
              <div className="dark:text-secondary">Shop details</div>
              <div className="dark:text-secondary">Collectors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Road
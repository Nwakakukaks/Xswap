import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Footer from "../components/Footer";
import Image from "next/image";
import hero from "../assets/xdc.png";
import Loader from "../components/Loader";
import { Toast } from "flowbite-react";
// import { fetchPrice } from "../api";

import Prism from "prismjs";

import "prismjs/themes/prism-coy.css";
import "prismjs/components/prism-markdown.js";
import "prismjs/components/prism-jsx.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function Home() {
  const [expand, setExpand] = useState(false);

  const howToInstall = `
  npm i xdefi-contract 
  or
  yarn add xdefi-contracts
  `;

  const howToUse = `
  import "xdefi-contracts/Core/XSwapPair.sol" ;

  contract myDefiContract is XSwapPair {
    // ready to use the contracts
  }
  `;

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <div
        className={`w-screen min-h- pb-20 md:pb-0 lg:min-h-max no-repeat  bg-cover ${!expand
          ? `
            bg-cover lg:bg-center bg-no-repeat`
          : 'bg-[#07415c]'
          }`}
      >
        {/* <Loader /> */}
        <Navbar expand={expand} setExpand={setExpand} />
        {expand ? null : (
          <>
            <div className="mt-20 lg:ml-12 lg:mt-48 lg:pb-48 flex items-center lg:justify-between justify-around ">
              <div className="font-fredoka mt-8 tracking-wide text-white flex flex-col items-start justify-center  px-14">
                <h1 className="text-4xl mb-2">Welcome to XSwap</h1>
                <p className="text-xl max-w-md ">A decentralised staking and lending protocol built on top of XDC blockchain</p>
                <Link href="/swap">
                  {/* <button className="border-2 py-2 px-4 rounded-sm mt-5 font-chakra bg-white text-black hover:bg-transparent hover:text-white">
                Launch App
              </button> */}

                  <button
                    type="button"
                    className=" mt-5 flex hover:scale-105 transition ease-in-out items-center bg-gray-900 text-white border hover:border-gray-300 rounded-sm text-lg hover:bg-[#1c9bce]  font-semibold font-fredoka hover:text-black px-3 py-2 mr-2 mb-2"
                  >
                    {/* <img
                  className=" w-8 mr-2"
                  src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/ffffff/external-wallet-interface-kiranshastry-lineal-kiranshastry.png"
                /> */}
                    Launch App
                  </button>
                </Link>
              </div>
              <div className=" lg:max-w-2xl ">
                <Image className="" alt="image" src={hero} />
              </div>
            </div>
          </>
        )}
      </div>
      <div className="w-ful">{expand ? null : <Footer />}</div>
    </>
  );
}

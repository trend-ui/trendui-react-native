"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Github, Moon, Search, Sun } from "lucide-react";
import Liquid from "./ui/landing-page/liquid-buttons";
import Counter from "./ui/landing-page/counter";
import Notch from "./ui/landing-page/notch";
import { CardDemo } from "./ui/landing-page/card";
import { AnimatedCircularProgressBar } from "./ui/landing-page/progress";
import AvatarCircles from "./ui/landing-page/avatars";
import Call from "./ui/landing-page/call";
import NotificationCard from "./ui/landing-page/notification-card";
import InputNext from "./ui/landing-page/input-next";
import Pagination from "./ui/landing-page/pagination";
import ProductCard from "./ui/landing-page/product-card";
import TooggleSwitch from "./ui/landing-page/toggle-switch";
import NotificationBell from "./ui/landing-page/notification-bell";
import LoadingButton from "./ui/landing-page/loading-button";
import Image from "next/image";
export function LandingPage() {
  const [isChecked, setIsChecked] = useState(true);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Navigation */}
      <header className="container mx-auto px-4 pt-4">
        <nav className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-4 relative">
            <span className="text-2xl ">TrendUI</span>
            {/* <svg
              width="65"
              height="11"
              viewBox="0 0 65 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className=""
            >
              <path
                d="M38.1949 7.0957C38.1987 7.10388 38.2025 7.11206 38.2064 7.12023L38.1949 7.0957ZM38.1949 7.0957C38.2067 7.08964 38.2187 7.0835 38.2307 7.07728L38.0018 6.63278L37.5327 6.80582C37.5385 6.82164 37.5444 6.83744 37.5504 6.85323C37.5431 6.85651 37.5361 6.85968 37.5293 6.86274C34.8573 8.06524 30.7014 9.75757 26.8382 10.4672L38.1949 7.0957ZM17.9043 6.80443L18.124 5.8935C18.2193 5.49841 18.385 5.11381 18.5819 4.75182C18.5819 4.75179 18.5819 4.75177 18.582 4.75175L19.0212 4.99066L17.9043 6.80443ZM17.9043 6.80443L18.7833 6.47977M17.9043 6.80443L18.7833 6.47977M18.7833 6.47977C19.1827 6.33226 19.5699 6.18718 19.9425 6.04762M18.7833 6.47977L19.9425 6.04762M25.5752 1.73833L25.5752 1.739C25.6103 2.86404 24.8707 3.60793 24.159 4.1361L25.5752 1.73833ZM25.5752 1.73833C25.5723 1.65211 25.5515 1.56332 25.5074 1.47942C25.4641 1.39729 25.4087 1.33904 25.3615 1.29948C25.3168 1.26205 25.2746 1.23741 25.2533 1.22538C25.2423 1.21917 25.2315 1.21337 25.2269 1.21087C25.2205 1.20744 25.2195 1.20686 25.2196 1.20692L25.2177 1.20584M25.5752 1.73833L25.2177 1.20584M25.2177 1.20584C25.0889 1.13272 24.9559 1.09021 24.8427 1.06179L24.8426 1.06178M25.2177 1.20584L24.8426 1.06178M24.8426 1.06178C24.4583 0.965409 24.0357 0.968411 23.6863 0.999544M24.8426 1.06178L23.6863 0.999544M38.3073 5.44513L38.3674 4.46975C38.3984 3.96721 38.5316 3.46082 38.8034 2.98077C38.9271 2.76022 39.1567 2.45301 39.4266 2.16237C39.6956 1.87276 40.0403 1.56097 40.4055 1.36327M38.3073 5.44513L40.6445 1.80245M38.3073 5.44513L39.1335 4.92325C39.7224 4.55124 40.3561 4.09109 40.8654 3.57828L40.8654 3.57822C41.1333 3.30842 41.3867 3.0049 41.5547 2.66704M38.3073 5.44513L41.1073 2.44364M40.4055 1.36327C40.406 1.36304 40.4064 1.36281 40.4068 1.36258L40.6445 1.80245M40.4055 1.36327C40.4052 1.36348 40.4048 1.36368 40.4044 1.36389L40.6445 1.80245M40.4055 1.36327C40.5194 1.30104 40.658 1.23861 40.8122 1.20705L40.8134 1.20682C40.8788 1.1936 41.0088 1.17221 41.1561 1.21C41.3275 1.25398 41.4669 1.36271 41.5574 1.51312M40.6445 1.80245C40.7347 1.75311 40.8248 1.71484 40.9125 1.6969C40.9953 1.68015 41.0757 1.68193 41.1293 1.77135M41.5574 1.51312C41.5572 1.51271 41.5569 1.51231 41.5567 1.51191L41.1293 1.77135M41.5574 1.51312C41.5577 1.51352 41.5579 1.51392 41.5581 1.51433L41.1293 1.77135M41.5574 1.51312C41.8195 1.946 41.7011 2.37494 41.5547 2.66704M41.1293 1.77135C41.2632 1.99205 41.2194 2.22054 41.1073 2.44364M41.1073 2.44364L41.5552 2.66604C41.555 2.66637 41.5548 2.6667 41.5547 2.66704M41.1073 2.44364L41.5542 2.66804C41.5543 2.66771 41.5545 2.66737 41.5547 2.66704M19.9425 6.04762L20.0651 6.0017M19.9425 6.04762L20.0651 6.0017M20.0651 6.0017C20.0651 6.00169 20.0651 6.00169 20.0651 6.00168M20.0651 6.0017L20.0651 6.00168M20.0651 6.00168C20.2044 5.94955 20.3769 5.89001 20.5741 5.82195M20.0651 6.00168L20.5741 5.82195M20.5741 5.82195C21.5187 5.49596 23.0295 4.97458 24.1589 4.13616L20.5741 5.82195ZM23.6863 0.999544C23.3313 1.03118 23.0137 1.09556 22.8211 1.14578L23.6863 0.999544ZM17.4924 6.94891L17.8129 6.83483L17.8244 6.49486C17.8473 5.82172 18.0641 5.1042 18.4476 4.39912L18.4477 4.39908C18.929 3.51393 19.6654 2.66445 20.4735 1.98702C21.2862 1.30571 22.1341 0.829537 22.8207 0.650806L22.821 0.650742C23.0424 0.592974 23.4804 0.516368 23.9539 0.50227C24.4406 0.48778 24.886 0.542352 25.174 0.685856C25.5435 0.870097 25.776 1.17993 25.7926 1.713L25.7926 1.71307C25.8293 2.89057 25.2069 3.86037 24.1931 4.6128L24.1931 4.61282C23.105 5.42049 21.6543 5.93263 20.6317 6.29362C20.4246 6.36673 20.235 6.43364 20.0696 6.49555L20.0103 6.51775C19.5583 6.68694 19.0879 6.86299 18.6009 7.04172L18.0487 7.2444L18.3377 7.75675C18.666 8.33879 19.2434 8.79219 20.0162 9.15486L20.0163 9.15491C21.855 10.0172 24.2969 9.9308 26.7483 9.48018C30.588 8.77467 34.6954 7.09379 37.3162 5.91466L37.3163 5.91463C37.4448 5.85676 37.6471 5.76059 37.8934 5.63279L38.1937 5.47703L38.1609 5.14034C38.0771 4.28295 38.2229 3.41597 38.6733 2.61945L38.6736 2.61885C38.7841 2.42289 39.0339 2.07907 39.36 1.7283C39.6871 1.37637 40.0555 1.05593 40.3922 0.874428L40.3933 0.873815C40.7067 0.703887 40.9563 0.664729 41.1408 0.700095C41.3099 0.732511 41.4999 0.841656 41.6802 1.13866C42.1058 1.84457 42.0168 2.60324 41.4574 3.40407L41.4571 3.4045C40.8999 4.20392 39.8244 4.99143 38.8502 5.58419L38.4955 5.79998L38.6424 6.18828C38.6909 6.31648 38.7449 6.45061 38.8088 6.58532C39.3478 7.7306 40.3093 8.71214 41.3652 9.07148L41.3653 9.07152C45.1215 10.3488 49.1634 10.1929 53.1066 9.43001C56.9193 8.69236 60.6833 7.37757 64.0497 6.20167C64.1633 6.16199 64.2765 6.12247 64.3891 6.08313C64.3902 6.08277 64.3909 6.08256 64.3914 6.08243C64.3932 6.08294 64.398 6.08464 64.4054 6.08975C64.427 6.1045 64.469 6.14808 64.4902 6.23811C64.5103 6.3285 64.4979 6.41908 64.4669 6.48735C64.435 6.55778 64.399 6.57513 64.393 6.57722C60.8275 7.82177 56.897 9.19308 52.9276 9.94043C48.9593 10.6876 44.9963 10.8017 41.3634 9.56594C40.3381 9.21711 39.27 8.20557 38.6588 6.90727L38.6584 6.90651C38.5893 6.76028 38.5268 6.61117 38.4709 6.45973L38.2753 5.92948L37.7728 6.18827C37.5794 6.28792 37.4246 6.36181 37.325 6.40635L37.3241 6.40679C34.6599 7.60575 30.5493 9.27716 26.7478 9.97545L26.7478 9.97546C24.115 10.4593 21.7145 10.4474 20.0064 9.64613L20.0064 9.64611C18.8981 9.12631 18.3141 8.44655 18.0373 7.75819L17.8585 7.31339L17.4065 7.47337C14.5671 8.47856 11.3352 9.45594 8.24536 9.70176L8.24532 9.70177C5.4178 9.92693 2.75575 9.53253 0.595867 8.09718C0.535782 8.05722 0.452274 7.88015 0.53094 7.70183L0.531114 7.70143C0.563007 7.62897 0.600427 7.6114 0.60677 7.60909C0.608076 7.60861 0.608948 7.60838 0.609458 7.60828C0.61111 7.60874 0.615295 7.61029 0.62212 7.61482L0.898673 7.19832L0.621899 7.61467C2.84788 9.09441 5.53705 9.42207 8.24598 9.20663L8.24603 9.20663C11.4161 8.95416 14.6914 7.94595 17.4924 6.94891Z"
                fill="black"
                stroke="url(#paint0_linear_3_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_4"
                  x1="0"
                  y1="5.5"
                  x2="65"
                  y2="5.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BE6C0F" />
                  <stop offset="1" stop-color="#E00025" />
                </linearGradient>
              </defs>
            </svg> */}

            <svg
              width="63"
              height="12"
              viewBox="0 0 63 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-6 left-12 "
            >
              <path
                d="M62.9413 3.19944C63.2504 4.59437 62.2866 5.43469 61.2658 6.01031C60.2898 6.56492 59.1511 6.97667 58.049 7.09852C53.0062 7.64052 47.9146 7.81698 42.9084 8.59008C38.3048 9.30015 33.7582 10.4892 29.24 11.6825C26.4014 12.4303 24.4981 11.9345 23.4123 9.36317C22.9771 8.33378 23.0178 7.07751 22.9121 5.91366C22.8429 5.15738 22.8999 4.38849 22.8999 3.3465C20.9356 3.90951 19.1178 4.24984 17.4382 4.9473C12.6557 6.93886 7.93008 9.07326 3.18009 11.1531C1.95192 11.6909 0.479749 11.2203 0.109673 10.1741C-0.27667 9.08587 0.37808 8.14471 1.75265 7.56489C5.25414 6.09433 8.67023 4.38009 12.2368 3.11121C15.7383 1.86754 19.3577 0.934778 22.9731 0.0986609C25.1529 -0.40553 26.4949 1.06923 26.4095 3.45994C26.3688 4.64058 26.2875 5.81703 26.2631 6.99768C26.2387 8.16993 26.7552 8.51025 27.8817 8.21194C35.9949 6.05232 44.226 4.73302 52.6117 4.35908C56.0115 4.20782 59.3951 3.6154 62.9373 3.20364L62.9413 3.19944Z"
                fill="url(#paint0_linear_3_7)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_3_7"
                  x1="0"
                  y1="6"
                  x2="63"
                  y2="6"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#BE6C0F" />
                  <stop offset="1" stop-color="#E00025" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-white">Docs</button>
            <button className="text-zinc-400 hover:text-white">
              Components
            </button>
            <button className="text-zinc-400 hover:text-white">Blog</button>
            <button className="text-zinc-400 hover:text-white">Roadmap</button>
            <div className="flex items-center gap-2 bg-zinc-900 rounded-full px-3 py-1.5">
              <Search className="w-4 h-4 text-zinc-400" />
              <span className="text-sm text-zinc-400">Search</span>
              <kbd className="text-xs bg-zinc-800 px-1.5 rounded">⌘K</kbd>
            </div>
            <button className="text-zinc-400 hover:text-white">
              <Github className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 pt-24 flex flex-col justify-center h-[70vh]">
        <div className="max-w-3xl z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Modern
            </span>
            ,
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              Lightweight
            </span>{" "}
            UI library for React Native
          </motion.h1>
          <p className="text-xl text-zinc-400 mb-8">
            Supports both Tailwind CSS and traditional Stylesheets.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-orange-600 to-red-700 hover:bg-blue-700 text-white rounded-full px-6 py-2 font-medium">
              Get Started →
            </button>
            <div className="flex items-center gap-2 bg-zinc-900 rounded-lg px-4 py-2">
              <span className="font-mono text-sm">$ npm i trend-ui</span>
              <button className="text-zinc-400 hover:text-white">
                <Copy className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Floating UI Elements */}
        <div className="absolute top-32 right-20 space-y-4 w-[800px]">
          <div className="flex gap-20 items-center absolute left-[30%] ">
            <AnimatedCircularProgressBar />
            <div className="flex gap-4 ">
              <LoadingButton />

              <NotificationBell />

              <TooggleSwitch />
            </div>
          </div>

          <Call />
          <ProductCard />

          <AvatarCircles />

          <Pagination />

          {/* <InputNext /> */}

          {/* <NotificationCard /> */}

          <Liquid />

          <Counter />
          <Notch />
          {/* <CardDemo /> */}
        </div>

        {/* Background Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-purple-500/20 to-transparent"></div>
      </main>
    </div>
  );
}

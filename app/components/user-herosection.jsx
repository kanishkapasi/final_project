import { motion } from "framer-motion";
import Link from "next/link";

export default function UserHeroSection() {
  return (
    <div className="bg-white w-full">
      <div className="w-full py-24 sm:px-6 sm:py-32 md:h-full mt-14 lg:mt-0 md:mt-0">
        <motion.div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 pb-11">
          <svg
            viewBox="0 0 1024 1024"
            className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true">
            <circle
              cx={512}
              cy={512}
              r={512}
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <motion.h2
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
              initial={{ y: -500 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}>
              Search your Events.
              <br />
              Start using our Website today.
            </motion.h2>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2.5 }}>
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
              Malesuada adipiscing sagittis vel nulla.
            </motion.p>
            <motion.div
              className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start"
              initial={{ x: -500 }}
              animate={{ x: 0 }}
              transition={{ duration: 2 }}>
              <Link
                href={"/userview-dashboard"}
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get started
              </Link>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

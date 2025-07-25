import { Helmet } from "react-helmet-async";
import { BiUser } from "react-icons/bi";
import News from "../../components/sections/news";
import WorkTime from "../../components/sections/worktime";
import { onlinePersons } from "../../constants/onlinePersons";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../components/ui/avatar";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title> {`Dashboard - KerjaYuk`}</title>
        <meta
          name="description"
          content="The starting point for your next project with Minimal UI Kit, built on the newest version of Material-UI ©, ready to be customized to your style"
        />
        <meta
          name="keywords"
          content="react,material,kit,application,dashboard,admin,template"
        />
      </Helmet>

      <div className="my-8 px-4 md:px-8">
        {/* Hello section */}
        <h1 className="text-xl">Hi, Good morning!</h1>

        {/* Card section */}
        <div className="mt-4 bg-gradient-to-r from-pink-600 via-rose-500 to-red-400 rounded-xl p-6 text-white shadow-lg">
          {/* Top section */}
          <div className="flex justify-between">
            {/* Profil picture and bio */}
            <div className="flex gap-3 items-start">
              <div className="flex justify-center items-center rounded-full p-2 bg-white">
                <BiUser className="text-[2rem] md:text-[5rem] text-black" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-bold md:text-xl">Tabay</h2>
                <span className="italic text-sm md:text-md">
                  UI/UX Designer
                </span>
              </div>
            </div>

            {/* Join date */}
            <div className="flex flex-col ">
              <span className="italic text-right text-sm md:text-md">
                Member since
              </span>
              <h2 className="font-bold md:text-xl">01 Juni 2021</h2>
            </div>
          </div>

          {/* Bottom section */}
          <div className="flex justify-between items-end mt-4">
            {/* Location */}
            <div className="flex flex-col">
              <span className="italic text-sm md:text-md">Location</span>
              <h2 className="font-bold md:text-xl">Kantor Sahid</h2>
            </div>

            {/* Additional info */}
            <span className="italic">ICO</span>
          </div>
        </div>

        {/* Activity section */}
        <WorkTime />
      </div>

      {/* PCS News */}
      <div className="px-4 md:px-8">
        <h2 className="text-lg font-bold">PCS News</h2>
      </div>
      <News />

      {/* Online Section */}
      <div className="mt-4 mb-8 px-4 md:px-8">
        <h2 className="text-lg font-bold">Online</h2>
        <div className="bg-white py-8 px-4 rounded-3xl shadow-lg w-full max-w-5xl mx-auto mt-4">
          <div className="flex justify-center items-start overflow-x-auto px-2">
            {onlinePersons.map((person, index) => (
              <div
                key={index}
                className={`flex flex-col items-center text-sm flex-shrink-0 w-[70px] sm:w-[80px] md:w-[90px] ${
                  index !== 0 ? "-ml-8" : ""
                }`}
              >
                <Avatar className="w-12 h-12 border-3 border-white shadow-md">
                  <AvatarImage src={person.image} alt={person.name} />
                  <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium text-xs mt-1">{person.name}</span>
                <span className="text-gray-500 text-[10px]">
                  {person.location}
                </span>
              </div>
            ))}

            <div className="flex flex-col items-center justify-center flex-shrink-0 w-[70px] sm:w-[80px] md:w-[90px] -ml-8">
              <div className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center text-[10px] text-center font-bold">
                10
                <br />
                more
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

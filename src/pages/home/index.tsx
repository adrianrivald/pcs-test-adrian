import { Helmet } from "react-helmet-async";
import { BiUser } from "react-icons/bi";
import News from "../../components/sections/news";
import WorkTime from "../../components/sections/worktime";
import { onlinePersons } from "../../constants/onlinePersons";

export default function HomePage() {
  const avatarSize = Math.max(40, 120 - onlinePersons.length * 5); // minimum size is 40px

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

        <div className="bg-white shadow-xl rounded-2xl py-8 px-4 flex items-start justify-center mt-4">
          {onlinePersons.map((person, index) => {
            return (
              <div className=" flex flex-col gap-1 justify-center items-center -ml-4">
                <img
                  src={`https://avatar.iran.liara.run/public/${index + 1}`}
                  className={`rounded-full border border-white border-3`}
                  style={{
                    width: `${avatarSize}px`,
                    height: `${avatarSize}px`,
                  }}
                />
                <span className="font-bold text-xs">{person.firstName}</span>
                <span className="text-[10px]">{person.lastName}</span>
              </div>
            );
          })}
          <div className="flex flex-col gap-1 justify-center items-center -ml-4">
            <div
              className={`rounded-full bg-red-600 border border-white border-3 text-white flex items-center justify-center text-center text-sm`}
              style={{
                width: `${avatarSize}px`,
                height: `${avatarSize}px`,
              }}
            >
              10
              <br /> more
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import Button from "../Button";

const UserProfile = () => {
  return (
    <div className="ml-20 mr-20">
      <div className="flex items-center gap-10">
        <div className="w-28 h-28 bg-blue0 rounded-full -mr-2 bg-gray0 text-white text-sm mt-5"></div>

        <div>
          <p className="text-3xl font-medium">John Doe</p>

          <div className="flex items-center gap-3 opacity-80 text-xs mt-2">
            <div className="flex items-center gap-1">
              <svg
                className="w-3 h-3 text-gray-800 dark:text-white opacity-80"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M10 6v4l3.276 3.276M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>{" "}
              <p>11:24 local time</p>
            </div>

            <div className="flex items-center gap-1">
              <svg
                className="w-3 h-3 text-gray-800 dark:text-white opacity-80"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="m19 2-8.4 7.05a1 1 0 0 1-1.2 0L1 2m18 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m18 0v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2"
                />
              </svg>
              <p>john.doe@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between mr-10">
        <div></div>
        <div className="flex justify-items-end">
          <Button className="bg-sky0 w-24 h-8 rounded-md text-white text-sm -mt-2">
            Edit profile
          </Button>
        </div>
      </div>
      <div className=" flex justify-between">
        <div className="grid gap-5">
          <div className="text-xl font-medium w-[325%] h-72 bg-gray1 mt-7 rounded-md">
            <p>Tasks</p>
          </div>
          <div className="text-xl font-medium w-[325%] h-44 bg-gray1 rounded-md">
            <p>My recent projects</p>
          </div>
        </div>
        <div className="grid">
          <div className="text-xl font-medium w-[98%] h-32 bg-gray1 mt-7 rounded-md">
            <p>Tasks</p>
          </div>
          <div className="text-xl font-medium w-[98%] h-32 bg-gray1 mr-56 rounded-md">
            <p>My recent projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

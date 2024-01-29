import React from "react";

const MobileNav = ({
  showMenu,
  setShowMenu,
}: {
  showMenu: boolean;
  setShowMenu: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <header className="items-center overflow-y-hidden z-50 bg-[#232323]   flex max-w-full flex-col pb-12  absolute inset-0">
      <div className="justify-between items-stretch self-stretch flex w-full gap-5 p-5">
        <div className="items-stretch flex justify-between gap-1.5">
          <img
            loading="lazy"
            src="/logosvg.svg"
            className="aspect-w-16 aspect-h-9 h-9"
            aria-label="Logo"
          />
          {/* <div className="text-white text-base font-bold leading-6 tracking-tight grow whitespace-nowrap">
            AiDocker
          </div> */}
        </div>
        <button onClick={() => setShowMenu(false)}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/eabcfcdedf709749863b7e07cfe917d97401ea1a371fd10c1698a4fcf7ff3d2f?apiKey=caf73ded90744adfa0fe2d98abed61c0&"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
          />
        </button>
      </div>
      <nav style={{ textAlign: "left" }}>
        <h1 className="text-white text-3xl font-bold leading-9 tracking-normal self-center mt-16">
          Home
        </h1>
        <h1 className="text-white text-opacity-70 text-3xl font-bold leading-9 tracking-normal self-center mt-6">
          About us
        </h1>
        <h1 className="text-white text-opacity-70 text-3xl font-bold leading-9 tracking-normal self-center mt-6">
          Roadmap
        </h1>
        <h1 className="text-white text-opacity-70 text-3xl font-bold leading-9 tracking-normal self-center mt-6">
          Team
        </h1>
      </nav>
      <form>
        <button
          className="text-neutral-900 text-base font-medium leading-5 tracking-normal justify-center items-stretch shadow-sm bg-white self-center w-[247px] max-w-full mt-80 mb-3.5 px-3 py-2.5 rounded-[30px]"
          aria-label="Join Whitelist"
        >
          Join Whitelist
        </button>
      </form>
    </header>
  );
};

export default MobileNav;

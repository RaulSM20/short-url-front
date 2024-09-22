import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div id="layout">
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      <div className="flex flex-col my-5">
        <header className="flex justify-between items-center py-3 w-full xl:w-[1420px] mx-auto">
          <img
            className="rounded-full w-12 h-12"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"
            alt="shorURL"
          />

          <nav className="flex flex-row gap-x-10 opacity-90">
            <a href="#top">Github</a>
            <a href="#about">Username</a>
          </nav>
        </header>
        <Outlet />
      </div>
    </div>
  );
};

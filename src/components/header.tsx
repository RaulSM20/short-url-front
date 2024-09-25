export const Header = () => {
  return (
    <>
      <header className="flex mx-auto w-full pb-3 pt-4 lg:px-4 sticky top-0 z-50 bg-neutral-900 border-b border-white/30">
        <div className="flex xl:w-[1200px] w-10/12 mx-auto justify-between items-center">
          <img
            className="rounded-full w-12 h-12"
            src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-PNG-Cutout.png"
            alt="shorURL"
          />

          <nav className=" flex gap-5">
            <a href="#top">Github</a>
            <a href="#about">Username</a>
          </nav>
        </div>
      </header>
    </>
  );
};

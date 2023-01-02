import NavItem from './NavItem';
import Logo from '../img/block-note.svg';

const MainNavigation = () => {
  return (
    <nav className="w-full bg-gray-200/95 p-5 flex items-center justify-between pr-10 fixed z-10">
      <div className="flex gap-2 items-center">
        <img src={Logo} alt="Logo" className="h-10 w-10" />
        <h1 className="text-2xl font-semibold text-black/90">RemixNotes</h1>
      </div>
      <div className="flex gap-5">
        <NavItem to="/" text="Home" />
        <NavItem to="/notes" text="Notes" />
      </div>
    </nav>
  );
};

export default MainNavigation;

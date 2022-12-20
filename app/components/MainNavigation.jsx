import NavItem from './NavItem';
import Logo from '../img/block-note.svg';

const MainNavigation = () => {
  return (
    <nav className="w-full bg-gray-200/75 p-5 flex items-center justify-between pr-10 fixed">
      <img src={Logo} alt="Logo" className="h-10 w-10" />
      <div className="flex gap-5">
        <NavItem to="/" text="Home" />
        <NavItem to="/notes" text="My Notes" />
      </div>
    </nav>
  );
};

export default MainNavigation;

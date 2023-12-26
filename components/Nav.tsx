import { NavItem } from "./NavItem";

const Nav = () => {
  return (
    <nav className="flex justify-center py-5 sticky top-0">
      <div className="bg-black/10 flex w-fit border border-white/5 rounded-full p-2 space-x-1">
        <NavItem text={"About"} />
        <NavItem text={"Product"} />
        <NavItem text={"Pricing"} />
        <NavItem text={"Contact"} />
      </div>
    </nav>
  );
};

export default Nav;

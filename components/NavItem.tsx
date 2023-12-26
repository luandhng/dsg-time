import Link from "next/link";

interface NavItemProps {
  text: string;
}

export const NavItem = ({ text }: NavItemProps) => {
  return (
    <Link
      className="hover:bg-black/10 duration-300 text-neutral-500 hover:text-neutral-300  border border-white/0 hover:border-white/10 block font-medium py-3.5 w-28 text-center px-5 rounded-full"
      href={""}
    >
      {text}
    </Link>
  );
};

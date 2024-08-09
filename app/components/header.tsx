import Link from "next/link";
import PagesIcon from '@mui/icons-material/Pages';
import UserAvatar from "./avatar";

const Header = () => {
  return (
    <header className="fixed py-3 w-full bg-white z-10 shadow">
      <div className="flex justify-between items-center max-w-[1220px] m-auto">
        <Link href="/"><PagesIcon /></Link>
        <nav>
          <ul className="flex gap-3">
            <Link href="/posts" className="hover:underline">
              <span className="font-bold text-xl">Posts</span>
            </Link>
          </ul>
        </nav>
        <div className="flex gap-3">
          <UserAvatar seed='headerIcon' />
        </div>
      </div>
    </header>
  )
};

export default Header;

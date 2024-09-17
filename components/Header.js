import Link from "next/link";
import Logout from "./Logout";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header className="p-4 sm:p-8 flex items-center justify-between gap-4">
      <Link href={"/"}>
        <h1 className="text-base sm:text-lg textGradient font-fancy">
          Mood Tracker
        </h1>
      </Link>
      <div>
        <DarkModeToggle />
        <Logout />
      </div>
    </header>
  );
}

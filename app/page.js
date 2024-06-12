import Dashboard from "./dashboard/page";

export default function Home() {

  return (
    <div>
      <header>
        <nav>
        <div className="w-full flex justify-between bg-red-300">
          <div>
            Logo
          </div>
          <div>
            Logout
          </div>
        </div>
      </nav>
      </header>
      <Dashboard/>
      <footer>
        Developed by Ajayghosh M
      </footer>

    </div>
  );
}

import Dashboard from "./dashboard/page";

export default function Home() {

  return (
    <div>
      <header>
        <nav class="bg-white border-gray-200 dark:bg-gray-900">
          <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rounded-lg rtl:space-x-reverse">
              <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7a3ec529632909.55fc107b84b8c.png" class="h-8" alt="Flowbite Logo" />
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Dashboard Creator</span>
            </a>
            <a href="https://www.linkedin.com/in/ajayghoshm/" class="flex  text-xs items-center space-x-3 rounded-lg rtl:space-x-reverse">
              Contact Me
            </a>
          </div>
        </nav>
      </header>
      <Dashboard />
      <footer>
        Developed by Ajayghosh M
      </footer>

    </div>
  );
}

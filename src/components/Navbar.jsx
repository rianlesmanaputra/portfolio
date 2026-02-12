function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-gray-950/70 border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-lg font-bold text-cyan-400">Rian.dev</h1>

        <ul className="flex gap-8 text-sm text-gray-400">
          <li>
            <a href="#home" className="hover:text-white transition">
              Home
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-white transition">
              Projects
            </a>
          </li>
          <li>
            <a href="#certificates" className="hover:text-white transition">
              Certificates
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

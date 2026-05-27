import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const desktopBase =
        "text-sm font-medium px-3 py-2 rounded transition-colors duration-200 relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600 after:origin-left after:transition-transform after:duration-200";
    const desktopActive = "text-blue-600 after:scale-x-100";
    const desktopInactive = "text-gray-700 hover:text-blue-600 hover:bg-gray-50 after:scale-x-0 hover:after:scale-x-100";

    const mobileBase = "block text-sm font-medium px-3 py-2 rounded transition-colors duration-150";
    const mobileActive = "text-blue-600 bg-gray-50";
    const mobileInactive = "text-gray-700 hover:text-blue-600 hover:bg-gray-50";

    const mobileMenuClass = `md:hidden absolute right-6 top-full mt-2 w-48 bg-white rounded shadow-lg z-50 origin-top transform transition-all duration-200 ${
        open ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-0 opacity-0 pointer-events-none"
    }`;

    return (
        <header className="relative w-full bg-white/60 backdrop-blur-sm border-b border-gray-200 shadow-sm">
            <div className="max-w-[1280px] mx-auto flex items-center justify-between py-4 px-6">
                <div className="flex items-center gap-3">
                    <div className="text-2xl font-extrabold text-blue-600">MyStore</div>
                </div>

                <nav className="flex items-center gap-4">
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) => `${desktopBase} ${isActive ? desktopActive : desktopInactive}`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/store"
                                className={({ isActive }) => `${desktopBase} ${isActive ? desktopActive : desktopInactive}`}
                            >
                                Store
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `${desktopBase} ${isActive ? desktopActive : desktopInactive}`}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>

                    <button
                        className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100 inline-flex items-center justify-center"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label="Toggle menu"
                        onClick={() => setOpen((s) => !s)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <div className="flex flex-col gap-1 items-center justify-center">
                            <span
                                className={`block h-0.5 w-6 bg-gray-700 transform transition duration-200 ${
                                    open ? "translate-y-2 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-gray-700 transform transition duration-200 ${
                                    open ? "scale-x-0 opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`block h-0.5 w-6 bg-gray-700 transform transition duration-200 ${
                                    open ? "-translate-y-2 -rotate-45" : ""
                                }`}
                            />
                        </div>
                    </button>
                </nav>
            </div>

            <div id="mobile-menu" className={mobileMenuClass} aria-hidden={!open}>
                <ul className="flex flex-col p-3 space-y-1">
                    <li>
                        <NavLink to="/" onClick={() => setOpen(false)} className={({ isActive }) => `${mobileBase} ${isActive ? mobileActive : mobileInactive}`}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/store" onClick={() => setOpen(false)} className={({ isActive }) => `${mobileBase} ${isActive ? mobileActive : mobileInactive}`}>
                            Store
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" onClick={() => setOpen(false)} className={({ isActive }) => `${mobileBase} ${isActive ? mobileActive : mobileInactive}`}>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}
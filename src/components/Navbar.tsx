import ThemeToggle from './ThemeToggle';
import logo from '/Logo.svg';

function Navbar() {
    return (
        <header className="bg-white dark:bg-black sticky top-0 z-50 shadow-md">
            <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
                <a className="block" href="#">
                    <img src={logo} alt="" className='size-10' />
                </a>

                <div className="flex flex-1 items-center justify-end md:justify-between">
                    <nav aria-label="Global" className="hidden md:block">
                        <ul className="flex items-center gap-6 text-sm">
                            <li>
                                <a className="text-gray-500 font-semibold transition hover:text-gray-500/75" href="#"> Home </a>
                            </li>

                            <li>
                                <a className="text-gray-500 font-semibold transition hover:text-gray-500/75" href="#"> Our Labs </a>
                            </li>

                            <li>
                                <a className="text-gray-500 font-semibold transition hover:text-gray-500/75" href="#"> FAQ </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="flex items-center gap-4">
                        <ThemeToggle />

                        <button
                            className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                        >
                            <span className="sr-only">Toggle menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="size-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Navbar
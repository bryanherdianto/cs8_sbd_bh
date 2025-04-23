import Main from '/Main.png';

function Header() {
    return (
        <section id="home" className="bg-white dark:bg-black lg:grid lg:place-content-center">
            <div
                className="mx-auto max-w-screen-xl px-4 pt-16 lg:pt-0 pb-16 sm:px-6 sm:pb-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:pb-32"
            >
                <div className="max-w-prose text-left pb-5">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                        Understand Digilab FTUI and
                        <strong className="text-blue-700"> increase </strong>
                        your aura
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 dark:text-white sm:text-lg/relaxed">
                    Digilab FTUI is a multidisciplinary lab that brings together areas from Digital Systems to Programming, empowering students with hands-on experience and collaborative learning to shape the future of technology.
                    </p>

                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border border-blue-700 bg-blue-700 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-blue-800"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <img src={Main} alt="Logo Digilab FTUI" />
            </div>
        </section>
    )
}

export default Header
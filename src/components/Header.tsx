import logo from '/Logo.svg';

function Header() {
    return (
        <section className="bg-white dark:bg-black lg:grid lg:place-content-center">
            <div
                className="mx-auto max-w-screen-xl px-4 pt-16 lg:pt-0 pb-16 sm:px-6 sm:pb-24 md:grid md:grid-cols-2 md:items-center md:gap-4 lg:px-8 lg:pb-32"
            >
                <div className="max-w-prose text-left pb-5">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white sm:text-5xl">
                        Understand what is netleb and
                        <strong className="text-indigo-600"> increase </strong>
                        your aura
                    </h1>

                    <p className="mt-4 text-base text-pretty text-gray-700 dark:text-white sm:text-lg/relaxed">
                        netleb is better than all labs in University of Indonesia's Faculty of Engineering. Be a part of us now!!
                    </p>

                    <div className="mt-4 flex gap-4 sm:mt-6">
                        <a
                            className="inline-block rounded border border-indigo-600 bg-indigo-600 px-5 py-3 font-medium text-white shadow-sm transition-colors hover:bg-indigo-700"
                            href="#"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                <img src={logo} alt="Logo netleb" />
            </div>
        </section>
    )
}

export default Header
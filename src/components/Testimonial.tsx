import Koorlab from '/Koorlab.jpg';

export default function Testimonial() {
  return (
    <section id="testimony" className="relative isolate overflow-hidden bg-white dark:bg-black px-6 pb-24 sm:pb-32 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-100), white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white dark:bg-black sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <div className="flex flex-row items-center justify-center font-semibold text-4xl font-mono text-black dark:text-white">
          Testimony
        </div>
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-gray-900 dark:text-white sm:text-2xl/9">
            <p>
              "Digilab FTUI sebagai lab paling jago di UI! Merdeka!!"
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              alt=""
              src={Koorlab}
              className="mx-auto size-20 rounded-full"
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900 dark:text-white text-center">Giovan Christoffel Sihombing</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-gray-900 dark:fill-gray-500">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-600 dark:text-gray-300 text-center">Koorlab Digilab FTUI</div>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}

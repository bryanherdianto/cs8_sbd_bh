import { useState } from 'react';

function Faq() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqItems = [
        {
            question: "What is Digilab FTUI?",
            answer: "Digilab FTUI is a digital innovation lab at the Faculty of Engineering, Universitas Indonesia, aimed at fostering creativity and technological advancements."
        },
        {
            question: "How can I join Digilab FTUI?",
            answer: "You can join Digilab FTUI by participating in our programs, workshops, or applying through our official website."
        },
        {
            question: "What kind of projects does Digilab FTUI work on?",
            answer: "Digilab FTUI works on a variety of projects including software development, IoT, AI, and other cutting-edge technologies."
        },
        {
            question: "Who can participate in Digilab FTUI activities?",
            answer: "Students, faculty members, and industry partners are welcome to participate in Digilab FTUI activities."
        }
    ];

    return (
        <div id="faq" className="space-y-4 pb-16 sm:pb-24 lg:pb-32 px-2">
            {faqItems.map((item, index) => (
                <div key={index} className="group border border-gray-100 rounded-md overflow-hidden bg-gray-50 dark:bg-black">
                    <button
                        onClick={() => toggleFaq(index)}
                        className="flex w-full items-center justify-between gap-1.5 p-4 text-gray-900 dark:text-white text-left"
                    >
                        <h2 className="text-lg font-medium">{item.question}</h2>

                        <svg
                            className={`size-5 shrink-0 transition-transform duration-300 ${openIndex === index ? "-rotate-180" : ""}`}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    <div 
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                            openIndex === index ? "max-h-48" : "max-h-0"
                        }`}
                    >
                        <p className="px-4 pb-4 text-gray-900 dark:text-white">
                            {item.answer}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Faq;
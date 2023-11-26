import React, { useState } from 'react';

import Footer from "../components/UI/Footer/Footer";
import NavBar from "../components/UI/NavBar/NavBar";
import "/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/styles/HataGuide.css";
import faqData from '/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/data/faqData.jsx'

const HataGuide = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return(
        <div className="hataguide">
            <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
            <div className="container my-36 mx-auto md:px-6 guide-container">
                <section>
                    <h2 className="mb-16 text-center text-3xl font-bold text-gray-700">
                        Ответы на часто задаваемые вопросы
                    </h2>

                    <div className="grid gap-6 lg:grid-cols-3">
                        {faqData.map((faq, index) => (
                            <div key={index} className="mb-6 md:mb-8 lg:mb-12">
                                <p className="mb-4 font-bold">{faq.question}</p>
                                <p className="text-neutral-500 dark:text-neutral-300">
                                    {faq.answer}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
            <Footer/>
        </div>
    );
}

export default HataGuide;


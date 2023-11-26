import React from "react";
import Button from '/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/components/button/Button.jsx';
import "/Users/batyrbekasel/Desktop/StudHata_front/studhata_front/studhata/src/styles/Main.css"

const Hero = ()=>{

    const yourClickHandlerFunction = () => {
        alert('Button clicked!');
      };

    return(
    <div className="relative isolate px-6 pt-14 lg:px-8 hero">
         <div className="mx-auto max-w-2xl py-24 sm:py-40 lg:py-48">
          <div className="text-center">
            <h1 className="font-bold text-gray-100 text-fade-in" style={{fontSize:'3rem'}}>
            Найди идеальное жилье для студентов!
            </h1>
            <p className="mt-4 text-lg leading-8 text-gray-100 text-fade-in">
            Мы предоставляем вам широкий выбор вариантов жилья, включая комнаты в квартирах, квартиры целиком, дома и общежития. Вы можете легко найти то, что подходит именно вам
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button text="Начать" onClick={yourClickHandlerFunction} className="custom-button"/>
                <a href="#" className="text-l font-semibold leading-6 text-gray-100">
                Узнать подробнее <span aria-hidden="true">→</span>
                </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
        </div>
      </div>
    );
}

export default Hero;
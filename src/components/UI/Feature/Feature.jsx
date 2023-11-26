import React from "react";
import { StarIcon, HomeIcon, ChatBubbleLeftIcon, UserIcon } from '@heroicons/react/24/outline'

const features = [
    {
      name: 'Поиск жилья',
      description:
        'StudHata предоставляет пользователям широкий выбор вариантов жилья, включая комнаты в квартирах, квартиры целиком, дома и общежития.',
      icon: HomeIcon,
    },
    {
      name: 'Поиск сожителей',
      description:
        'StudHata предоставляет возможность студентам искать подходящих сожителей для совместной аренды жилья. Поиск можно осуществлять на основе совпадающих интересов и предпочтений.',
      icon: UserIcon,
    },
    {
      name: 'Система рейтинга арендодателей',
      description:
        'Платформа разрабатывает систему рейтинга арендодателей, которая позволяет пользователям оценивать и оставлять отзывы о своих арендодателях. Это помогает избегать ненадежных арендодателей и создает прозрачность на рынке.',
      icon: StarIcon,
    },
    {
      name: 'Связь с арендодателями',
      description:
        'StudHata обеспечивает безопасную и удобную связь между арендаторами и арендодателями. Пользователи могут отправлять сообщения, задавать вопросы и договариваться о просмотре жилья, все внутри платформы.',
      icon: ChatBubbleLeftIcon,
    },
  ]

const Feature = ()=>{
    return(
        <div className='py-12 shadow-lg feature'>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Функции нашего сайта StudHata
                </p>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Наша цель - сделать процесс аренды жилья для студентов простым, удобным и прозрачным, обеспечивая им доступ к множеству вариантов жилья, которые соответствуют их уникальным требованиям.
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                    {features.map((feature) => (
                    <div key={feature.name} className="relative pl-16">
                        <dt className="text-base font-semibold leading-7 text-gray-900">
                        <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg main-icon">
                            <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                        {feature.name}
                        </dt>
                        <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                    </div>
                    ))}
                </dl>
                </div>
        </div>
    </div>
    );
}

export default Feature;
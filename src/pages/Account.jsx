import React, { useState } from "react";
import NavBar from "../components/UI/NavBar/NavBar";
import img1 from "../assets/StudHata-3.png"
import "../styles/Account.css"

const Account = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [profilePhoto, setProfilePhoto] = useState(img1);

    const [userData, setUserData] = useState({
        firstName: "Асель",
        lastName: "Батырбек",
        gender: "Женщина",
        contactNumber: "+7 778 833 86 40",
        email: "assel@example.com",
        birthday: "Март 05, 2004",
        about:"loremfrkmlvgjnlt frmed cfjknelv3tkrcef dvnjkcfeijnt 5fmr2 ecffnjtfekdcijnv frdew jvkfewdl"
    });
    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
       
    };

    const handleChange = (field, value) => {
        setUserData((prevData) => ({
            ...prevData,
            [field]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setProfilePhoto(reader.result);
            };

            reader.readAsDataURL(file);
        }
    };

    return(
        <div className="profile">
            <NavBar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
        <div className="mt-24">
            <div className="container mx-auto my-5 p-5">
                <div className="md:flex no-wrap md:-mx-2">
                {/* Left Side */}
                <div class="w-full md:w-3/12 md:mx-2">
                <div class="bg-white p-3 ">
                    <div class="image overflow-hidden">
                    <label htmlFor="profilePhoto" className="cursor-pointer">
                        <img
                            className="h-auto w-full mx-auto"
                            src={profilePhoto}
                            alt=""
                        />
                    </label>
                    <input
                        type="file"
                        id="profilePhoto"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                    />
                    </div>
                    <h1 class="text-gray-900 font-bold text-xl leading-8 my-1">{userData.lastName} {userData.firstName}</h1>
                    <h3 class="text-gray-600 font-lg text-semibold leading-6">Коротко о себе</h3>
                    <div className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                        {isEditing ? (
                            <input
                                type="text"
                                value={userData.about}
                                onChange={(e) => handleChange("about", e.target.value)}
                            />
                        ) : (
                            <span>{userData.about}</span>
                        )}
                    </div>
                    <ul
                        class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                        <li class="flex items-center py-3">
                            <span>Статус</span>
                            <span class="ml-auto"><span
                                    class="bg-green-500 py-1 px-2 rounded text-white text-sm">Active</span></span>
                        </li>
                        <li class="flex items-center py-3">
                            <span>Присоединился</span>
                            <span class="ml-auto">Ноябрь 07, 2016</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="w-full md:w-9/12 mx-2 h-64">
                <div class="bg-white p-3 shadow-sm rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span clas="text-green-500">
                            <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </span>
                        <span class="tracking-wide">Подробная информация</span>
                    </div>
                    <div class="text-gray-700">
                        <div class="grid md:grid-cols-2 text-sm">
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Имя</div>
                                <div className="px-4 py-2">
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                value={userData.firstName}
                                                onChange={(e) => handleChange("firstName", e.target.value)}
                                            />
                                        ) : (
                                            <span>{userData.firstName}</span>
                                        )}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Фамилия</div>
                                <div className="px-4 py-2">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={userData.lastName}
                                            onChange={(e) => handleChange("lastName", e.target.value)}
                                        />
                                    ) : (
                                        <span>{userData.lastName}</span>
                                    )}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Пол</div>
                                <div className="px-4 py-2">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={userData.gender}
                                            onChange={(e) => handleChange("gender", e.target.value)}
                                        />
                                    ) : (
                                        <span>{userData.gender}</span>
                                    )}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Контактный номер</div>
                                <div className="px-4 py-2">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={userData.contactNumber}
                                            onChange={(e) => handleChange("contactNumber", e.target.value)}
                                        />
                                    ) : (
                                        <span>{userData.contactNumber}</span>
                                    )}
                                </div>
                            </div>
                            {/* <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Current Address</div>
                                <div class="px-4 py-2">Beech Creek, PA, Pennsylvania</div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Permanant Address</div>
                                <div class="px-4 py-2">Arlington Heights, IL, Illinois</div>
                            </div> */}
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">Электронная почта</div>
                                <div className="px-4 py-2">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={userData.email}
                                            onChange={(e) => handleChange("email", e.target.value)}
                                        />
                                    ) : (
                                        <span>{userData.email}</span>
                                    )}
                                </div>
                            </div>
                            <div class="grid grid-cols-2">
                                <div class="px-4 py-2 font-semibold">День рождения</div>
                                <div className="px-4 py-2">
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            value={userData.birthday}
                                            onChange={(e) => handleChange("birthday", e.target.value)}
                                        />
                                    ) : (
                                        <span>{userData.birthday}</span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                        {isEditing ? (
                            <button
                                onClick={handleSaveClick}
                                className="text-white px-4 py-2 mt-4 button"
                            >
                                Сохранить
                            </button>
                        ) : (
                            <button
                                onClick={handleEditClick}
                                className="text-white px-4 py-2 mt-4 button"
                            >
                                Редактировать
                            </button>
                        )}
                </div>

                <div class="my-4"></div>
                <div class="bg-white p-3 shadow-sm rounded-sm">

                    <div class="grid grid-cols-2">
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Объявления</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Owner at Her Company Inc.</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                                <span clas="text-green-500">
                                    <svg class="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                                        <path fill="#fff"
                                            d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                </span>
                                <span class="tracking-wide">Место обучения</span>
                            </div>
                            <ul class="list-inside space-y-2">
                                <li>
                                    <div class="text-teal-600">Masters Degree in Oxford</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                                <li>
                                    <div class="text-teal-600">Bachelors Degreen in LPU</div>
                                    <div class="text-gray-500 text-xs">March 2020 - Now</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
        </div>
    );
}

export default Account;
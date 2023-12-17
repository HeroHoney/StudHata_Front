import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { useDispatch } from "react-redux";
import { openAuth, saveUserInfo } from "../store/features/user/userSlice";
import { axiosInstance } from "../config/config";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch();
  const toggleMode = () => {
    setIsRegistering(!isRegistering);
  };

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');


  const submitForm = async (event) => {
    event.preventDefault();
  
    const formData = {
      email: event.target['email'] ? event.target['email'].value : '',
      password: event.target['password'] ? event.target['password'].value : '',
    };
  
    if (isRegistering) {
      if(event.target['register-password'].value !== event.target['register-password-repeat'].value){
        alert("Пароли не совпадают");
        return;
      }
      formData.fullName = event.target['fullName'] ? event.target['fullName'].value : '';
      formData.email = event.target['newEmail'] ? event.target['newEmail'].value : '';
      formData.phoneNumber = event.target['phoneNumber'] ? event.target['phoneNumber'].value : '';
      formData.password = event.target['register-password'] ? event.target['register-password'].value : '';
      formData.university = event.target['university'] ? event.target['university'].value : '';
    }



    if(isRegistering){
      try {
        console.log(formData)
        const response = await axiosInstance.post(
          `/auth/register`,
          formData);
        console.log(response.data);
        navigate('/login');
        alert("Теперь нужно войти")
        
      } catch (error) {
        console.error(`Ошибка при регистрации:`, error);
      }
    }
    else{
      try {
        const response = await axiosInstance.post(
          `/auth/login`,
          formData);
        console.log(response.data);
        dispatch(saveUserInfo({accessToken : response.data.tokenType + response.data.accessToken}))
        dispatch(openAuth());
        navigate('/');
      } catch (error) {
        console.error(`Ошибка при входе'}:`, error);
      }
    }
  };
  
  useEffect(() => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError('Пароль должен содержать минимум одну заглавную букву, одну цифру и один из символов @$!%*?&');
    } else {
      setPasswordError('');
    }
  }, [password]);

  return (
    <div className="flex flex-col justify-center px-6 py-12 lg:px-8 login">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <Link to="/"><img className="mx-auto h-20 w-auto" src='StudHata.png' alt="Your Company"/></Link>
        <h2 className="mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100">
          {isRegistering ? "Регистрация" : "Вход в личный кабинет"}
        </h2>
      </div>

      <div className="mt-10 shadow-lg sm:mx-auto sm:w-full sm:max-w-sm px-6 py-6 login-form">
        <form className="space-y-6" onSubmit={submitForm} method="POST">
        {!isRegistering && (
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        )}

          {!isRegistering && (
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                <div className="text-sm">
                  <a href="#" className="font-semibold login-text">Забыли пароль?</a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          {isRegistering && (
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium leading-6 text-gray-900">ФИО</label>
              <div className="mt-2">
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            
          )}

          {isRegistering && (
            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium leading-6 text-gray-900">Номер телефона</label>
              <div className="mt-2">
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}
          {isRegistering && (
            <div>
              <label htmlFor="newEmail" className="block text-sm font-medium leading-6 text-gray-900">Электронная почта</label>
              <div className="mt-2">
                <input
                  id="newEmail"
                  name="newEmail"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          {isRegistering && (
            <div>
              <label htmlFor="university" className="block text-sm font-medium leading-6 text-gray-900">Университет</label>
              <div className="mt-2">
                <input
                  id="university"
                  name="university"
                  type="text"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          {isRegistering && (
            <div>
              <label htmlFor="register-password" className="block text-sm font-medium leading-6 text-gray-900">Пароль</label>
              <div className="mt-2">
                <input
                  id="register-password"
                  name="register-password"
                  type="password"
                  autoComplete="new-password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {passwordError && <p className="text-red-500 text-xs mt-1">{passwordError}</p>}
              </div>
            </div>
          )}

          {isRegistering && (
            <div>
              <label htmlFor="register-password-repeat" className="block text-sm font-medium leading-6 text-gray-900">Повторите пароль</label>
              <div className="mt-2">
                <input
                  id="register-password-repeat"
                  name="register-password-repeat"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          )}

          <div>
            <button type="submit" className="flex w-full justify-center rounded-md px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 login-buttom">
              {isRegistering ? "Зарегистрироваться" : "Войти"}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          {isRegistering ? "Уже есть аккаунт?" : "Cоздать новый аккаунт"}
          <a href="#" className="font-semibold leading-6 login-text" onClick={toggleMode}>
            {isRegistering ? "Войти" : "Зарегистрироваться"}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
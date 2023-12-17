import React from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon,  XMarkIcon } from '@heroicons/react/24/outline';
import "../../../components/UI/NavBar/NavBar.module.css";
import Logo from "../../../assets/StudHata-3.png";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeAuth } from '../../../store/features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const NavBar = ({ mobileMenuOpen, setMobileMenuOpen, isRegistering }) => {
  const {isAuth} = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const navigation = isAuth
    ? [
        { name: 'Жилье', href: '/houses' },
        { name: 'Сожители', href: '/roommates' },
        { name: 'Сдать в аренду', href: '/createhouseads' }, 
        { name: 'Создать обьявление', href: '/createroommate' }, 
        { name: 'Hata Guide', href: '/hataguide' },
      ]
    : [
        { name: 'Жилье', href: '/houses' },
        { name: 'Сожители', href: '/roommates' },
        { name: 'Сдать в аренду', href: '/login' },
        { name: 'Создать обьявление', href: '/login' },
        { name: 'Hata Guide', href: '/hataguide' },
      ];
  const headerStyle = {
    position: 'fixed', 
    top: 0,
    left: 0,
    width: '100%',
    background: '#045F7B',
    borderRadius: '15px',
  };
  const logOut = () => { 
    navigate('/');
    dispatch(closeAuth())

   }
  return (
    <header style={headerStyle} className="absolute inset-x-0 top-0 z-50 header-fade-in">
      <nav className="flex items-center justify-between p-3 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-10 w-auto" src='StudHata.png' alt="" />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link key={item.name} to={item.href} className="text-l font-semibold leading-10 text-gray-100 ">
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-5">
          {isAuth ? (
            <>
              <Link to="/profile" className="text-l font-semibold leading-6 text-gray-100">
                Аккаунт
              </Link>
              
              <button onClick={() => logOut()} className="text-l font-semibold leading-6 text-gray-100">
                Выйти
              </button>
            </>
          ) : (
            <Link to="/login" className="text-l font-semibold leading-6 text-gray-100">
              Войти <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src={Logo}
                  alt=""
                />
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    to="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Войти
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
    </header>
  );
}

export default NavBar;
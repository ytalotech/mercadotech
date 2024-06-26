import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '#' },
    // { name: 'Serviços', href: '#' },
    // { name: 'Loja', href: '#' },
    { name: 'Contato', href: '#contact' },
    { name: 'Localização', href: '#localization' },
    { name: 'Parceiros', href: 'https://ytalotech.github.io/agronegocio/' },
]

import logo from '../assets/logo.jpeg';

export default function Menu() {

    const imageStyle = {
        width: '100px', // Defina a largura desejada da imagem
        // height: '200px', // Defina a altura desejada da imagem
        borderRadius: '10%', // Isso arredondará a imagem em um círculo
      };

    return (
        <div className="relative overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl">
                <div className="relative z-10 bg-white pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
                    <svg
                        className="absolute inset-y-0 right-0 hidden h-full w-48 translate-x-1/2 transform text-white lg:block"
                        fill="currentColor"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                        aria-hidden="true"
                    >
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <Popover>
                        <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
                            <nav className="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                                <div className="flex flex-shrink-0 flex-grow items-center lg:flex-grow-0">
                                    <div className="flex w-full items-center justify-between md:w-auto">
                                        <a href="#" className='p-2 bg-orange-600 text-stone-50 rounded-md'>
                                            <span className="sr-only">Your Company</span>
                                            {/* <img
                                                alt="Your Company"
                                                className="h-8 w-20 sm:h-10"
                                                // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                src={logo}
                                                style={imageStyle}
                                            /> */}
                                            MercadoTech
                                        </a>
                                        <div className="-mr-2 flex items-center md:hidden">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Open main menu</span>
                                                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden md:ml-10 md:block md:space-x-8 md:pr-4">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </nav>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="duration-150 ease-out"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="duration-100 ease-in"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Popover.Panel
                                focus
                                className="absolute inset-x-0 top-0 z-10 origin-top-right transform p-2 transition md:hidden"
                            >
                                <div className="overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-black ring-opacity-5">
                                    <div className="flex items-center justify-between px-5 pt-4">
                                        <div className="p-2 bg-orange-600 text-stone-50 rounded-md">
                                            {/* <img
                                                className="h-8 w-auto"
                                                // src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                                alt=""
                                                src={logo}
                                                style={imageStyle}
                                            /> */}
                                            MercadoTech
                                        </div>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                                <span className="sr-only">Close main menu</span>
                                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="space-y-1 px-2 pt-2 pb-3">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </Popover.Panel>
                        </Transition>
                    </Popover>

                    <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl font-bold tracking-tight text-green-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Venha ganhar dinheiro na</span>{' '}
                                <span className="block  text-orange-600 xl:inline">MercadoTech</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                                Está precisando de uma renda extra, aqui você pode vender seus produtos ou conseguir um novo serviço. Somos um app voltado para os pequenos, médios, grandes produtores e prestadores de serviços.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:h-full lg:w-full"
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
                    alt=""
                />
            </div>
        </div>
    )
}

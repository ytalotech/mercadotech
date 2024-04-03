import { BoltIcon, ChatBubbleBottomCenterTextIcon, GlobeAltIcon, ScaleIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: 'Telefone',
        description:
            '(85) 98238-0314',
        icon: GlobeAltIcon,
    },
    {
        name: 'Telegram',
        description:
            'https://t.me/Ytalo_Lopes',
        icon: ChatBubbleBottomCenterTextIcon,
    },
    {
        name: 'Email',
        description:
            'comercial@ytalo.dev',
        icon: ChatBubbleBottomCenterTextIcon,
    },
]

export default function Contact() {
    return (
        <div className="bg-white py-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="lg:text-center">
                    <h2 className="text-2xl font-bold text-gray-900">Contato</h2>
                </div>

                <div className="mt-10">
                    <dl className="space-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10 md:space-y-0">
                        {features.map((feature) => (
                            <div key={feature.name} className="relative">
                                <dt>
                                    <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-orange-600 text-white">
                                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{feature.name}</p>
                                </dt>
                                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}

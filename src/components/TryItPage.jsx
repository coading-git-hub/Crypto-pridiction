import LayoutHeader from './LayoutHeader';

const plans = [
  {
    icon: '🆓',
    title: 'Free',
    desc: 'Basic analytics, limited predictions, and community access.',
    price: 'Free',
    btn: 'Get Started',
    highlight: false
  },
  {
    icon: '⭐',
    title: 'Premium',
    desc: 'Advanced analytics, unlimited predictions, and priority support.',
    price: '$19/mo',
    btn: 'Upgrade',
    highlight: true
  },
  {
    icon: '🚀',
    title: 'Pro',
    desc: 'All Premium features plus API access and custom reports.',
    price: '$49/mo',
    btn: 'Go Pro',
    highlight: false
  }
];

const TryItPage = () => (
  <div className="min-h-screen bg-gray-950 text-white">
    <LayoutHeader />
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-yellow-400 mb-8 text-center">Choose Your CryptoDash Experience</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-center bg-gray-900 rounded-2xl p-8 shadow-lg hover:scale-105 hover:bg-gray-800 transition-all border-2 ${plan.highlight ? 'border-yellow-400' : 'border-transparent'}`}
          >
            <span className="text-5xl mb-4">{plan.icon}</span>
            <h2 className="text-2xl font-bold text-yellow-300 mb-2">{plan.title}</h2>
            <p className="text-gray-300 mb-4 text-center">{plan.desc}</p>
            <div className="text-3xl font-bold mb-4 text-white">{plan.price}</div>
            <button className="bg-yellow-400 text-black px-6 py-2 rounded font-bold shadow hover:bg-yellow-500 transition">{plan.btn}</button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default TryItPage; 
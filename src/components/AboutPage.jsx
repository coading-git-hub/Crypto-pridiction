import LayoutHeader from './LayoutHeader';

const stats = [
  { icon: '💰', label: 'Avg. daily volume', value: '$45B+' },
  { icon: '🔄', label: 'Spot transactions 2023', value: '300B+' },
  { icon: '🌐', label: 'Support & Languages', value: '24/7' },
];

const ecosystem = [
  { icon: '💹', title: 'Crypto Exchange', desc: 'Trade top cryptocurrencies with real-time analytics and low fees.' },
  { icon: '📊', title: 'Market Insights', desc: 'Get AI-powered predictions and deep market research.' },
  { icon: '🎓', title: 'Academy', desc: 'Learn crypto trading, blockchain, and security with our free resources.' },
  { icon: '🎨', title: 'NFT Hub', desc: 'Explore, buy, and sell NFTs securely on our platform.' },
  { icon: '🤝', title: 'Charity', desc: 'Join our mission to make crypto accessible and impactful for all.' },
  { icon: '🛡️', title: 'Security', desc: 'Your assets are protected with industry-leading security protocols.' },
];

const team = [
  {
    name: 'Ali Raza',
    role: 'Lead Developer',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
    desc: 'Expert in blockchain and full-stack development.'
  },
  {
    name: 'Sara Khan',
    role: 'UI/UX Designer',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
    desc: 'Designs beautiful and user-friendly crypto interfaces.'
  },
  {
    name: 'Ahmed Malik',
    role: 'Data Scientist',
    img: 'https://randomuser.me/api/portraits/men/65.jpg',
    desc: 'Turns crypto data into actionable insights.'
  }
];

const AboutPage = () => (
  <div className="min-h-screen bg-gray-950 text-white">
    <LayoutHeader />
    {/* Top Section */}
    <section className="max-w-5image.pngxl mx-auto px-4 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">Welcome to CryptoDash</h1>
        <p className="text-gray-300 text-lg mb-6 max-w-xl">
          At CryptoDash, we believe everyone should have the freedom to learn, trade, and grow their crypto assets—no matter who you are or where you come from.
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center bg-gray-900 rounded-lg px-6 py-4 shadow hover:scale-105 hover:bg-gray-800 transition-all">
              <span className="text-3xl mb-1">{s.icon}</span>
              <span className="text-yellow-300 font-bold text-lg">{s.value}</span>
              <span className="text-gray-400 text-xs">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        {/* Illustration */}
        <div className="relative w-52 h-52 flex items-center justify-center mt-2">
          <span className="text-8xl">🌍</span>
          <span className="absolute top-8 left-8 text-3xl">💛</span>
          <span className="absolute bottom-8 right-8 text-3xl">📍</span>
        </div>
      </div>
    </section>

    {/* Mission Section */}
    <section className="max-w-4xl mx-auto px-4 py-10 mt-0">
      <h2 className="text-3xl font-bold text-yellow-400 mb-2 text-center">Our Mission</h2>
      <p className="text-gray-300 mb-4 text-2xl">
        CryptoDash aims to be the world's leading crypto dashboard, empowering users with tools, education, and security to thrive in tomorrow's digital economy.
      </p>
      <button className="bg-yellow-400 text-black px-6 py-2 rounded font-bold shadow hover:bg-yellow-500 transition">Learn More</button>
    </section>

    {/* Ecosystem Section */}
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Our Ecosystem</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ecosystem.map((item, idx) => (
          <div key={idx} className="bg-gray-900 rounded-lg p-6 shadow hover:scale-105 hover:bg-gray-800 transition-all cursor-pointer flex flex-col items-center">
            <span className="text-4xl mb-2">{item.icon}</span>
            <h3 className="text-2xl font-semibold text-yellow-300 mb-1">{item.title}</h3>
            <p className="text-gray-400 text-sm text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* User First Section */}
    <section className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 flex justify-center">
        <div className="bg-gray-900 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow">🔒</div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-bold text-yellow-400 mb-2">Putting Our Users First</h3>
        <p className="text-gray-300 mb-3 text-2xl">User security and privacy are at the heart of everything we do. From top-notch encryption to transparent policies, your trust is our priority.</p>
        <button className="bg-yellow-400 text-black px-5 py-2 rounded font-bold shadow hover:bg-yellow-500 transition">User Principles</button>
      </div>
    </section>

    {/* Compliance Section */}
    <section className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-3xl font-bold text-yellow-400 mb-2">Working with Regulators</h3>
        <p className="text-gray-300 mb-3 text-2xl">We are committed to meeting the highest standards for regulatory compliance to maintain trust and responsibility for our users and the crypto industry.</p>
        <button className="bg-yellow-400 text-black px-6 py-4 rounded font-bold shadow hover:bg-yellow-500 transition mt-2">Learn More</button>
      </div>
      <div className="flex-1 flex justify-center">
        <div className="bg-gray-900 rounded-full w-24 h-24 flex items-center justify-center text-7xl shadow">⚖️</div>
      </div>
    </section>

    {/* Team Section */}
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center ">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {team.map((member, idx) => (
          <div key={idx} className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col items-center hover:scale-105 hover:bg-gray-800 transition-all cursor-pointer">
            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full mb-4 border-4 border-yellow-400 object-cover" />
            <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
            <p className="text-yellow-300 font-medium mb-2">{member.role}</p>
            <p className="text-gray-400 text-sm text-center">{member.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Careers Section */}
    <section className="max-w-5xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center gap-10">
      <div className="flex-1 flex justify-center">
        <div className="bg-gray-900 rounded-full w-24 h-24 flex items-center justify-center text-5xl shadow">🌱</div>
      </div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="text-xl font-bold text-yellow-400 mb-2">Working at CryptoDash</h3>
        <p className="text-gray-300 mb-3">At CryptoDash, we give people the freedom to own their decisions, collaborate, and create impact. Join us to help shape the future of crypto!</p>
        <button className="bg-yellow-400 text-black px-5 py-2 rounded font-bold shadow hover:bg-yellow-500 transition">Explore Jobs</button>
      </div>
    </section>

    {/* Feature Cards Section */}
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 mb-12">
        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:scale-105 hover:bg-gray-700 transition-all cursor-pointer min-w-[240px]">
          <h2 className="text-2xl font-extrabold text-yellow-300 mb-4">Live Market Data</h2>
          <p className="text-gray-400 text-lg">Stay updated with real-time prices and trends for all major cryptocurrencies.</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:scale-105 hover:bg-gray-700 transition-all cursor-pointer min-w-[240px]">
          <h2 className="text-2xl font-extrabold text-yellow-300 mb-4">AI Predictions</h2>
          <p className="text-gray-400 text-lg">Get AI-powered predictions and insights to maximize your trading potential.</p>
        </div>
        <div className="bg-gray-800 rounded-xl p-8 shadow-2xl hover:scale-105 hover:bg-gray-700 transition-all cursor-pointer min-w-[240px]">
          <h2 className="text-2xl font-extrabold text-yellow-300 mb-4">Secure & Private</h2>
          <p className="text-gray-400 text-lg">Your data and assets are protected with industry-leading security protocols.</p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage; 
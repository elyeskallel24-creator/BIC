import { useState } from 'react';

const menuItems = [
  { name: 'Espresso', price: '3.50', description: 'Rich and bold single shot of pure coffee essence', category: 'hot' },
  { name: 'Cappuccino', price: '4.50', description: 'Espresso with steamed milk and velvety foam', category: 'hot' },
  { name: 'Latte', price: '4.75', description: 'Smooth espresso with creamy steamed milk', category: 'hot' },
  { name: 'Mocha', price: '5.25', description: 'Espresso with chocolate and steamed milk', category: 'hot' },
  { name: 'Americano', price: '3.75', description: 'Espresso diluted with hot water for a clean taste', category: 'hot' },
  { name: 'Flat White', price: '4.50', description: 'Double espresso with micro-foamed milk', category: 'hot' },
  { name: 'Cold Brew', price: '4.50', description: 'Slow-steeped for 20 hours, smooth and refreshing', category: 'cold' },
  { name: 'Iced Latte', price: '5.00', description: 'Espresso over ice with cold milk', category: 'cold' },
  { name: 'Frappé', price: '5.50', description: 'Blended iced coffee with cream', category: 'cold' },
  { name: 'Matcha Latte', price: '5.25', description: 'Premium Japanese matcha with steamed milk', category: 'cold' },
  { name: 'Croissant', price: '3.25', description: 'Buttery, flaky French pastry baked fresh daily', category: 'food' },
  { name: 'Blueberry Muffin', price: '3.50', description: 'Moist muffin loaded with fresh blueberries', category: 'food' },
  { name: 'Avocado Toast', price: '7.50', description: 'Sourdough with smashed avocado and seeds', category: 'food' },
  { name: 'Banana Bread', price: '3.75', description: 'Homemade banana bread with walnuts', category: 'food' },
];

const testimonials = [
  { name: 'Sarah M.', text: 'BIC is my go-to spot every morning. The cappuccino is absolutely perfect!', rating: 5 },
  { name: 'James K.', text: 'Best coffee in town. The atmosphere is so cozy and the staff is wonderful.', rating: 5 },
  { name: 'Emily R.', text: 'Their cold brew is unmatched. I drive 20 minutes just to get it!', rating: 5 },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span className="text-2xl font-bold text-amber-400 tracking-wider">BIC</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-stone-300 hover:text-amber-400 transition-colors">Home</a>
            <a href="#about" className="text-stone-300 hover:text-amber-400 transition-colors">About</a>
            <a href="#menu" className="text-stone-300 hover:text-amber-400 transition-colors">Menu</a>
            <a href="#testimonials" className="text-stone-300 hover:text-amber-400 transition-colors">Reviews</a>
            <a href="#contact" className="text-stone-300 hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <button 
            className="md:hidden text-stone-300 hover:text-amber-400"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-stone-900/95 border-t border-stone-700">
          <div className="px-4 py-3 space-y-2">
            <a href="#home" className="block text-stone-300 hover:text-amber-400 py-2" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#about" className="block text-stone-300 hover:text-amber-400 py-2" onClick={() => setIsOpen(false)}>About</a>
            <a href="#menu" className="block text-stone-300 hover:text-amber-400 py-2" onClick={() => setIsOpen(false)}>Menu</a>
            <a href="#testimonials" className="block text-stone-300 hover:text-amber-400 py-2" onClick={() => setIsOpen(false)}>Reviews</a>
            <a href="#contact" className="block text-stone-300 hover:text-amber-400 py-2" onClick={() => setIsOpen(false)}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://image.qwenlm.ai/generated-images/65e418e7-0264-4685-add1-d76747e2e0d6/_result.png)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/70 via-stone-900/50 to-stone-900/80"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="text-6xl mb-6">☕</div>
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
          Welcome to <span className="text-amber-400">BIC</span>
        </h1>
        <p className="text-xl md:text-2xl text-stone-300 mb-8 font-light">
          Where every cup tells a story
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#menu" 
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold rounded-full transition-all transform hover:scale-105 shadow-lg"
          >
            View Our Menu
          </a>
          <a 
            href="#about" 
            className="px-8 py-3 border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-stone-900 font-semibold rounded-full transition-all"
          >
            Our Story
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Our Story</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-stone-800 rounded-2xl p-12 text-center">
              <div className="text-8xl mb-4">🏪</div>
              <p className="text-amber-400 text-xl font-semibold">Est. 2018</p>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-stone-600 leading-relaxed">
              <span className="font-bold text-stone-800">BIC Coffee</span> was born from a simple passion — 
              the love of great coffee and the belief that a perfect cup can brighten anyone's day.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Founded in 2018, we source our beans from sustainable farms around the world, 
              roasting them in-house to bring out the unique flavors of each origin. 
              Every cup is crafted with care by our skilled baristas.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              More than just a coffee shop, BIC is a community space where friends meet, 
              ideas flow, and stories are shared over the aroma of freshly brewed coffee.
            </p>
            <div className="flex gap-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">7+</div>
                <div className="text-stone-500 text-sm">Years Serving</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">50K+</div>
                <div className="text-stone-500 text-sm">Cups Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">12</div>
                <div className="text-stone-500 text-sm">Bean Origins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Menu() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'hot' | 'cold' | 'food'>('all');
  
  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-20 bg-stone-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Menu</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto mb-6"></div>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Handcrafted beverages and fresh bites made with love
          </p>
        </div>

        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {(['all', 'hot', 'cold', 'food'] as const).map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-amber-500 text-stone-900 shadow-lg'
                  : 'bg-stone-800 text-stone-300 hover:bg-stone-700'
              }`}
            >
              {cat === 'all' ? '✨ All' : cat === 'hot' ? '🔥 Hot' : cat === 'cold' ? '🧊 Cold' : '🥐 Food'}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div 
              key={index}
              className="bg-stone-800/50 border border-stone-700 rounded-xl p-6 hover:border-amber-500/50 hover:bg-stone-800 transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white group-hover:text-amber-400 transition-colors">
                  {item.name}
                </h3>
                <span className="text-amber-400 font-bold text-lg">${item.price}</span>
              </div>
              <p className="text-stone-400 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">What People Say</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-amber-400 text-xl">★</span>
                ))}
              </div>
              <p className="text-stone-600 italic mb-6 leading-relaxed">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-200 rounded-full flex items-center justify-center text-amber-700 font-bold">
                  {testimonial.name[0]}
                </div>
                <span className="font-semibold text-stone-800">{testimonial.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-4">Visit Us</h2>
          <div className="w-20 h-1 bg-amber-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📍</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Location</h3>
            <p className="text-stone-600">123 Coffee Lane</p>
            <p className="text-stone-600">Downtown District</p>
            <p className="text-stone-600">New York, NY 10001</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">🕐</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Hours</h3>
            <p className="text-stone-600">Mon - Fri: 6:30 AM - 8:00 PM</p>
            <p className="text-stone-600">Saturday: 7:00 AM - 9:00 PM</p>
            <p className="text-stone-600">Sunday: 7:00 AM - 6:00 PM</p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">📞</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">Contact</h3>
            <p className="text-stone-600">Phone: (555) 123-4567</p>
            <p className="text-stone-600">Email: hello@biccoffee.com</p>
            <p className="text-stone-600">Instagram: @biccoffee</p>
          </div>
        </div>

        <div className="mt-12 bg-stone-800 rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
          <p className="text-stone-400 mb-6">Subscribe for exclusive offers, new menu items, and events.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-1 px-4 py-3 bg-stone-700 border border-stone-600 rounded-full text-white placeholder-stone-400 focus:outline-none focus:border-amber-500"
            />
            <button className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold rounded-full transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-stone-900 border-t border-stone-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">☕</span>
            <span className="text-2xl font-bold text-amber-400 tracking-wider">BIC</span>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-xl">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-xl">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-stone-400 hover:text-amber-400 transition-colors text-xl">
              <i className="fab fa-tiktok"></i>
            </a>
          </div>

          <p className="text-stone-500 text-sm">
            © 2024 BIC Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans">
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

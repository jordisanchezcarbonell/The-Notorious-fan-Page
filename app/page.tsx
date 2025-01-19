import { Instagram, Twitter, Trophy } from 'lucide-react';
import CountdownTimer from './components/CountdownTimer';

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Images with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: "url('/conor.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-10 left-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '0s' }}
          />
          <div
            className="absolute top-40 right-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '2s' }}
          />
          <div
            className="absolute bottom-20 left-1/3 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl animate-float"
            style={{ animationDelay: '4s' }}
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="flex flex-col items-center justify-center min-h-screen text-white text-center">
          <div className="mb-12 animate-float">
            <Trophy className="w-16 h-16 mb-6 text-emerald-500" />
            <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-500 to-emerald-600 text-shadow">
              The Notorious
            </h1>
            <p className="text-xl md:text-2xl text-emerald-400/80 font-medium">
              Conor McGregor
            </p>
          </div>

          <CountdownTimer />

          <p className="text-2xl md:text-4xl font-bold mb-12 max-w-2xl bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
            When will the King of the Octagon return?
          </p>

          <div className="flex gap-6">
            <a
              href="https://twitter.com/TheNotoriousMMA"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 border border-emerald-500/20 hover:border-emerald-500/40"
            >
              <Twitter className="w-6 h-6 text-emerald-400" />
            </a>
            <a
              href="https://www.instagram.com/thenotoriousmma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 transition-all duration-300 hover:scale-110 border border-emerald-500/20 hover:border-emerald-500/40"
            >
              <Instagram className="w-6 h-6 text-emerald-400" />
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

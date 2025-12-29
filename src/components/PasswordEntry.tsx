import { useState } from 'react';
import { Heart } from 'lucide-react';

interface PasswordEntryProps {
  onCorrectPassword: () => void;
}

export default function PasswordEntry({ onCorrectPassword }: PasswordEntryProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'avneet0401') {
      onCorrectPassword();
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setTimeout(() => setError(false), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-cream-50 flex items-center justify-center p-4 relative overflow-hidden">
      <div className="floating-hearts">
        <Heart className="heart heart-1" fill="#ffc1cc" stroke="#ffc1cc" />
        <Heart className="heart heart-2" fill="#e6b8ff" stroke="#e6b8ff" />
        <Heart className="heart heart-3" fill="#ffc1cc" stroke="#ffc1cc" />
        <Heart className="heart heart-4" fill="#e6b8ff" stroke="#e6b8ff" />
      </div>

      <div className="max-w-md w-full">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-block mb-4">
            <Heart size={64} className="text-pink-300 animate-pulse" fill="#ffc1cc" />
          </div>
          <h1 className="font-cursive text-5xl text-pink-400 mb-3">
            A Special Surprise
          </h1>
          <p className="text-gray-600 text-lg">
            This surprise is only for you, Avneet ❤️
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 animate-slide-up">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-medium mb-2">
              Enter Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                error
                  ? 'border-red-300 focus:ring-red-200'
                  : 'border-pink-200 focus:ring-pink-200'
              } ${shake ? 'animate-shake' : ''}`}
              placeholder="••••••••"
              autoFocus
            />
            {error && (
              <p className="text-red-400 text-sm mt-2 animate-fade-in">
                Oops! Wrong password. Try again 💕
              </p>
            )}
          </div>

          <p className="text-sm text-gray-500 mb-6 text-center">
            Hint: Your birthday 🎀
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium py-3 px-6 rounded-xl hover:from-pink-400 hover:to-purple-400 transition-all transform hover:scale-105 shadow-lg"
          >
            Unlock Your Surprise
          </button>
        </form>

        <div className="text-center mt-6 animate-fade-in">
          <p className="text-gray-400 text-sm">
            Made with love, just for you 🤍
          </p>
        </div>
      </div>
    </div>
  );
}

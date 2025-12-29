import { useState, useEffect, useRef } from 'react';
import { Heart, Music, VolumeX, Sparkles } from 'lucide-react';
import CountdownTimer from './CountdownTimer';
import TypewriterText from './TypewriterText';
import FloatingDecorations from './FloatingDecorations';

export default function BirthdayWebsite() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const loveLetterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach((el) => observer.observe(el));

    const letterObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !showTypewriter) {
          setShowTypewriter(true);
        }
      },
      { threshold: 0.3 }
    );

    if (loveLetterRef.current) {
      letterObserver.observe(loveLetterRef.current);
    }

    return () => {
      observer.disconnect();
      letterObserver.disconnect();
    };
  }, [showTypewriter]);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFirstInteraction = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleFirstInteraction, { once: true });
    return () => document.removeEventListener('click', handleFirstInteraction);
  }, []);

  const loveLetterText = `My Dearest Avneet,

There are moments in life when words feel too small to hold the depth of what we feel. This is one of those moments. As I write this, I'm reminded of every smile you've given me, every laugh we've shared, and every quiet moment where just being with you felt like home.

You have this incredible way of making the ordinary feel extraordinary. The way your eyes light up when you talk about something you love, the warmth in your voice when you ask about my day, the gentle kindness you show to everyone around you — these are the things that make you so beautifully you.

Your smile isn't just pretty; it's a reminder that good things exist in this world. Your presence doesn't just fill a room; it fills my heart with a peace I never knew I needed. With you, I don't have to pretend or hide. I can just be, and that's enough.

Being with you feels safe. It feels like coming home after a long day. It feels like finding something I didn't know I was searching for. You make my ordinary days special simply by being in them.

On your birthday, I want you to know how deeply you're loved — not just today, but every single day. You deserve all the happiness, all the love, all the beautiful moments life has to offer. And I'm so grateful I get to be part of your story.

I choose you. Always.
Happy Birthday, my Avneet ❤️`;

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-cream-50 min-h-screen" onClick={handleFirstInteraction}>
      <FloatingDecorations />

      <audio ref={audioRef} loop>
        <source src="https://www.bensound.com/bensound-music/bensound-cute.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Toggle music"
      >
        {isPlaying ? (
          <Music className="text-pink-400" size={24} />
        ) : (
          <VolumeX className="text-gray-400" size={24} />
        )}
      </button>

      <section className="min-h-screen flex items-center justify-center px-4 relative z-10">
        <div className="text-center animate-fade-in">
          <div className="mb-6">
            <Heart size={80} className="inline-block text-pink-300 animate-pulse" fill="#ffc1cc" />
          </div>
          <h1 className="font-cursive text-6xl md:text-8xl text-pink-400 mb-4 animate-slide-up">
            Happy Birthday, Avneet 🎀❤️
          </h1>
          <p className="text-2xl md:text-3xl text-gray-600 mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            4th January — the day the world became more beautiful
          </p>
          <p className="text-lg text-gray-500 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Scroll slowly… this is made with love 🤍
          </p>
          <div className="mt-12 animate-bounce">
            <div className="w-6 h-10 border-2 border-pink-300 rounded-full mx-auto flex justify-center">
              <div className="w-1.5 h-3 bg-pink-300 rounded-full mt-2 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10 scroll-reveal">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="inline-block text-purple-300 mb-4" size={32} />
          <p className="text-2xl text-gray-600 mb-12 font-light">
            Counting seconds to celebrate you ⏳✨
          </p>
          <CountdownTimer />
        </div>
      </section>

      <section className="py-20 px-4 relative z-10 scroll-reveal">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-8 md:p-12">
            <Heart className="inline-block text-pink-300 mb-6" size={40} fill="#ffc1cc" />
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              There's something magical about you, Avneet. It's in the way your smile lights up everything around you,
              turning even the cloudiest days into something bright and beautiful. Your kindness flows naturally, like
              a gentle stream that touches everyone lucky enough to know you. You have this warmth about you that makes
              people feel seen, heard, and valued.
              <br /><br />
              What makes you truly special is how you transform my ordinary days into extraordinary memories. A simple
              conversation with you becomes the highlight of my day. Your laughter is the sweetest sound, and your
              presence brings a comfort I never knew I needed. Being with you feels like finding peace in a chaotic world,
              like finally understanding what home really means.
              <br /><br />
              You make everything better just by being you. With you, I feel safe to be myself, to share my thoughts,
              to dream out loud. You've painted my world in colors I didn't know existed, and for that, I'm endlessly grateful.
              You're not just special to me; you're irreplaceable. 🤍
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10 scroll-reveal">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-2xl text-gray-600 mb-12">
            Some moments I'll always hold close to my heart 🤍
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1144698/pexels-photo-1144698.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1024969/pexels-photo-1024969.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1000445/pexels-photo-1000445.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1024973/pexels-photo-1024973.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((src, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-3xl shadow-lg transform hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={src}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative z-10 scroll-reveal">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl text-gray-600 mb-8">
            From hearts that love you ❤️
          </p>
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl shadow-xl p-6 md:p-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
              <video
                controls
                className="w-full h-full"
                poster="https://images.pexels.com/photos/1115128/pexels-photo-1115128.jpeg?auto=compress&cs=tinysrgb&w=800"
              >
                <source src="" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              Add your video wishes by replacing the video source
            </p>
          </div>
        </div>
      </section>

      <section ref={loveLetterRef} className="py-20 px-4 relative z-10 scroll-reveal">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-pink-100/50 to-purple-100/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-pink-200/30">
            <div className="text-center mb-8">
              <Heart className="inline-block text-pink-400 mb-4 animate-pulse" size={48} fill="#ffc1cc" />
              <h2 className="font-cursive text-4xl text-pink-400">A Letter for You</h2>
            </div>
            <div className="text-gray-700 text-lg leading-relaxed">
              {showTypewriter ? (
                <TypewriterText text={loveLetterText} speed={30} />
              ) : (
                <div className="h-96"></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 text-center relative z-10">
        <div className="mb-4">
          <Heart className="inline-block text-pink-300 animate-pulse" size={32} fill="#ffc1cc" />
        </div>
        <p className="text-gray-500 text-lg">
          Made with love, just for you 🤍
        </p>
        <p className="text-gray-400 text-sm mt-2">
          © {new Date().getFullYear()} • Forever Yours
        </p>
      </footer>
    </div>
  );
}

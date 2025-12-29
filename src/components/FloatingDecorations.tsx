import { Heart, Sparkles } from 'lucide-react';

export default function FloatingDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <Heart className="floating-decoration heart-float-1" size={24} fill="#ffc1cc" stroke="#ffc1cc" opacity={0.3} />
      <Heart className="floating-decoration heart-float-2" size={20} fill="#e6b8ff" stroke="#e6b8ff" opacity={0.3} />
      <Heart className="floating-decoration heart-float-3" size={28} fill="#ffc1cc" stroke="#ffc1cc" opacity={0.2} />
      <Sparkles className="floating-decoration sparkle-float-1" size={20} stroke="#ffd4e5" opacity={0.4} />
      <Sparkles className="floating-decoration sparkle-float-2" size={16} stroke="#e6b8ff" opacity={0.3} />
      <Heart className="floating-decoration heart-float-4" size={22} fill="#ffd4e5" stroke="#ffd4e5" opacity={0.3} />
      <Sparkles className="floating-decoration sparkle-float-3" size={18} stroke="#ffc1cc" opacity={0.4} />
    </div>
  );
}

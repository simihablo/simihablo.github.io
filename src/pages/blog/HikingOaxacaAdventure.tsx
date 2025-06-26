
import { Link } from 'react-router-dom';
import { Calendar, ArrowLeft, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const HikingOaxacaAdventure = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-8">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/blog" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-4">
            Hiking
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Hiking Through Oaxaca: A 5-Day Adventure with My Dogs
          </h1>
          <div className="flex items-center gap-4 text-blue-200">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              March 15, 2024
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              8 min read
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Last month, I embarked on one of the most memorable adventures of my life: a 5-day hiking expedition through the stunning mountains of Oaxaca, Mexico, accompanied by my three loyal canine companions.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Journey Begins</h2>
          <p className="text-gray-700 mb-6">
            Oaxaca has always held a special place in my heart. The combination of rich indigenous culture, breathtaking landscapes, and warm hospitality makes it the perfect destination for an adventure seeker like myself. This time, I decided to bring my dogs along – Max, Luna, and Charlie – for what would become an unforgettable bonding experience.
          </p>

          <p className="text-gray-700 mb-6">
            Our route took us through the Sierra Norte mountains, starting from the small village of Benito Juárez and winding through cloud forests, ancient oak groves, and traditional Zapotec communities. The elevation changes were challenging but rewarding, offering spectacular views at every turn.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Day-by-Day Highlights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Day 1: Into the Cloud Forest</h3>
          <p className="text-gray-700 mb-6">
            We started early morning from Benito Juárez, with our packs loaded and the dogs excited for the adventure ahead. The trail immediately led us into a mystical cloud forest, where ancient trees draped in moss created a cathedral-like atmosphere. The dogs were in their element, sniffing every new scent and splashing through crystal-clear streams.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Day 2-3: Ancient Paths and Village Hospitality</h3>
          <p className="text-gray-700 mb-6">
            The middle days took us along ancient trading routes used by Zapotec communities for centuries. We were welcomed with incredible warmth in the village of Lachatao, where locals shared stories about their sustainable tourism initiatives. The dogs were particularly popular with the village children, creating instant connections across language barriers.
          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Day 4-5: Summit Views and Reflection</h3>
          <p className="text-gray-700 mb-6">
            Our final push took us to one of the highest peaks in the region. The view from the summit was absolutely breathtaking – rolling mountains extending to the horizon in every direction. Sitting there with my dogs, watching the sunrise paint the landscape in golden hues, I felt a profound sense of connection to both nature and my four-legged family.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lessons Learned</h2>
          <p className="text-gray-700 mb-6">
            This adventure reinforced several important lessons for me. First, the value of slowing down and being present in the moment. When you're hiking with dogs, you naturally adopt their pace – stopping to investigate interesting smells, taking breaks when needed, and simply enjoying the journey rather than rushing to the destination.
          </p>

          <p className="text-gray-700 mb-6">
            Second, the importance of community and connection. Whether it was the warmth of the Zapotec villagers or the bond with my dogs, this trip reminded me that our most meaningful experiences are shared ones.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Planning Your Own Adventure</h2>
          <p className="text-gray-700 mb-6">
            If you're considering a similar adventure, here are some key tips:
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>Ensure your dogs are in good physical condition and comfortable with long walks</li>
            <li>Pack plenty of water and food for both you and your pets</li>
            <li>Research local regulations and customs regarding pets in rural areas</li>
            <li>Consider hiring a local guide – they add immeasurable value to the experience</li>
            <li>Respect the environment and local communities</li>
          </ul>

          <p className="text-gray-700 mb-8">
            Oaxaca's mountains will forever hold a special place in my heart, and I can't wait to return with my canine companions for our next adventure. The memories we created together are priceless, and the lessons learned will stay with me both on and off the trail.
          </p>
        </div>

        {/* Navigation */}
        <div className="border-t pt-8 mt-12">
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </article>
    </div>
  );
};

export default HikingOaxacaAdventure;

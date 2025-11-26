
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
          <Link to="/blog" className="inline-flex items-center 
            text-yellow-400 hover:text-yellow-300 transition-colors mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <Badge className="bg-orange-100 text-orange-800 border-orange-200 mb-4">
            Hiking
          </Badge>
          <h1 className="text-4xl font-bold mb-4 text-white">
            Back on the Trails: Returning to Oaxaca With My Dogs (and What Changed This Time)
          </h1>
          <div className="flex items-center gap-4 text-blue-200">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
             April 22, 2025
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              9 min read
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
A month after completing my unforgettable 5-day trek through the mountains of Oaxaca with Max, Luna, and Charlie, I found myself daydreaming about the quiet forests, sun-drenched ridgelines, and the warm communities we encountered. That trip left a mark on me—so much so that I couldn’t resist going back. This time, though, I returned not to conquer new peaks, but to reconnect with what the first hike taught me and to experience Oaxaca’s landscapes in a different season and rhythm.          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Journey Begins</h2>
          <p className="text-gray-700 mb-6">
What follows is a reflection on my return to Oaxaca: a slower, more intentional visit that deepened my love for this region and revealed new lessons from the trail—and from my dogs.          </p>

<h2>Why I Returned So Soon</h2>
          <p className="text-gray-700 mb-6">
People keep asking me, “Didn’t you just go?” Yes. And that’s exactly why I needed to go again.          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Day-by-Day Highlights</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Day 1: Into the Cloud Forest</h3>
          <p className="text-gray-700 mb-6">
The first expedition was thrilling and immersive, but also fast-paced. I realized afterward that I wanted to revisit certain villages, spend more time learning from the locals, and explore trails that didn’t fit into the original itinerary. Plus, Max had developed an adorable habit of perking up every time he saw my hiking pack—how could I resist that?          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Day 1: Returning to Benito Juárez— Familiar Faces, New Trails</h3></h3>
          <p className="text-gray-700 mb-6">
This time, I planned a shorter but richer journey: three days in the Sierra Norte, with an emphasis on cultural experiences, dog-friendly eco-cabins, and slow wandering rather than distance goals.          </p>

          <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3"> Day 2: A Deeper Dive into Zapotec Culture</h3>
          <p className="text-gray-700 mb-6">
Arriving back in Benito Juárez felt like stepping into an old photograph. The morning mist hung low, and the scent of pine drifted through the air. The locals recognized me—mostly because of the dogs—and welcomed us back with smiles and a few jokes about becoming honorary residents.          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Lessons Learned</h2>
          <p className="text-gray-700 mb-6">
We spent the night in one of the village’s eco-cabins, listening to the gentle patter of rain on the roof and letting the forest lull us to sleep.          </p>

          <p className="text-gray-700 mb-6">
One of my goals for this trip was to learn more about the Sierra Norte’s community-run conservation efforts. With the help of a local guide—someone who had recognized us from Lachatao—we arranged a visit to a small cooperative focused on sustainable forestry and herbal medicine.          </p>
<p>While I asked questions and took notes, the dogs were content being the unofficial mascots of the day. Luna made herself at home immediately, curling up under a table during a presentation, and Charlie followed one of the elders like a faithful apprentice.          </p>
</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">What I Learned From Returning</h2>
          <p className="text-gray-700 mb-6">
          <ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
            <li>1. Every trail feels new the second time.<strong>Even the familiar looks different when you slow down. With fewer miles to cover, I noticed small things: new wildflowers, bird calls I’d missed before, and how the dogs seemed more attuned to the environment when we weren’t pushing forward.</strong></li>
            <li>2. Dogs remember joy.<strong>My dogs recognized certain spots—especially streams—and bolted toward them with an excitement that made my heart swell. Their pure enthusiasm reminded me that the outdoors isn’t just an escape; it’s a source of joy we can revisit.</strong></li>
            <li>3. There’s value in returning, not just exploring.<strong>Travel often focuses on “new” experiences, but returning somewhere allows deeper connection. This trip wasn’t about discovery—it was about appreciation.</strong></li>
          </ul>

          <p className="text-gray-700 mb-8">
My second journey through Oaxaca wasn’t as epic in distance or duration, but it was richer in connection and clarity. Walking those trails again with Max, Luna, and Charlie reminded me that adventure doesn’t have to be grand—it just has to be meaningful.          </p>
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

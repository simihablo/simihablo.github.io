
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Blog = () => {
  const blogPosts = [
    {
      id: 'hiking-oaxaca-adventure',
      title: 'Hiking Through Oaxaca: A 5-Day Adventure with My Dogs',
      excerpt: 'Join me and my four-legged companions as we explore the stunning mountain trails of Oaxaca, Mexico. From ancient ruins to breathtaking vistas.',
      date: '2024-03-15',
      category: 'Hiking',
      tags: ['Mexico', 'Hiking', 'Dogs', 'Adventure'],
      readTime: '8 min read'
    },
    {
      id: 'kubernetes-monitoring-kanvas',
      title: 'Mastering Kubernetes Monitoring with Kanvas',
      excerpt: 'Learn how to leverage Kanvas for comprehensive Kubernetes cluster monitoring and visualization. A deep dive into cloud native observability.',
      date: '2024-02-28',
      category: 'Technical',
      tags: ['Kubernetes', 'Kanvas', 'Monitoring', 'DevOps'],
      readTime: '12 min read'
    },
    {
      id: 'open-source-contributions-meshery',
      title: 'My Journey Contributing to CNCF Meshery',
      excerpt: 'Reflections on contributing to one of the most impactful cloud native projects. Tips for getting started with open source contributions.',
      date: '2024-02-10',
      category: 'Open Source',
      tags: ['CNCF', 'Meshery', 'Open Source', 'Community'],
      readTime: '10 min read'
    },
    {
      id: 'dogs-and-devops',
      title: 'What My Dogs Taught Me About DevOps',
      excerpt: 'Surprisingly, managing a pack of dogs and managing infrastructure have more in common than you might think. Leadership lessons from the pack.',
      date: '2024-01-20',
      category: 'Personal',
      tags: ['Dogs', 'DevOps', 'Leadership', 'Life'],
      readTime: '6 min read'
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Hiking': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Technical': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Open Source': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Personal': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  console.log('Blog component rendering');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="text-yellow-400 hover:text-yellow-300 transition-colors">
              ← Back to Home
            </Link>
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
            Blog
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Thoughts on infrastructure, open source, hiking adventures, and life with dogs.
          </p>
        </div>
      </header>

      {/* Blog Posts */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid gap-8">
          {blogPosts.map((post) => (
            <Card key={post.id} className="hover:shadow-lg transition-shadow duration-300 border-gray-200">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
                  <div className="flex items-center text-gray-500 text-sm">
                    <Calendar className="mr-1 h-4 w-4" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                </div>
                <CardTitle className="text-2xl text-gray-900 hover:text-blue-600 transition-colors">
                  <Link to={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {post.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                    <Button asChild variant="outline" size="sm">
                      <Link to={`/blog/${post.id}`}>
                        Read More
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Blog;

import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { newBlogPosts } from '@/content/newBlogPosts';

const categoryColors = {
  AI: 'bg-violet-100 text-violet-800 border-violet-200',
  Hiking: 'bg-orange-100 text-orange-800 border-orange-200',
  Camping: 'bg-emerald-100 text-emerald-800 border-emerald-200'
} as const;

const NewBlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = newBlogPosts.find((blogPost) => blogPost.id === slug);

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="site-page">
      <header className="site-header py-8">
        <div className="mx-auto max-w-4xl px-4">
          <Link
            to="/blog"
            className="mb-6 inline-flex items-center text-amber-300 transition-colors hover:text-amber-200"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
          <Badge className={`mb-4 ${categoryColors[post.category]}`}>
            {post.category}
          </Badge>
          <h1 className="mb-4 text-4xl font-bold text-white">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-blue-200">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4" />
              {post.displayDate}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {post.readTime}
            </div>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-4xl px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <p className="mb-8 text-xl leading-relaxed text-gray-600">{post.intro}</p>

          {post.sections.map((section) => (
            <section key={section.title}>
              <h2 className="mb-4 mt-8 text-2xl font-bold text-gray-900">{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="mb-6 text-gray-700">
                  {paragraph}
                </p>
              ))}
              {section.bullets && (
                <ul className="mb-6 list-inside list-disc space-y-2 text-gray-700">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <div className="mt-12 border-t pt-8">
          <div className="mb-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
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

export default NewBlogPost;

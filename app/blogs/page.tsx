import { Card } from "@/components/Card";
import { SimpleLayout } from "@/components/SimpleLayout";
import { BlogWithSlug } from "@/types/Blog";
import { formatDate, getAllBlogs } from "@/utils/blog";

const Blog = ({ blog }: { blog: BlogWithSlug }) => {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/blogs/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={blog.date}
          className="md:hidden"
          decorate
        >
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={blog.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(blog.date)}
      </Card.Eyebrow>
    </article>
  );
};

export default async function Blogs() {
  let blogs = await getAllBlogs();

  return (
    <SimpleLayout
      title="Writing on Tech or anything."
      intro="An assortment of random snippety cascade of thoughts at certain point of time ordered in chronologically order."
    >
      <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
        <div className="flex max-w-3xl flex-col space-y-16">
          {blogs.map((blog) => (
            <Blog key={blog.slug} blog={blog} />
          ))}
        </div>
      </div>
    </SimpleLayout>
  );
}

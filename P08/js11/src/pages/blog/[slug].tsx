import { useRouter } from "next/router";

const BlogSlugPage = () => {
  const router = useRouter();
  const { query } = router;

  return (
    <div>
      <h2>Blog Page</h2>
      <p>Slug: {query.slug}</p>
    </div>
  );
};

export default BlogSlugPage;

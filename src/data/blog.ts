import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeStringify from "rehype-stringify";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
};

function getMDXFiles(dir: string, lang: string = "es") {
  return fs.readdirSync(dir).filter((file) => file.endsWith(`.${lang}.mdx`));
}

export async function markdownToHTML(markdown: string) {
  const p = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypePrettyCode, {
      // https://rehype-pretty.pages.dev/#usage
      theme: {
        light: "min-light",
        dark: "min-dark",
      },
      keepBackground: false,
    })
    .use(rehypeStringify)
    .process(markdown);

  return p.toString();
}

export async function getPost(slug: string, lang: string = "es") {
  const filePath = path.join("content", `${slug}.${lang}.mdx`);
  let source;
  try {
    source = fs.readFileSync(filePath, "utf-8");
  } catch (e) {
    return null;
  }
  const { content: rawContent, data: metadata } = matter(source);
  const content = await markdownToHTML(rawContent);
  return {
    source: content,
    metadata,
    slug,
  };
}

async function getAllPosts(dir: string, lang: string = "es") {
  let mdxFiles = getMDXFiles(dir, lang);
  const posts = await Promise.all(
    mdxFiles.map(async (file) => {
      let slug = path.basename(file, `.${lang}.mdx`);
      let post = await getPost(slug, lang);
      if (!post) return null;
      let { metadata, source } = post;
      return {
        metadata,
        slug,
        source,
      };
    }),
  );
  return posts.filter((p) => p !== null) as NonNullable<typeof posts[0]>[];
}

export async function getBlogPosts(lang: string = "es") {
  return getAllPosts(path.join(process.cwd(), "content"), lang);
}

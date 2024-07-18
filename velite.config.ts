import { data } from "autoprefixer";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import {defineCollection,defineConfig,s} from 'velite'


const computedFields = <T extends { slug: string }>(data: T) => ({
  ...data,
  slugAsParams: data.slug.split("/").slice(1).join("/"),
})
const posts=defineCollection({
  name:"Post",
  pattern:"blog/**/*.mdx",
  schema:s.object({
    slug:s.path(),
    title:s.string().max(99),
    description:s.string().max(999).optional(),
    date:s.isodate(),
    published:s.boolean().default(true),
    banner:s.string().max(99),
    body:s.mdx()
  }).transform(computedFields)
})
export default defineConfig({
  root: "content",
  output: {
    data: "./.velite",
    assets:"public/static",
    base:"/static/",
    name:"[name].[hash:6].[ext",
    clean:true
  },
  collections: {posts},
  mdx:{
    rehypePlugins:[
      rehypeSlug as any,
      [rehypePrettyCode,{theme:"catppuccin-mocha"}],
     [rehypeAutolinkHeadings,{
      properties:{
          className:["subheading-anchor"],
          ariaLabel:"Link to heading"
      }
     }] 
    ]
  }
})
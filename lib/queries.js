export const indexQuery = `*[_type == "post"] | order(date desc, _updatedAt desc)`

export const postQuery = `{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) | [0] {
    content
  },
  "morePosts": *[_type == "post" && slug.current != $slug] | order(date desc, _updatedAt desc) | [0...2] {
    content
  }
}`
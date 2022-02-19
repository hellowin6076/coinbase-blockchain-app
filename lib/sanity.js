import sanityClient from "@sanity/client"

export const client = sanityClient({
  projectId: "p5yyxcto",
  dataset: "production",
  apiVersion: "2021-03-25",
  token:
    "skjUk9Y4xY55Pf4qYzzG697sGYszVgcbELOTRrFEtNMJuhOqgZqKBwKOsQFOfiRjSpyoJlISzKXB9x6ysWn40WPywqNH6dzXT6rShFr1qwDOUsYq5y2f9Zc178wc6qN7hwKEnbSqeFZANAgY9RvJduRACaeafS4enemv0Jow0TnKsMl7voaM",
  useCdn: false,
})

## <a name='TOC'>Summary</a>

- [Rules](#rules)
- [Overview](#overview)
- [Story](#story)
- [Resources](#resources)
- [Credits](#credits)

## <a name='overview'>Rules</a>

- You **MUST** create a git repository named `learn.graphql`
- You **MUST** create a file called `.author.json` with your username followed by a newline:
```sh
~/codeflix/onecode/myExpress ❯❯❯ cat -e .author.json
{
  "firstname": "Dylan"
  "lastname": "DE SOUSA"
}$
```

> You can talk about the subject with other developers
> Don't hesitate to ask questions or help people

## <a name='overview'>Overview</a>
The purpose of this challenge is to learn GraphQL through the creation of an API.
You **HAVE TO** use TypeScript

## <a name='story'>Story</a>
The story is simple, you as a Freelance, want to recreate a Facebook like for a client. For this you will need to implement an API
that respect the following specifications.

### Features:
- [ ] Register


- [ ] Create a post
- [ ] Read all the posts
- [ ] Read a post by It's ID
- [ ] Update a post by It's ID
- [ ] Delete a post by It's ID


- [ ] Create a comment on a post
- [ ] Read all the comments from a post
- [ ] Read a comment by It's ID
- [ ] Update a comment by It's ID
- [ ] Delete a comment by It's ID

### Models:
Please don't copy past this models, they are just here as an example.
```
model User
  id: int ( or string if you use UUID )
  email: string
  password: string
  firstName: string
  lastName: string
```

```
model Post
  id: int
  author: User
  comments: Post[]
  content: string
  createdAt: Date
  updatedAt: Date
```

## <a name='resources'>Resources</a>
- [GraphQL documentation](https://graphql.org/learn/), you will find here explanation about GraphQL.
- [Apollo Server](https://www.apollographql.com/docs/apollo-server/), Apollo Server is a npm package that help you bootstrap a GraphQL Server.

## <a name='bonus'>Bonus</a>
Feel free to add whatever you want. You can for example implement an
Authentication System and use the GraphQL directive to protect your routes.

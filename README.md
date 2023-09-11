# Frontend Scaffold for Poet and TAP

This is a frontend scaffold for Poet and TAP. It helps us quickly setup new landings pages and frontends for our projects.

## Features

- [Next.js](https://nextjs.org/) as the framework
- [Styled Components](https://styled-components.com/) for styling and structure using `DefaultTheme` and semantically meaningful components
- [ESLint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for code formatting
- [Next Sitemap](https://next-sitemap.lamvishnusankar.com) for generating sitemaps

In the future, we'll revisit these two decisions:

1. We're currently not using Next 13's [Layouts](https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts) due to limited documentation.
2. We're not using a Git template for now as shallow cloning is faster.

## Development

Clone this repo using shallow depth. Replace {{new_directory_name}} with the name of your new directory. Replace {{new_name}} with the name of the new project.

```sh
git clone --depth 1 https://github.com/poet-network/app-scaffold {{new_directory_name}} && mv {{new_directory_name}} {{new_name}}
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

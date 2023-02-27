# CosmoCut – Send your short links to space

As space exploration advances, so does long clunky URLs that take up valuable space in your expensive cloud do. But you know your personal short links need to stay _personal_. CosmoCut can easily create and share short links for you.

CosmoCut generates short links that are easy to share, saving you time and space. Plus, Space algorithms ensure that your links stay safe and secure in your own personal cloud.

But that's not all - CosmoCut also offers personalized link tracking and analytics. See how many people are clicking on your links, where they're coming from, and even which times of day are most popular. Use this information to optimize your space content and stay ahead of the game.

Whether you're a space enthusiast, developer, or student, CosmoCut is the ultimate tool for sharing and tracking space-related links. Install this on your Space and blast off into a new era of link sharing!

## Deta Space

[Deta Space](https://deta.space/developers) is a personal computer that lives in the cloud — a _personal cloud_. When you install an app, you get a personal copy. The data that app saves to your Space is for you: explore it, extend it, export it. Apps and data in your Space can easily integrate — powered by the personal cloud. Everything on the personal cloud is programmable.

This app is built using Space and Deta infrastructure. You can fork it, clone it, change it, deploy it, or just install it.

<a href="https://deta.space/discovery/r/aypymkqgcxdsmk2w">
  <img src="https://deta.space/buttons/dark.svg" height="50" />
</a>

## Development

This app is developed using:

- [Remix](https://remix.run/): framework to create modern, resilient apps
- [tailwindcss](https://tailwindcss.com/) and [tailwindui](https://tailwindui.com/): utility-first CSS framework
- [Deta Space](https://deta.space/docs/en/introduction/app-anatomy): deployment and authentication
- [Deta Base](https://deta.space/docs/en/basics/data#base): database to store links and analytics

### Local development

Fork it, clone it, run remix.

From your terminal:

```sh
npm run dev
```

This starts your app in development mode, rebuilding assets on file changes.

In order to store data in the Base, you will need to set your Deta dev key in your `.env` file (copy `.env.example`):

```
DETA_PROJECT_KEY=<put_your_project_key_here>
```

Learn how to manage your Deta keys in [Developing with Base and Drive – Space Docs](https://deta.space/docs/en/basics/data#developing-with-base-and-drive).

### Deployment

If you want to deploy a different version of this app on Deta Space, follow the [deployment docs](https://deta.space/docs/en/basics/revisions). Otherwise, just [install it](#deta-space).

First, create your space project:

```sh
space new
```

Then push to space:

```sh
space push
```

## Install

See [Deta Space](#deta-space). Just press the button with no extra configuration.

## License

Distributed under the MIT License. See LICENSE for more information.

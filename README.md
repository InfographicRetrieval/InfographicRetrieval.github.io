# InfographicRetrieval.github.io

GitHub Pages homepage for:

> Show Me the Infographic I Imagine: Intent-Aware Infographic Retrieval for Authoring Support

## Structure

- `index.html`: homepage content
- `assets/site.css`: styles
- `assets/site.js`: tiny helper for configurable links
- `site-config.js`: central place to update GitHub repo links
- `assets/pdfs/`: paper and supplementary PDFs
- `assets/video/`: local demo video
- `assets/images/`: method and system figures
- `assets/gallery/`: sample infographic examples for the homepage gallery

## Update Repo Links

Edit `site-config.js` and change:

- `homepageRepoUrl`
- `codeRepoUrl`

## Suggested GitHub Setup

1. Create repository `InfographicRetrieval.github.io` under the `InfographicRetrieval` account.
2. Push the contents of this directory to that repository.
3. Create a second repository such as `intent-aware-infographic-retrieval` for the codebase.
4. Update `site-config.js` if you choose a different code repository name.

Because this is a plain static site, GitHub Pages should serve it directly from the repository root.

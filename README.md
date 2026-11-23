# QuickRef

Personal developer cheatsheets and references at https://qref.eknath.dev, built with Hugo and the local `quickref` theme.

```sh
hugo server --renderToMemory --port 1314
hugo --minify
```

Content lives in `content/<collection>/<reference>.md`. Keep `title`, `description`, `categories`, and `tags` in front matter; use `draft: false` when ready. The homepage groups references by content folder. Search matches titles, descriptions, and tags; `/` focuses it. Collection and tag pages also work without JavaScript.

Reference pages include an outline, code-copy buttons, responsive tables, and print styles. See [how-to-write.md](how-to-write.md) for content conventions. Technical examples are existing reference material; this UI refresh does not validate their current accuracy.

## Theme ownership

Shared files are generated from `shared/site-theme/` in EK Command Center. Edit them there and run `npm run theme:sync` from Command Center. Both this repository and Projects consume the shared header/footer, design tokens, styles, and theme utilities; Landing consumes the tokens.

- Generated: `themes/quickref/layouts/_default/baseof.html`, `static/css/ek-*.css`, and `static/js/ek-theme.js` under the theme.
- Site-specific: the remaining layouts, `static/css/site.css`, and `static/js/app.js`.

Generated files are committed here so standalone Hugo builds do not require the parent repository. No Bootstrap, icon font, Tailwind, or JavaScript package installation is required. Poppins uses Google Fonts with a local system-font fallback.

## Deployment

`.github/workflows/main.yml` builds with Hugo 0.141.0 and publishes to GitHub Pages on pushes to `master`. Review child changes before publishing. A parent Command Center push does not deploy this site.

The root `css/`, `js/`, `pages/`, and structure generators are an older static prototype, outside the active Hugo theme. They are retained for reference.

Some older `public/` output is tracked. Use memory rendering for previews and a temporary `--destination` for validation builds to avoid unrelated generated diffs.

## RSS feeds

`/index.xml` contains all published entries; section feeds are available at `/<section>/index.xml`. Complete rendered content is included in `content:encoded`, with summaries retained for readers that prefer them. Set `services.rss.limit` to a positive item count to limit feeds; `-1` keeps all entries. RSS links are available in the footer and feed discovery metadata.

`layouts/_default/rss.xml` is generated from Command Center's `shared/hugo/rss.xml`; edit the parent source and run `npm run theme:sync`. Keep this generated override committed so independent builds work. Existing JSON/search outputs and term feeds remain available.

# Jonathan Hart - CV

A modern, responsive CV/resume website built with [Eleventy (11ty)](https://www.11ty.dev/), featuring clean design and structured data management.

The site is currently published at [cv.jonhart.dev](https://cv.jonhart.dev)

## Features

- 🚀 **Fast Static Site Generation** - Built with Eleventy for optimal performance
- 📱 **Responsive Design** - Looks great on all devices
- 🎨 **Modern UI** - Clean, professional layout with timeline components
- 📊 **Structured Data** - YAML-based content management system
- 🖼️ **Optimized Images** - Automatic image processing with modern formats (WebP)
- 🎯 **Accessible** - Semantic HTML and proper accessibility features

## Data Loaders

This project uses Eleventy's powerful data cascade system with YAML files for content management. Data loaders automatically parse and make content available throughout the site:

### Data Structure

```
src/_data/
├── intro.yaml      # Personal information and summary statement
├── work.yaml       # Employment history with detailed descriptions
├── skills.yaml     # Technical skills organized by category
└── education.yaml  # Educational background
```

### How Data Loaders Work

1. **YAML Processing**: The site uses `js-yaml` to parse YAML files in the `_data` directory
2. **Automatic Loading**: Eleventy automatically loads data files and makes them available as global variables
3. **Template Integration**: Data is accessed in Nunjucks templates using simple dot notation (e.g., `{{ intro.name }}`, `{% for job in work %}`)

Example data structure from `work.yaml`:

```yaml
- title: Systems Developer
  company: Bolton College
  period: October 2019 - July 2025
  summary: 'Played a key role in developing...'
  details:
    - Led development for FirstPass and Dojo projects
    - UI design and development for Ada chatbot
```

### Content Categories

- **Personal Info** (`intro.yaml`): Name and professional statement
- **Work Experience** (`work.yaml`): Job history with titles, companies, periods, and detailed accomplishments
- **Skills** (`skills.yaml`): Technical skills categorized into frontend, backend, and tools
- **Education** (`education.yaml`): Academic background and certifications

## Local Deployment

### Prerequisites

- [Node.js](https://nodejs.org/) (version 20 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd cv-jonhart-dev
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

Start the development server with hot reloading:

```bash
npm run dev
# or
npm start
```

This will:

- Start Eleventy's development server
- Watch for file changes and auto-reload
- Serve the site at `http://localhost:8080`

### Building for Production

Generate the static site for deployment:

```bash
npm run build
```

The generated site will be in the `_site` directory.

### Available Scripts

- `npm run dev` - Start development server with watch mode
- `npm run build` - Build the site for production
- `npm run clean` - Remove the generated `_site` directory
- `npm start` - Alias for `npm run dev`

## Project Structure

```
jonhart-homepage/
├── src/
│   ├── _data/           # YAML data files
│   ├── _includes/       # Reusable template components
│   ├── _layouts/        # Page layouts
│   ├── assets/          # Images and media files
│   ├── css/             # Stylesheets
│   └── index.njk        # Main page template
├── _site/               # Generated static site (after build)
├── eleventy.config.js   # Eleventy configuration
├── package.json         # Dependencies and scripts
└── README.md           # This file
```

## Technologies Used

- **[Eleventy](https://www.11ty.dev/)** - Static site generator
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Templating engine
- **[js-yaml](https://github.com/nodeca/js-yaml)** - YAML parsing
- **[Eleventy Image](https://www.11ty.dev/docs/plugins/image/)** - Image optimization
- **[Lucide Icons](https://lucide.dev/)** - Icon library
- **[Normalize.css](https://necolas.github.io/normalize.css/)** - CSS reset

## Customization

To customize the CV for your own use:

1. **Update personal data**: Edit the YAML files in `src/_data/` with your information
2. **Modify styling**: Update CSS files in `src/css/`
3. **Change layout**: Modify templates in `src/_layouts/` and `src/_includes/`
4. **Add new sections**: Create new data files and update templates accordingly

## License

ISC

---

Built with ❤️ using Eleventy

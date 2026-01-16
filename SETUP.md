# Herensys - Setup & Deployment Guide

## Prerequisites

Before running this application, ensure you have the following installed:

- **Node.js**: Version 20.x or higher
- **pnpm**: Version 8.x or higher (recommended package manager)
- **Git**: For version control

## Initial Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd herensys
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Environment Configuration

Create a `.env.local` file in the root directory by copying the example file:

```bash
cp .env.example .env.local
```

Then, update the `.env.local` file with your actual credentials:

#### Firebase Configuration

- `NEXT_PUBLIC_API_KEY` - Your Firebase API key
- `NEXT_PUBLIC_AUTH_DOMAIN` - Your Firebase auth domain
- `NEXT_PUBLIC_PROJECT_ID` - Your Firebase project ID
- `NEXT_PUBLIC_STORAGE_BUCKET` - Your Firebase storage bucket
- `NEXT_PUBLIC_MESSAGING_SENDER_ID` - Your Firebase messaging sender ID
- `NEXT_PUBLIC_APP_ID` - Your Firebase app ID
- `NEXT_PUBLIC_MEASUREMENT_ID` - Your Firebase measurement ID

#### Application URLs

- `NEXT_PUBLIC_BASE_APP_URL` - Base URL of your application (e.g., http://localhost:3000 for development)
- `NEXT_PUBLIC_API_URL` - API endpoint URL (e.g., http://localhost:3001/api for development)

### 4. Generate Optimized Images Manifest

**IMPORTANT**: Before running the application for the first time or after adding new images, generate the optimized images manifest:

```bash
pnpm run generate-optimized-manifest
```

This script processes images from `public/assets/images/` and creates optimized WebP versions in `public/assets/optimized-images/`, along with a manifest file.

## Development

### Start Development Server

```bash
pnpm dev
```

Or with turbo mode (faster):

```bash
pnpm dev
```

The application will be available at [http://localhost:3000](http://localhost:3000)

### Start on Specific Port

```bash
pnpm dev:port
```

This runs the dev server on port 3000 explicitly.

## Build & Production

### Build for Production

```bash
pnpm build
```

This command will:

1. Generate the image manifest (`generate-manifest`)
2. Build the Next.js application for production

### Start Production Server

```bash
pnpm start
```

## Available Scripts

| Script                             | Description                                 |
| ---------------------------------- | ------------------------------------------- |
| `pnpm dev`                         | Start development server with Turbo mode    |
| `pnpm dev:port`                    | Start development server on port 3000       |
| `pnpm build`                       | Build the application for production        |
| `pnpm start`                       | Start the production server                 |
| `pnpm lint`                        | Run ESLint to check code quality            |
| `pnpm generate-manifest`           | Generate image manifest from assets         |
| `pnpm generate-optimized-manifest` | Generate optimized WebP images and manifest |

## Deployment

### Environment Requirements

For production deployment, ensure the following:

#### Server Requirements

- **Node.js**: 20.x or higher
- **Memory**: Minimum 2GB RAM (4GB recommended)
- **Storage**: At least 1GB for node_modules and build artifacts

#### Environment Variables

Update all environment variables in your deployment platform with production values:

- Set `NEXT_PUBLIC_BASE_APP_URL` to your production domain
- Set `NEXT_PUBLIC_API_URL` to your production API endpoint
- Configure all Firebase credentials with production values

### Deployment Steps

1. **Pre-deployment**:

   ```bash
   pnpm install
   pnpm run generate-optimized-manifest
   pnpm build
   ```

2. **Deploy to hosting platform**:
   - **Vercel** (Recommended for Next.js):
     - Connect your repository
     - Set environment variables in Vercel dashboard
     - Deploy automatically on push to main branch
   - **Other platforms** (Netlify, AWS, etc.):
     - Build command: `pnpm build`
     - Output directory: `.next`
     - Install command: `pnpm install`
     - Node version: 20.x

3. **Post-deployment verification**:
   - Check that all environment variables are set correctly
   - Verify optimized images are loading properly
   - Test all forms and API integrations
   - Check privacy policy and contact forms

## Troubleshooting

### Images Not Loading

- Run `pnpm run generate-optimized-manifest` to regenerate the image manifest
- Check that optimized images exist in `public/assets/optimized-images/`

### Build Failures

- Clear `.next` directory: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Verify all environment variables are set

### Hydration Errors

- Ensure server-side and client-side rendering match
- Check for conditional rendering based on browser-only APIs

## Additional Information

### Technology Stack

- **Framework**: Next.js 15.5.5 (App Router)
- **React**: 19.2.3
- **TypeScript**: 5.7.3
- **Styling**: SCSS Modules
- **Image Optimization**: Sharp
- **Form Handling**: React Hook Form
- **Phone Input**: react-phone-input-2
- **Carousel**: Swiper 12.0.3
- **Backend**: Firebase

### Code Quality

- Pre-commit hooks with Husky
- ESLint for code linting
- Prettier for code formatting
- Lint-staged for staged files

### Support

For issues or questions, please contact the development team or refer to the project documentation.

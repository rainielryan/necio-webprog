import { Link } from 'react-router-dom';
import Button from '../components/Button';

function NotFoundPage() {
  return (
    <div className="flex min-h-[calc(100vh-200px)] w-full items-center justify-center">
      <section className="w-full border-y-2 border-zinc-900 bg-gradient-to-br from-zinc-50 to-zinc-100 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="relative mb-8 inline-block">
              <h1 className="text-[120px] font-black leading-none text-zinc-900 sm:text-[180px] lg:text-[220px]">
                404
              </h1>
              <div className="absolute inset-0 -z-10 blur-2xl">
                <div className="h-full w-full bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 opacity-20"></div>
              </div>
            </div>

            <div className="mb-8 space-y-4">
              <h2 className="text-2xl font-bold text-zinc-900 sm:text-3xl lg:text-4xl">
                Oops! Page Not Found
              </h2>
              <p className="mx-auto max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
                The page you're looking for seems to have wandered off into the digital void. 
                Don't worry though, even the best developers get lost sometimes.
              </p>
            </div>

            <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
              <Button to="/" variant="primary">
                <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                Back to Home
              </Button>
              <Button to="/articles" variant="secondary">
                Browse Articles
              </Button>
            </div>

            <div className="border-t border-zinc-300 pt-8">
              <p className="text-sm text-zinc-500">
                Need help? Try these popular pages:
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-3">
                <Link 
                  to="/articles" 
                  className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-900 hover:bg-zinc-50"
                >
                  Articles
                </Link>
                <Link 
                  to="/about" 
                  className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-900 hover:bg-zinc-50"
                >
                  About
                </Link>
                <Link 
                  to="/" 
                  className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 transition-all hover:border-zinc-900 hover:bg-zinc-50"
                >
                  Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NotFoundPage;

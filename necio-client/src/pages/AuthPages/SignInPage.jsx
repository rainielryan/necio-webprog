import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignInPage = () => {
  return (
    <>
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
          Welcome back
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Log In</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Sign in to your account to access your portfolio dashboard and saved content.
        </p>
      </div>

      <form className="space-y-5">
        <div>
          <label htmlFor="signin-email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <input
            id="signin-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signin-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signin-password"
            type="password"
            placeholder="Min. 8 characters"
            autoComplete="current-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-400">
            Must be a combination of letters, numbers, and symbols.
          </p>
        </div>

        <div className="flex items-center justify-between gap-4 text-sm">
          <label className="flex cursor-pointer items-center gap-2 text-zinc-600">
            <input type="checkbox" className="h-4 w-4 rounded border-zinc-300 accent-zinc-900" />
            <span>Remember me</span>
          </label>
          <button type="button" className="text-sm font-medium text-zinc-500 transition hover:text-zinc-900">
            Forgot Password?
          </button>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Log In
        </Button>

        <div className="relative flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">or</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Log In with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
        No account yet?{' '}
        <Link to="/auth/signup" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
          Create one for free
        </Link>
      </div>
    </>
  );
};

export default SignInPage;

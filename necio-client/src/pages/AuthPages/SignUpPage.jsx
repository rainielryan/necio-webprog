import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-900 focus:bg-zinc-50';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const SignUpPage = () => {
  return (
    <>
      <div className="mb-8">
        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-zinc-400">
          Get started
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Sign Up</h1>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          Create your free account and join the portfolio community today.
        </p>
      </div>

      <form className="space-y-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="text-sm font-medium text-zinc-700">
              First Name
            </label>
            <input
              id="first-name"
              type="text"
              placeholder="e.g. Rainiel"
              autoComplete="given-name"
              className={inputClasses}
            />
          </div>
          <div>
            <label htmlFor="last-name" className="text-sm font-medium text-zinc-700">
              Last Name
            </label>
            <input
              id="last-name"
              type="text"
              placeholder="e.g. Necio"
              autoComplete="family-name"
              className={inputClasses}
            />
          </div>
        </div>

        <div>
          <label htmlFor="signup-email" className="text-sm font-medium text-zinc-700">
            Email Address
          </label>
          <input
            id="signup-email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            className={inputClasses}
          />
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="Min. 8 characters"
            autoComplete="new-password"
            className={inputClasses}
          />
          <p className="mt-2 text-xs leading-5 text-zinc-400">
            Use a secure password with letters, numbers, and symbols.
          </p>
        </div>

        <Button type="submit" variant="primary" className={actionButtonClassName}>
          Create Account
        </Button>

        <div className="relative flex items-center gap-3 py-1">
          <div className="h-px flex-1 bg-zinc-200" />
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-zinc-400">or</span>
          <div className="h-px flex-1 bg-zinc-200" />
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Google
          </Button>
          <Button type="button" variant="secondary" className={actionButtonClassName}>
            Sign Up with Apple
          </Button>
        </div>
      </form>

      <div className="mt-8 border-t border-zinc-200 pt-6 text-sm text-zinc-500">
        Already have an account?{' '}
        <Link to="/auth/signin" className="font-semibold text-zinc-900 transition hover:text-zinc-600">
          Log in here
        </Link>
      </div>
    </>
  );
};

export default SignUpPage;

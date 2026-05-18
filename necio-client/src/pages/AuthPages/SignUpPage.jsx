import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

const inputClasses =
  'mt-2 w-full rounded-xl border-2 border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 hover:border-zinc-300 focus:border-zinc-900 focus:bg-zinc-50';

const inputErrorClasses =
  'mt-2 w-full rounded-xl border-2 border-red-400 bg-white px-4 py-3 text-sm text-zinc-900 outline-none transition placeholder:text-zinc-400 focus:border-red-600 focus:bg-red-50/30';

const actionButtonClassName = 'w-full rounded-xl py-3 text-[11px] tracking-[0.2em]';

const blank = {
  firstName: '',
  lastName: '',
  age: '',
  contactNumber: '',
  email: '',
  username: '',
  password: '',
};

export default function SignUpPage() {
  const [form, setForm] = useState(blank);
  const [errors, setErrors] = useState({});
  const [submittedOk, setSubmittedOk] = useState(false);

  const validate = () => {
    const e = {};
    const required = ['firstName', 'lastName', 'age', 'contactNumber', 'email', 'username', 'password'];
    required.forEach((key) => {
      if (!String(form[key]).trim()) {
        e[key] = 'Please fill out this field.';
      }
    });
    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      e.email = 'Please enter a valid email address.';
    }
    const ageStr = form.age.trim();
    if (ageStr && !/^\d+$/.test(ageStr)) {
      e.age = 'Age must use numbers only (for example 21).';
    }
    const contact = form.contactNumber.trim();
    if (contact && !/^\d{11}$/.test(contact)) {
      e.contactNumber = 'Contact number must be exactly 11 digits.';
    }
    if (/\s/.test(form.username)) {
      e.username = 'Username cannot contain spaces.';
    }
    const pwd = form.password;
    if (pwd.length > 0 && pwd.length < 8) {
      e.password = 'Password must be at least 8 characters long.';
    }
    setErrors(e);
    return e;
  };

  const handleChange = (name) => (ev) => {
    const value = ev.target.value;
    setForm((prev) => ({ ...prev, [name]: value }));
    setSubmittedOk(false);
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setSubmittedOk(false);
    const e = validate();
    if (Object.keys(e).length > 0) return;
    setSubmittedOk(true);
    setForm(blank);
  };

  const fieldClass = (name) => (errors[name] ? inputErrorClasses : inputClasses);

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

      {submittedOk ? (
        <p className="mb-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
          Your details look good. This is a demo form — no account was created.
        </p>
      ) : null}

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>
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
              value={form.firstName}
              onChange={handleChange('firstName')}
              className={fieldClass('firstName')}
            />
            {errors.firstName ? (
              <p className="mt-1 text-xs text-red-600">{errors.firstName}</p>
            ) : null}
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
              value={form.lastName}
              onChange={handleChange('lastName')}
              className={fieldClass('lastName')}
            />
            {errors.lastName ? <p className="mt-1 text-xs text-red-600">{errors.lastName}</p> : null}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="signup-age" className="text-sm font-medium text-zinc-700">
              Age
            </label>
            <input
              id="signup-age"
              type="text"
              inputMode="numeric"
              placeholder="Numbers only, e.g. 21"
              autoComplete="bday"
              value={form.age}
              onChange={handleChange('age')}
              className={fieldClass('age')}
            />
            {errors.age ? <p className="mt-1 text-xs text-red-600">{errors.age}</p> : null}
          </div>
          <div>
            <label htmlFor="signup-contact" className="text-sm font-medium text-zinc-700">
              Contact Number
            </label>
            <input
              id="signup-contact"
              type="text"
              inputMode="numeric"
              placeholder="11 digits, e.g. 09171234567"
              autoComplete="tel"
              value={form.contactNumber}
              onChange={handleChange('contactNumber')}
              className={fieldClass('contactNumber')}
            />
            {errors.contactNumber ? (
              <p className="mt-1 text-xs text-red-600">{errors.contactNumber}</p>
            ) : null}
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
            value={form.email}
            onChange={handleChange('email')}
            className={fieldClass('email')}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-600">{errors.email}</p> : null}
        </div>

        <div>
          <label htmlFor="signup-username" className="text-sm font-medium text-zinc-700">
            Username
          </label>
          <input
            id="signup-username"
            type="text"
            placeholder="No spaces, e.g. rainiel_necio"
            autoComplete="username"
            value={form.username}
            onChange={handleChange('username')}
            className={fieldClass('username')}
          />
          {errors.username ? <p className="mt-1 text-xs text-red-600">{errors.username}</p> : null}
        </div>

        <div>
          <label htmlFor="signup-password" className="text-sm font-medium text-zinc-700">
            Password
          </label>
          <input
            id="signup-password"
            type="password"
            placeholder="At least 8 characters"
            autoComplete="new-password"
            value={form.password}
            onChange={handleChange('password')}
            className={fieldClass('password')}
          />
          {errors.password ? (
            <p className="mt-1 text-xs text-red-600">{errors.password}</p>
          ) : (
            <p className="mt-2 text-xs leading-5 text-zinc-400">
              Use at least 8 characters. Mix letters, numbers, and symbols for a stronger password.
            </p>
          )}
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
}

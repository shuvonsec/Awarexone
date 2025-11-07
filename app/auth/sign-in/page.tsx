export default function SignInPage() {
  return (
    <div className="py-10 max-w-md mx-auto space-y-4">
      <div className="text-center">
        <div className="h1">Welcome back</div>
        <p className="caption mt-2">Sign in to manage your reports and profile.</p>
      </div>
      <div className="card p-6 space-y-4">
        <input className="border rounded-xl px-3 py-2 w-full" type="email" placeholder="Email" />
        <input className="border rounded-xl px-3 py-2 w-full" type="password" placeholder="Password" />
        <button className="w-full px-4 py-2 rounded-xl bg-black text-white">Sign In</button>
      </div>
      <p className="caption text-center">
        New to AwarexOne? <a className="underline" href="/auth/sign-up">Create an account</a>.
      </p>
    </div>
  );
}

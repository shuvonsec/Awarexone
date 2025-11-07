export default function SignUpPage() {
  return (
    <div className="py-10 max-w-md mx-auto space-y-4">
      <div className="text-center">
        <div className="h1">Create your account</div>
        <p className="caption mt-2">Join the AwarexOne community in minutes.</p>
      </div>
      <div className="card p-6 space-y-4">
        <input className="border rounded-xl px-3 py-2 w-full" placeholder="Full name" />
        <input className="border rounded-xl px-3 py-2 w-full" type="email" placeholder="Email" />
        <input className="border rounded-xl px-3 py-2 w-full" type="password" placeholder="Password" />
        <button className="w-full px-4 py-2 rounded-xl bg-black text-white">Sign Up</button>
      </div>
      <p className="caption text-center">
        Already have an account? <a className="underline" href="/auth/sign-in">Sign in</a>.
      </p>
    </div>
  );
}

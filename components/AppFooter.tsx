export default function AppFooter() {
  return (
    <footer className="mt-16 border-t border-neutral-200 bg-white">
      <div className="container-max grid md:grid-cols-4 gap-8 py-12">
        <div>
          <div className="font-semibold mb-2">AwarexOne</div>
          <p className="caption">Reunite items. Report scams. Help others.</p>
        </div>
        <div>
          <div className="font-semibold mb-2">Features</div>
          <ul className="space-y-1 caption">
            <li>Lost &amp; Found</li>
            <li>Scam Alerts</li>
            <li>Verification</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Resources</div>
          <ul className="space-y-1 caption">
            <li>Community Education</li>
            <li>Safety &amp; Privacy</li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Company</div>
          <ul className="space-y-1 caption">
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-neutral-200">
        <div className="container-max py-4 caption">© 2025 AwarexOne</div>
      </div>
    </footer>
  );
}

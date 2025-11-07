import AlertNote from "@/components/AlertNote";

export default function VerifyProfileFace() {
  return (
    <div className="py-10 max-w-2xl mx-auto space-y-4">
      <div className="h1">Live Face Check</div>
      <AlertNote>Use your device camera to complete the liveness check. This stub represents the experience.</AlertNote>
      <div className="card p-8 text-center">
        <div className="h3">Camera Preview</div>
        <p className="caption mt-2">Prompt user to blink and turn head slowly.</p>
      </div>
      <button className="px-4 py-2 rounded-xl bg-black text-white">Finish Verification</button>
    </div>
  );
}

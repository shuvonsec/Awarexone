import Uploader from "@/components/Uploader";

export default function VerifyProfilePhoto() {
  return (
    <div className="py-10 max-w-2xl mx-auto space-y-4">
      <div className="h1">Photo Verification</div>
      <p className="caption">Upload a clear profile photo and ID document.</p>
      <Uploader />
      <button className="px-4 py-2 rounded-xl bg-black text-white">Continue</button>
    </div>
  );
}

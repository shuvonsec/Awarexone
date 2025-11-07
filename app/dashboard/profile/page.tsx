import BadgeStatus from "@/components/BadgeStatus";
import AlertNote from "@/components/AlertNote";

export default function DashboardProfile() {
  return (
    <div className="py-10 space-y-6">
      <div>
        <div className="h1">Your Profile</div>
        <p className="caption mt-2">Manage verification progress and recent submissions.</p>
      </div>
      <div className="card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <div className="h3">Verification Status</div>
            <p className="caption">Complete the three steps to unlock trusted badge.</p>
          </div>
          <BadgeStatus status="VERIFYING" />
        </div>
        <AlertNote>Upload clear documents so moderators can approve faster.</AlertNote>
        <div className="grid md:grid-cols-3 gap-3 caption">
          <div className="card p-4">
            <div className="h3">Profile Basics</div>
            <p className="mt-1">Completed</p>
          </div>
          <div className="card p-4">
            <div className="h3">Photo Uploads</div>
            <p className="mt-1">Pending review</p>
          </div>
          <div className="card p-4">
            <div className="h3">Face Check</div>
            <p className="mt-1">Scheduled</p>
          </div>
        </div>
      </div>
    </div>
  );
}

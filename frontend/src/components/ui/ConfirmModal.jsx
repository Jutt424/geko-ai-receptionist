import { X, AlertTriangle } from "lucide-react";

export default function ConfirmModal({
  open,
  title = "Confirm action",
  message = "Are you sure you want to continue?",
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  onCancel,
  loading = false,
  variant = "danger",
}) {
  if (!open) return null;

  const confirmClasses =
    variant === "danger"
      ? "bg-rose-600 text-white hover:bg-rose-700"
      : "bg-primary text-white hover:bg-primary/90";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      <div className="relative w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-start justify-between border-b border-background-hover px-5 py-4">
          <div className="flex items-start gap-3">
            <span className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-50 text-rose-600">
              <AlertTriangle className="h-4 w-4" />
            </span>
            <div>
              <h3 className="text-lg font-semibold text-textcolor-default">{title}</h3>
              <p className="mt-1 text-sm text-textcolor-secondary">{message}</p>
            </div>
          </div>
          <button
            onClick={onCancel}
            aria-label="Close confirmation dialog"
            className="rounded-full p-1 text-textcolor-muted transition hover:bg-background-hover"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center justify-end gap-3 px-5 py-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            className="rounded-lg border border-background-hover px-4 py-2 text-sm font-medium text-textcolor-secondary transition hover:border-primary/40 hover:bg-primary/5 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-60 ${confirmClasses}`}
          >
            {loading ? "Deleting..." : confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}

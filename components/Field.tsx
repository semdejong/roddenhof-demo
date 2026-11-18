export default function Field({
  id,
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  error,
  multiline = false,
}: {
  id: string;
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  error?: string;
  multiline?: boolean;
}) {
  const describedBy = error ? `${id}-fout` : undefined;
  const shared = {
    id,
    name,
    required,
    autoComplete,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": describedBy,
    className: "field",
  } as const;

  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
        {required ? (
          <>
            <span aria-hidden="true"> *</span>
            <span className="sr-only"> (verplicht)</span>
          </>
        ) : null}
      </label>
      {multiline ? (
        <textarea {...shared} rows={6} />
      ) : (
        <input {...shared} type={type} />
      )}
      {error ? (
        <p id={`${id}-fout`} className="field-error" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}

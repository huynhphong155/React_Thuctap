import "./index.scss";

export interface UiInputFieldProps {
  field: { name: string };
  form: { errors: any; touched: any };
  type: string;
  label: string;
  placeholder: string;
  disabled: boolean;
  autoComplete?: string;
  onFocus?: any;
}

export function UiInputField(props: UiInputFieldProps) {
  const {
    field,
    form,
    type = "text",
    label = "",
    placeholder = "",
    autoComplete = "off",
    disabled = false,
    onFocus,
  } = props;
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <div className="UiInputField">
      {label && (
        <label className="UiInputField-title" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        id={name}
        {...field}
        type={type}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        className="UiInputField-input"
        style={{ background: "none" }}
        onFocus={onFocus}
      />
      {showError && (
        <p
          className={showError ? "text-[#8b2424] absolute bottom-[-25px]" : ""}
        >
          {errors[name]}
        </p>
      )}
    </div>
  );
}

export default UiInputField;

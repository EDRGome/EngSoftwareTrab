// components/ui/win95.tsx
export const Window = ({ title, x, y, width, height, onClose, children }) => (
  <div
    style={{
      position: "absolute",
      left: x,
      top: y,
      width: width,
      height: height,
      border: "1px solid black",
      background: "white",
      borderRadius: "5px",
    }}
  >
    <div style={{ padding: "5px", backgroundColor: "#0078D7", color: "white" }}>
      {title}
      <span
        style={{
          float: "right",
          cursor: "pointer",
        }}
        onClick={onClose}
      >
        X
      </span>
    </div>
    <div>{children}</div>
  </div>
)

export const Button = ({ onClick, children, className }) => (
  <button onClick={onClick} className={className}>
    {children}
  </button>
)

export const TaskBar = ({ children }) => (
  <div
    style={{
      height: "30px",
      background: "#0078D7",
      padding: "5px",
      display: "flex",
      justifyContent: "flex-start",
    }}
  >
    {children}
  </div>
)

export const Desktop = ({ children, className }) => <div className={className}>{children}</div>

export const Icon = ({ icon, label }) => (
  <div>
    {/* Replace with actual icon implementation */}
    <span>{icon}</span> {label}
  </div>
)


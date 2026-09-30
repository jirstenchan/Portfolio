"use client";

export default function navbar() {
  return (
    <nav className="text-[var(--darkBlue)]">
      <div className="flex">
        <p>marie.jirsten.chan@gmail.com</p>
        <button
          type="button"
          onClick={() => {
            void navigator.clipboard.writeText("marie.jirsten.chan@gmail.com");
          }}
        >
          {"<"}Copy{">"}
        </button>
      </div>
    </nav>
  );
}

import { useRef, useState } from "react";
import UseOutsideClick from ".";

export default function UseOnclickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  UseOutsideClick(ref, () => setShowContent(false));

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {showContent ? (
        <div
          ref={ref}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "20px",
            gap: "10px", 
          }}
        >
          <h1>This is a random content</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button
          style={{
            marginTop: "20px",
            padding: "3px 10px",
            fontSize: "14px",
            fontWeight: "600",
          }}
          onClick={() => setShowContent(true)}
        >
          Show Content
        </button>
      )}
    </div>
  );
}

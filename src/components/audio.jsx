import React, { useEffect, useRef } from "react";
import theme from "../assets/theme.mp3";

export default function AudioBar() {
  const ref = useRef(null);
  useEffect(() => { if (ref.current) ref.current.volume = 0.5; }, []);
  return (
    <section className="audio-section">
      <div className="audio-shell">
        <audio ref={ref} id="site-audio" controls preload="metadata">
          <source src={theme} type="audio/mpeg" />
        </audio>
      </div>
    </section>
  );
}

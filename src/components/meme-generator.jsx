/* @jsxRuntime classic */
/* @jsx React.createElement */
import React, { useState, useEffect } from "react";
import MemeCanvas from "./MemeCanvas";
import "../styles/home.css";
import "../styles/Gallery.css";

const MAX_ID = 3333;

export default function MemeGenerator() {
  const [tokenId, setTokenId] = useState("");
  const [nftData, setNftData] = useState(null);
  const [error, setError] = useState("");
  const [warning, setWarning] = useState("");
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");

  useEffect(() => {
    if (!warning) return;
    const t = setTimeout(() => setWarning(""), 3000);
    return () => clearTimeout(t);
  }, [warning]);

  const fetchNFT = async (id) => {
    if (id > MAX_ID) { setWarning(`Max ID is ${MAX_ID}`); return; }
    const filename = encodeURIComponent(`Mempoolio_#${id}.png`);
    const imageUrl = `/images/${filename}`;
    try {
      const res = await fetch(imageUrl, { method: "HEAD" });
      if (!res.ok) throw new Error();
      setNftData({ name: `Mempoolio #${id}`, image: imageUrl });
      setError("");
    } catch {
      setError("NFT not found");
    }
  };

  const handleSearch  = () => {
    if (!tokenId) return;
    setTopText(""); setBottomText("");
    fetchNFT(Number(tokenId));
  };

  const handleRandom  = () => {
    const id = Math.floor(Math.random() * MAX_ID) + 1;
    setTokenId(String(id));
    setTopText(""); setBottomText("");
    fetchNFT(id);
  };

  const handleDownload = () => {
    const canvas = document.querySelector("canvas");
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `${nftData?.name || "meme"}.png`;
    link.href = canvas.toDataURL();
    link.click();
  };

  useEffect(() => { handleRandom(); }, []);
  
  useEffect(() => {
    if (!tokenId) return;
    const id = Number(tokenId);
    if (!Number.isFinite(id) || id < 1) return;

    const t = setTimeout(() => fetchNFT(id), 250); // 250ms
    return () => clearTimeout(t);
  }, [tokenId]);

  return (
    <div className="retro-bg retro-bg--gif">
      <main className="page retro-font">


        <section className="box mg-shell">
          <div className="box-head">Meme Editor</div>
          <div className="box-body">

            <div className="mg-id">
              <span className="mg-id__label">Enter your Mempoolio ID</span>

              <input
                type="number"
                className="mg-id__input"
                placeholder={`#1–${MAX_ID}`}
                min={1}
                max={MAX_ID}
                value={tokenId}
                onChange={(e) => {
                  let val = e.target.value;
                  if (val === "") return setTokenId("");
                  const num = Math.max(1, Math.min(MAX_ID, Number(val)));
                  setTokenId(String(num));
                }}
              />

              <button className="mg-id__dice" title="Random" onClick={handleRandom}>
                🎲
              </button>
            </div>

            {warning && <p className="error" style={{textAlign:'center'}}>{warning}</p>}
            {error &&   <p className="error" style={{textAlign:'center'}}>{error}</p>}

            {nftData && (
              <div className="preview-box small">
                <MemeCanvas nft={nftData} topText={topText} bottomText={bottomText} />
              </div>
            )}

            {/* Top / Bottom */}
            {nftData && (
              <div className="mg-fields">
                <input
                  className="mg-text"
                  type="text"
                  placeholder="Top text"
                  value={topText}
                  onChange={(e) => setTopText(e.target.value)}
                />
                <input
                  className="mg-text"
                  type="text"
                  placeholder="Bottom text"
                  value={bottomText}
                  onChange={(e) => setBottomText(e.target.value)}
                />
              </div>
            )}

            {nftData && (
              <div className="mg-download">
                <button className="btn-old btn-old--primary" onClick={handleDownload}>
                  Download
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

import React, { useRef, useEffect } from 'react';

export default function MemeCanvas({ nft, topText = '', bottomText = '' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!nft?.image) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = nft.image;

    img.onload = async () => {
      // w and h for canvas
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      // fonts pull
      try {
        await document.fonts.load(`bold ${Math.floor(canvas.width/8)}px Impact`);
      } catch {
      }

      // optimal font size
      function fitFontSize(text) {
        let size = Math.floor(canvas.width / 8);
        const maxW = canvas.width - 20;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'top';
        do {
          ctx.font = `bold ${size}px Impact`;
          if (ctx.measureText(text).width <= maxW) break;
          size -= 2;
        } while (size > 10);
        return size;
      }

      // text on picture
      function drawMemeText(text, y, baseline) {
        if (!text) return;
        const up = text.toUpperCase();
        const fontSize = fitFontSize(up);

        ctx.font = `bold ${fontSize}px Impact`;
        ctx.textAlign = 'center';
        ctx.textBaseline = baseline;
        ctx.fillStyle = '#fff';
        ctx.strokeStyle = '#000';
        ctx.lineWidth = Math.max(2, Math.floor(fontSize / 8));
        ctx.lineJoin = 'round';      
        ctx.miterLimit = 2;

        ctx.strokeText(up, canvas.width / 2, y);
        ctx.fillText(up, canvas.width / 2, y);
      }

      // top-bot text
      drawMemeText(topText, 10, 'top');
      drawMemeText(bottomText, canvas.height - 10, 'bottom');
    };
  }, [nft, topText, bottomText]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
        margin: '0 auto'
      }}
    />
  );
}

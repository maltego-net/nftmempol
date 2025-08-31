/* @jsxRuntime classic */
/* @jsx React.createElement */
import React from "react";
import "../styles/home.css";
import remilio from "../assets/remilio.jpg";
import alien from "../assets/alien.jpg";
import black from "../assets/black.jpg";
import usuall from "../assets/default.jpg";
import ghost from "../assets/ghost.jpg";
import gucci from "../assets/gucci.jpg";
import LV from "../assets/LV.jpg";
import red from "../assets/red.jpg";
import shadow from "../assets/shadow.jpg";
import sigma from "../assets/sigma.jpg";
import white from "../assets/white.jpg";
import zombie from "../assets/zombie.jpg";
import preview from "../assets/preview.webm";

export default function Home() {
  return (
    <div className="retro-bg--gif">
      <main className="page">
        <section className="box">
          <div className="box-head">MEMPOOLIO COCKLECTION</div>
          <div className="box-body center">
            <video className="hero-img" src={preview} autoPlay loop muted playsInline></video>
            <p className="underlink">
              <a href="https://magiceden.io/ordinals/marketplace/mempoolio" target="_blank" rel="noreferrer">
                You can’t view and trade MEMPOOLIO on the secondary market on Magic Eden
              </a>
            </p>
          </div>
        </section>

        <section className="box">
          <div className="box-head">WHAT IS MEMPOOLIO</div>
          <div className="box-body">
            <p>
              WE ARE EVERYTHING AND NOTHING AT THE SAME TIME.{" "}
              <a href="https://remilio.org" target="_blank" rel="noreferrer">
                REDACTED REMILIO BABIES DERIVATIVE
              </a>
              . Created and inscribed by your friends MEMPOOLIO SIGMA Chad and Andrew Tate
            </p>
            <div className="two-col">
              <figure>
                <img src={remilio} alt="Remilio sample"/>
                <figcaption><a href="https://magiceden.io/ordinals/item-details/2b0ae3c78097a00b21acceac37d0da83a93387aaa18153045ec46e62244c243bi0">Mempoolio #1489</a></figcaption>
              </figure>
              <figure>
                <img src={sigma} alt="Based Angels sample"/>
                <figcaption><a href="https://magiceden.io/ordinals/item-details/5716ff0ec03768d61cb5c5e312226f30f3327ae1e6e0ba85edd611cdb3a482bdi0">Sigma #2539</a></figcaption>
              </figure>
            </div>
            <p>
              During the creation of the collection we were inspired by cocaine, jerked off a little, sniffed women's feet and listened to Playboi Carti.
            </p>
          </div>
        </section>

        <section className="box">
          <div className="box-head">TYPES OF GAYS IN MEMPOOLIO</div>
          <div className="box-body">
            {/** —— 1) 3 + 2 —— */}
            {(() => {
              const bodies = [
                { src: usuall, label: "Default", url: "https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22body%22%3A%5B%7B%22traitType%22%3A%22body%22%2C%22value%22%3A%22default%22%2C%22label%22%3A%22default%22%2C%22count%22%3A2463%2C%22floor%22%3A%220.00036%22%2C%22image%22%3A%22https%3A%2F%2Fimg-cdn.magiceden.dev%2Frs%3Afill%3A400%3A0%3A0%2Fplain%2Fhttps%253A%252F%252Frenderer.magiceden.dev%252Fv2%252Frender%253Fid%253Dffee45da45e670a025ad0e1eaf8ce9640279a7073fede410a3d828eaa767364di0%22%2C%22total%22%3A2463%7D%5D%7D" },
                { src: shadow, label: "Shadow", url: "https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22body%22%3A%5B%7B%22traitType%22%3A%22body%22%2C%22value%22%3A%22shadow%22%2C%22label%22%3A%22shadow%22%2C%22count%22%3A449%7D%5D%7D" },
                { src: ghost,  label: "Ghost",  url: "https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22body%22%3A%5B%7B%22traitType%22%3A%22body%22%2C%22value%22%3A%22Ghost%22%2C%22label%22%3A%22Ghost%22%2C%22count%22%3A287%7D%5D%7D" },
                { src: alien,  label: "Alien",  url: "https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22body%22%3A%5B%7B%22traitType%22%3A%22body%22%2C%22value%22%3A%22Alien%22%2C%22count%22%3A97%7D%5D%7D" },
                { src: zombie, label: "Zombie", url: "https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22body%22%3A%5B%7B%22traitType%22%3A%22body%22%2C%22value%22%3A%22Zombie%22%2C%22count%22%3A28%7D%5D%7D" },
              ];
              const firstRow  = bodies.slice(0, 3);
              const secondRow = bodies.slice(3);

              return (
                <>
                  <div className="grid-3">
                    {firstRow.map((it, i) => (
                      <figure key={`b1-${i}`} className="square">
                        <a href={it.url} target="_blank" rel="noreferrer">
                          <img src={it.src} alt={it.label} />
                        </a>
                        <figcaption>
                          <a href={it.url} target="_blank" rel="noreferrer">{it.label}</a>
                        </figcaption>
                      </figure>
                    ))}
                  </div>

                  <div className="center-two">
                    {secondRow.map((it, i) => (
                      <figure key={`b2-${i}`} className="square">
                        <a href={it.url} target="_blank" rel="noreferrer">
                          <img src={it.src} alt={it.label} />
                        </a>
                        <figcaption>
                          <a href={it.url} target="_blank" rel="noreferrer">{it.label}</a>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </>
              );
            })()}

            <p className="mt">Also we have some GAY NIQABSSSS</p>

            {/** —— 2)  3 + 2 —— */}
            {(() => {
              const niqabs = [
                { src: red,   label:"Red",   url:"https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22niqab%22%3A%5B%7B%22value%22%3A%22Red+Niqab%22%7D%5D%7D" },
                { src: white, label:"White", url:"https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22niqab%22%3A%5B%7B%22value%22%3A%22White+Niqab%22%7D%5D%7D" },
                { src: black, label:"Black", url:"https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22niqab%22%3A%5B%7B%22value%22%3A%22Black+Niqab%22%7D%5D%7D" },
                { src: LV,    label:"LV",    url:"https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22niqab%22%3A%5B%7B%22value%22%3A%22LV+Niqab%22%7D%5D%7D" },
                { src: gucci, label:"Gucci", url:"https://magiceden.io/ordinals/marketplace/mempoolio?selectedAttributes=%7B%22niqab%22%3A%5B%7B%22value%22%3A%22Gucci+Niqab%22%7D%5D%7D" },
              ];
              const firstRow  = niqabs.slice(0, 3);
              const secondRow = niqabs.slice(3);
              return (
                <>
                  <div className="grid-3">
                    {firstRow.map((it, i) => (
                      <figure key={`n1-${i}`} className="square">
                        <a href={it.url} target="_blank" rel="noreferrer">
                          <img src={it.src} alt={it.label} />
                        </a>
                        <figcaption>
                          <a href={it.url} target="_blank" rel="noreferrer">{it.label}</a>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <div className="center-two">
                    {secondRow.map((it, i) => (
                      <figure key={`n2-${i}`} className="square">
                        <a href={it.url} target="_blank" rel="noreferrer">
                          <img src={it.src} alt={it.label} />
                        </a>
                        <figcaption>
                          <a href={it.url} target="_blank" rel="noreferrer">{it.label}</a>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                </>
              );
            })()}
          </div>
        </section>
        <section className="box">
          <div className="box-head">REMINDER</div>
          <div className="box-body center small">
            Don’t forget that u are Broke Gay
          </div>
        </section>
      </main>
    </div>
  );
}

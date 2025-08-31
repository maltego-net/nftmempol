import React from "react";
import { Link } from "react-router-dom";
import headerImg from "../assets/header.jpg";  
import AudioBar from "./audio";             

export default function Header() {
  return (
    <>
      <section className="header-hero">
        <img className="header-img" src={headerImg} alt="Mempoolio header" />
      </section>

      <section className="box box--dark">
        <div className="box-head box-head--brand">
          <span className="brand-title">
            NOT WELCOME to MEMPOOLIO! 别做个穷小子，去改变你的生活吧
          </span>
        </div>
        <div className="box-body box-body--brand">
          <p className="brand-sub">
            MEMPOOLIO is CABAL. MEMPOOLIO IS LIFE. MEMPOOLIO IS CULTURE.
            <b> 3333 </b> CHAD INSCRIPTIONS WHICH WILL CONQUER WEB3
          </p>
        </div>
      </section>

      <AudioBar />

      <section className="link-block">
        <nav className="linkbar">
          <Link to="/">HOME</Link>
          <span className="dot">|</span>
          <a href="https://x.com/mempoolio?s=21" target="_blank" rel="noreferrer">TWITTER</a>
          <span className="dot">|</span>
          <a href="https://discord.com/invite/WmtGwKRJFw" target="_blank" rel="noreferrer">DISCORD</a>
          <span className="dot">|</span>
          <Link to="/memegenerator">MEME GENERATOR</Link>
          <span className="dot">|</span>
          <a href="https://magiceden.io/ordinals/marketplace/mempoolio" target="_blank" rel="noreferrer">
            MAGIC MEMPOOLIO SECONDARY
          </a>
          <span className="dot">|</span>
          <a href="https://pornhub.com" target="_blank" rel="noreferrer">PORN</a>
        </nav>
      </section>
    </>
  );
}

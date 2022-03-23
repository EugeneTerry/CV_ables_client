/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { LanguageContext } from "./LanguageProvider";

export const LanguageList = (props) => {
  const{ languages, getLanguages} = useContext(LanguageContext);


  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <article className="language__wrapper">
        <h1>Languages</h1>
        <div className="language__stack">
        {languages.map((language) => {
          return (
            <div key={`language--${language.id}`} className="language">
              <section className="language">
                <div className="language__label">
                <ul>{language.label}</ul>
                </div>
              </section>
            </div>
          );
        })}
        </div> 
    </article>
  );
};
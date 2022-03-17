import React, { useContext, useEffect } from "react";
import { FrameworkContext } from "./framework/FrameworkProvider";
import { LanguageContext } from "./language/LanguageProvider";

export const LangFrameList = (props) => {
  const{ frameworks, getFrameworks} = useContext(FrameworkContext);
  const{ languages, getLanguages} = useContext(LanguageContext);


  useEffect(() => {
    getFrameworks();
  }, []);

  useEffect(() => {
    getLanguages();
  }, []);

  return (
    <article className="frame__wrapper">
        <h1>Frameworks</h1>
            <div className="frame__stack">
            {frameworks.map((framework) => {
                return (
                <div key={`framework--${framework.id}`} className="frames">
                    <section className="framework">
                    <div className="framework__name">
                        <ul>{framework.label}</ul>
                    </div>
                    </section>
                </div>
                );
            })}
            </div>
        <h1>Languages</h1>
        <div className="language__stack">
        {languages.map((language) => {
          return (
            <div key={`language--${language.id}`} className="languages">
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
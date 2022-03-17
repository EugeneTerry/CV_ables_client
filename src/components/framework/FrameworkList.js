import React, { useContext, useEffect } from "react";
import { FrameworkContext } from "./FrameworkProvider"; 

export const FrameworkList = (props) => {
  const{ frameworks, getFrameworks} = useContext(FrameworkContext);

  useEffect(() => {
    getFrameworks();
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
    </article>
  );
};
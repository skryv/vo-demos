import React, { useEffect, useState } from "react";
import { map } from "lodash";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-wizard";
import "@govflanders/vl-ui-progress-bar";
import "@govflanders/vl-ui-tooltip";
import "@govflanders/vl-ui-util";

export default function Tooltips() {
  const [activePaneIndex, setActivePaneIndex] = useState(0);

  useEffect(() => {
    window.vl.tooltip.dressAll();
  }, []);

  const panes = [
    { id: 1, title: "First pane", content: "Content of first pane" },
    { id: 2, title: "Second pane", content: "Content of second pane" },
    { id: 3, title: "Third pane", content: "Content of third pane" },
  ];

  return (
    <div>
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        <p>
          Problem: We have a wizard with a progress bar on top. The progress bar
          has tooltips for each step, showing the title of the connected pane.
          When you navigate through the progress bar a lot, multiple of these
          tooltips are added to the DOM, resulting in a very dark shadow around
          the tooltip.
        </p>
        <a
          href="https://github.com/skryv/vo-demos/blob/main/src/Tooltips.jsx"
          target="_blank"
          rel="noreferrer"
        >
          Go to the code
        </a>
      </div>

      <div>
        <p>Demo:</p>
        <div className="vl-wizard js-vl-wizard" data-vl-wizard>
          {/* progress bar */}
          <div className="vl-progress-bar vl-progress-bar--numeric">
            {map(panes, (pane, index) => (
              <div
                key={pane.id}
                className={
                  activePaneIndex === index
                    ? "vl-progress-bar__step vl-progress-bar__step--active"
                    : "vl-progress-bar__step"
                }
              >
                <button
                  aria-label={pane.title}
                  data-vl-tooltip-content={pane.title}
                  data-vl-tooltip
                  data-vl-tooltip-placement="top"
                  className="vl-progress-bar__bullet js-vl-tooltip"
                  aria-current="step"
                  data-vl-wizard-step
                  onClick={() => setActivePaneIndex(index)}
                >
                  <span className="vl-u-visually-hidden">{pane.title}</span>
                </button>
              </div>
            ))}
          </div>

          {/* panes */}
          <div className="vl-wizard__panes">
            {map(
              panes,
              (pane, index) =>
                activePaneIndex === index && (
                  <section key={pane.id} className="vl-wizard__pane">
                    {/* content */}
                    <div data-vl-wizard-focus style={{ marginBottom: "3rem" }}>
                      {pane.content}
                    </div>

                    {/* navigation */}
                    <div>
                      <p>{`Step ${index + 1} of ${panes.length}`}</p>
                      <div className="vl-col--1-1">
                        <div className="vl-action-group">
                          {index > 0 && (
                            <button
                              type="button"
                              className="vl-button"
                              data-vl-wizard-prev
                              onClick={() => setActivePaneIndex(index - 1)}
                            >
                              <i
                                className="vl-link__icon vl-link__icon--before vl-vi vl-vi-arrow-left-fat"
                                aria-hidden="true"
                              />
                              Previous
                            </button>
                          )}

                          {index < panes.length - 1 && (
                            <button
                              data-vl-wizard-next
                              className="vl-button"
                              onClick={() => setActivePaneIndex(index + 1)}
                            >
                              Next
                              <i
                                className="vl-link__icon vl-link__icon--before vl-vi vl-vi-arrow-right-fat"
                                aria-hidden="true"
                              />
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  </section>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

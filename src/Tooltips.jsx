import React, { useEffect, useState } from "react";
import { map } from "lodash";

import "@govflanders/vl-ui-core";
import "@govflanders/vl-ui-wizard";
import "@govflanders/vl-ui-progress-bar";
import "@govflanders/vl-ui-tooltip";
import "@govflanders/vl-ui-util";

const initialPanes = [
  { id: 1, title: "First pane", content: "Content of first pane" },
  { id: 2, title: "Second pane", content: "Content of second pane" },
  { id: 3, title: "Third pane", content: "Content of third pane" },
];

export default function Tooltips() {
  const [counter, setCounter] = useState(0);
  const [activePaneIndex, setActivePaneIndex] = useState(0);
  const [panes, setPanes] = useState([
    ...initialPanes,
    {
      id: 4,
      title: counter,
      content: "Content of fourth pane",
    },
  ]);

  useEffect(() => {
    window.vl.tooltip.undressAll(); // this line fixes the problem
    window.vl.tooltip.dressAll();
  }, [panes]);

  function increaseCounter() {
    setPanes([
      ...initialPanes,
      {
        id: 4,
        title: counter + 1,
        content: "Content of fourth pane",
      },
    ]);
    setCounter(counter + 1);
  }

  return (
    <div>
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        <p>
          Problem: We have a wizard with a progress bar on top. In some cases,
          the progress bar needs to change, based on other changes in the page.
          In this case, the tooltip of the fourth section shows the number of
          changes to the input value. Every time a change is triggered, we need
          to dress the tooltips again, or they don't update. However, this seems
          to add new tooltips, making their shadow to appear darker and darker.
          What would be a better way to change the content of a tooltip?
        </p>
        <a
          href="https://github.com/skryv/vo-demos/blob/main/src/Tooltips.jsx"
          target="_blank"
          rel="noreferrer"
        >
          Go to the code
        </a>
      </div>
      <div
        style={{
          marginBottom: "5rem",
        }}
      >
        <p>
          <span>Current status: </span>
          <span class="vl-u-mark vl-u-mark--success">
            Fixed by: Undressing the tooltips every time before dressing them
            again
          </span>
        </p>
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
                      <div>{pane.content}</div>
                      <div>
                        <div>
                          Current counter: {counter} (also see tooltip of fourth
                          section)
                        </div>
                        <button onClick={increaseCounter}>
                          Increase counter
                        </button>
                      </div>
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

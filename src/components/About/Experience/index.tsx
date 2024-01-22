import { Fragment } from "react";
import { experiences } from "./data";

export default function Experience() {
  return (
    <>
      <h2 id="experience">Experience</h2>
      {experiences.map(
        ({
          title,
          company,
          companyUrl,
          endDate,
          responsibilities,
          startDate,
        }) => (
          <Fragment key={title}>
            <h3>
              <a href={companyUrl} target="_blank" rel="noopener noreferrer">
                {company}
              </a>{" "}
              - {title}
            </h3>
            <h4>
              {startDate} - {endDate}
            </h4>
            <ul>
              {responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </Fragment>
        )
      )}
    </>
  );
}

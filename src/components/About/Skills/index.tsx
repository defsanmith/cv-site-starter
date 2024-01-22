import { industryKnowledge, toolsAndTechnologies } from "./data";

export default function Skills() {
  return (
    <>
      <h2 id="skills">Skills</h2>
      <p>
        <strong>Industry Knowlegde</strong> : {industryKnowledge.join(", ")}
      </p>
      <p>
        <strong>Tools &amp; Technologies</strong> :{" "}
        {toolsAndTechnologies.join(", ")}
      </p>
    </>
  );
}

// we added a tiny helper to safely render HTML stored in JSON fro articledetials page right section
import React from "react";
import DOMPurify from "dompurify"; // we sanitize incoming html
import parse from "html-react-parser"; // we convert html string → React nodes

// props: html = raw html string, className = optional styles for the wrapper
type Props = { html: string; className?: string };

const Html: React.FC<Props> = ({ html, className = "" }) => {
  // sanitize the incoming html string to prevent XSS
  // DOMPurify removes unsafe tags/attributes (e.g., scripts, on* handlers)
  const safe = DOMPurify.sanitize(html);

  // parse the sanitized string into React elements
  // we wrap it in a div so parent can pass Tailwind classes via className
  return <div className={className}>{parse(safe)}</div>;
};

export default Html;

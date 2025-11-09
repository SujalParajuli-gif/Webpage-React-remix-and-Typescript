// we added a tiny helper to safely render HTML stored in JSON fro articledetials page right section
import React from "react";
import DOMPurify from "dompurify"; // we sanitize incoming html
import parse from "html-react-parser"; // we convert html string → React nodes

type Props = { html: string; className?: string };

const Html: React.FC<Props> = ({ html, className = "" }) => {
  // we clean the html to avoid any XSS issues
  const safe = DOMPurify.sanitize(html);

  // we render the sanitized html inside a wrapper so we can style it via className
  return <div className={className}>{parse(safe)}</div>;
};

export default Html;

import React from "react";
import { Badge } from "react-bootstrap";

export default function MyBadge({ text, color }) {
  return (
    <div className="ml-4">
      <Badge className="ml-5 mb-3" variant={color}>
        {text}
      </Badge>
    </div>
  );
}

import React from "react";
import { Badge } from "react-bootstrap";

export default function MyBadge({ text, color }) {
  return (
    <div>
      <Badge className="mb-3" variant={color}>
        {text}
      </Badge>
    </div>
  );
}

'use client'
import { useEffect } from "react";

export default function ImportBsJS() {
  useEffect(() => {
    require("../../node_modules/bootstrap/dist/js/bootstrap");
  }, []);
  return null; }
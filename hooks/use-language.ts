"use client";

import { useState, useEffect } from "react";
import { useLanguage as useLanguageContext } from "./language-context";

type Language = "pt" | "en";

export function useLanguage() {
  return useLanguageContext();
}

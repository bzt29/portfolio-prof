"use client";

import { useState } from "react";
import { PERSONAL_INFO } from "@/data/portfolioData";

export function useDownloadCv() {
  const [downloading, setDownloading] = useState(false);
  const [downloadDone, setDownloadDone] = useState(false);

  const downloadCv = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setDownloading(true);

    const link = document.createElement("a");
    link.href = PERSONAL_INFO.cvUrl;
    link.download = PERSONAL_INFO.cvFileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloading(false);
      setDownloadDone(true);
      setTimeout(() => setDownloadDone(false), 2500);
    }, 800);
  };

  return { downloading, downloadDone, downloadCv };
}

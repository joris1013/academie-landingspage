import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Nedanza Academie",
    short_name: "Nedanza",
    description:
      "Het opleidings- en verdiepingscentrum van Nedanza Psychologen. Opleidingen in systemische hulpverlening, contactuele therapie en het Exodus Model.",
    start_url: "/",
    display: "browser",
    background_color: "#f5f0e8",
    theme_color: "#2d4a2d",
    icons: [
      {
        src: "/images/fav.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}

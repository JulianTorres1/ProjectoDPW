import { useState, useEffect } from "react";

export default function Header() {
  const [text, setText] = useState("");
  const fullText = "FUTBOL CARTAGENERO";
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && index < fullText.length) {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      } else if (isDeleting && index > 1) { // Detener retroceso en la "F"
        setText((prev) => prev.slice(0, -1));
        setIndex((prev) => prev - 1);
      } else {
        setIsDeleting((prev) => !prev);
      }
    }, 150); // Velocidad de la animación

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index]);

  return (
    <header className="bg-white shadow p-4 text-center text-2xl font-bold">
      {text}
    </header>
  );
}
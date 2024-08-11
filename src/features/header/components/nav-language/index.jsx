import { menu } from "../nav-links/Menu";

export default function NavLanguage() {
  return (
    <>
      <select className="bg-transparent text-white outline-none ">
        {menu.header.languages.map((lang, index) => (
          <option key={index} value={lang} className="bg-marble-blue">
            {lang}
          </option>
        ))}
      </select>
    </>
  );
}

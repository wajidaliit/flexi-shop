import { NavLink } from "react-router-dom";
import Image from "../../../components/image";
import Container from "../../../components/share/Container";
import { footerData } from "./footer-manu";

export default function Footer() {
  return (
    <footer>
      <hr className="" />
      <Container className="py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 my-14">
          {/* About Section */}
          <div className="md:col-span-2">
            <h2 className="text-lg font-bold mb-4">About</h2>
            <p className="mb-4 md:max-w-sm md:pe-4">{footerData.aboutText}</p>
            <div className="flex space-x-4">
              {footerData.socialMedia.map((item, index) => (
                <NavLink
                  key={index}
                  to={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={24}
                    height={24}
                  />
                </NavLink>
              ))}
            </div>
          </div>
          <hr className="sm:hidden" />

          {/* Link Sections */}
          {footerData.sections.slice(0, 2).map((section, index) => (
            <>
              <div key={index}>
                <h2 className="text-lg font-bold mb-4">{section.title}</h2>
                <ul>
                  {section.links.map((link, idx) => (
                    <li key={idx} className="mb-2">
                      <NavLink href={link.href}>
                        <span className="hover:underline">{link.name}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
              <hr className="w-full sm:hidden" />
            </>
          ))}

          {/* Contact Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">
              {footerData.sections[2].title}
            </h2>
            <ul>
              {footerData.sections[2].contactInfo.map((info, idx) => (
                <li key={idx} className="mb-2">
                  {info}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <hr className="mb-10" />
        {/* Copyright Section */}
        <div className="text-center font-semibold">
          <p>{footerData.copyRight}</p>
        </div>
      </Container>
    </footer>
  );
}

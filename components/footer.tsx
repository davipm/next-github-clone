import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookSquare, FaLinkedinIn, FaYoutube, FaTwitch, FaTiktok, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative break-words pt-14">
      <div className="relative z-10 mx-auto max-w-[1280px] overflow-hidden">
        <div className="mb-8 flex flex-col space-x-6 px-4 py-10 lg:flex-row">
          <div className="mb-12 px-2">
            <a href="#" className="inline-block" aria-label="Go to Github">
              <svg
                height="30"
                aria-hidden="true"
                viewBox="0 0 45 16"
                fill="currentColor"
                version="1.1"
                width="84"
                data-view-component="true"
                className="text-white"
              >
                <path d="M8.81 7.35v5.74c0 .04-.01.11-.06.13 0 0-1.25.89-3.31.89-2.49 0-5.44-.78-5.44-5.92S2.58 1.99 5.1 2c2.18 0 3.06.49 3.2.58.04.05.06.09.06.14L7.94 4.5c0 .09-.09.2-.2.17-.36-.11-.9-.33-2.17-.33-1.47 0-3.05.42-3.05 3.73s1.5 3.7 2.58 3.7c.92 0 1.25-.11 1.25-.11v-2.3H4.88c-.11 0-.19-.08-.19-.17V7.35c0-.09.08-.17.19-.17h3.74c.11 0 .19.08.19.17Zm35.85 2.33c0 3.43-1.11 4.41-3.05 4.41-1.64 0-2.52-.83-2.52-.83s-.04.46-.09.52c-.03.06-.08.08-.14.08h-1.48c-.1 0-.19-.08-.19-.17l.02-11.11c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v3.77s.82-.53 2.02-.53l-.01-.02c1.2 0 2.97.45 2.97 3.88ZM27.68 2.43c.09 0 .17.08.17.17v11.11c0 .09-.08.17-.17.17h-2.13c-.09 0-.17-.08-.17-.17l.02-4.75h-3.31v4.75c0 .09-.08.17-.17.17h-2.13c-.08 0-.17-.08-.17-.17V2.6c0-.09.08-.17.17-.17h2.13c.09 0 .17.08.17.17v4.09h3.31V2.6c0-.09.08-.17.17-.17Zm8.26 3.64c.11 0 .19.08.19.17l-.02 7.47c0 .09-.06.17-.17.17H34.6c-.07 0-.14-.04-.16-.09-.03-.06-.08-.45-.08-.45s-1.13.77-2.52.77c-1.69 0-2.92-.55-2.92-2.75V6.25c0-.09.08-.17.17-.17h2.14c.09 0 .17.08.17.17V11c0 .75.22 1.09.97 1.09s1.3-.39 1.3-.39V6.26c0-.11.06-.19.17-.19Zm-17.406 5.971h.005a.177.177 0 0 1 .141.179v1.5c0 .07-.03.14-.09.16-.1.05-.74.22-1.27.22-1.16 0-2.86-.25-2.86-2.69V8.13h-1.11c-.09 0-.17-.08-.17-.19V6.58c0-.08.05-.15.13-.17.07-.01 1.16-.28 1.16-.28V3.96c0-.08.05-.13.14-.13h2.16c.09 0 .14.05.14.13v2.11h1.59c.08 0 .16.08.16.17v1.7c0 .11-.07.19-.16.19h-1.59v3.131c0 .47.27.83 1.05.83.247 0 .481-.049.574-.05ZM12.24 6.06c.09 0 .17.08.17.17v7.37c0 .18-.05.27-.25.27h-1.92c-.17 0-.3-.07-.3-.27V6.26c0-.11.08-.2.17-.2Zm29.99 3.78c0-1.81-.73-2.05-1.5-1.97-.6.04-1.08.34-1.08.34v3.52s.49.34 1.22.36c1.03.03 1.36-.34 1.36-2.25ZM11.19 2.68c.75 0 1.36.61 1.36 1.38 0 .77-.61 1.38-1.36 1.38-.77 0-1.38-.61-1.38-1.38 0-.77.61-1.38 1.38-1.38Zm7.34 9.35v.001l.01.01h-.001l-.005-.001v.001c-.009-.001-.015-.011-.024-.011Z"></path>
              </svg>
            </a>

            <div className="text-white">
              <h2 className="mt-6 text-base font-semibold">Subscribe to our newsletter</h2>
              <p className="mb-6 text-sm text-custom-gray">Get product updates, company news, and more.</p>
              <a
                href="#"
                className="mb-6 rounded-lg border border-gray-400 px-6 py-3 text-lg font-semibold transition duration-200 hover:opacity-80"
              >
                Subscribe
              </a>
            </div>
          </div>

          <div className="grid w-full grid-cols-2 justify-between gap-6 md:grid-cols-4 lg:flex">
            <div className="text-custom-gray">
              <h2 className="mb-4 font-mono font-medium">Product</h2>

              <ul className="text-sm">
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Features
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Security
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Team
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Enterprise
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Custom Stories
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    The ReadME Project
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Pricing
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Resources
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Roadmap
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Compare GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-custom-gray">
              <h2 className="mb-4 font-mono font-medium">Platform</h2>

              <ul className="text-sm">
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Developer API
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Partners
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Electron
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    GitHub Desktop
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-custom-gray">
              <h2 className="mb-4 font-mono font-medium">Product</h2>

              <ul className="text-sm">
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Docs
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Community Forum
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Professional Services
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Premium Support
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Skill
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Status
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Contact GitHub
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-custom-gray">
              <h2 className="mb-4 font-mono font-medium">Company</h2>

              <ul className="text-sm">
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    About
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Blog
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Careers
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Press
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Inclusion
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Social Impact
                  </a>
                </li>
                <li className="mb-4">
                  <a href="#" className="inline-block hover:underline">
                    Shop
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#161b22]">
        <div className="mx-auto max-w-[1280px] flex-row-reverse items-center justify-between px-4 py-6 text-[12px] md:flex">
          <ul className="flex items-center max-md:mb-4">
            <li className="mr-4">
              <a href="#" aria-label="X" target="_blank">
                <FaXTwitter size={22} className="text-gray-400 transition-colors duration-100 hover:text-gray-500" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" aria-label="Facebook" target="_blank">
                <FaFacebookSquare
                  size={22}
                  className="text-gray-400 transition-colors duration-100 hover:text-gray-500"
                />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" aria-label="Linkedin" target="_blank">
                <FaLinkedinIn size={22} className="text-gray-400 transition-colors duration-100 hover:text-gray-500" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" aria-label="Youtube" target="_blank">
                <FaYoutube size={22} className="text-gray-400 transition-colors duration-100 hover:text-gray-500" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" aria-label="Twitch" target="_blank">
                <FaTwitch size={22} className="text-gray-400 transition-colors duration-100 hover:text-gray-500" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" aria-label="TikTok" target="_blank">
                <FaTiktok size={22} className="text-gray-400 transition-colors duration-100 hover:text-gray-500" />
              </a>
            </li>
            <li className="mr-4">
              <a href="#" aria-label="GitHub" target="_blank">
                <FaGithub size={22} className="text-gray-400 transition-colors duration-100 hover:text-gray-500" />
              </a>
            </li>
          </ul>
          <ul className="mb-4 flex flex-wrap items-center text-custom-gray sm:mb-0">
            <li className="mr-3">© {new Date().getFullYear()} GitHub, Inc.</li>
            <li className="mr-3">
              <a href="#" className="inline-block hover:underline">
                Terms
              </a>
            </li>
            <li className="mr-3">
              <a href="#" className="inline-block hover:underline" target="_blank">
                Privacy (Updated 08/2022)
              </a>
            </li>
            <li className="mr-3">
              <a href="#" className="inline-block hover:underline" target="_blank">
                Sitemap
              </a>
            </li>
            <li className="mr-3">
              <a href="#" className="inline-block hover:underline" target="_blank">
                What is Git?
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

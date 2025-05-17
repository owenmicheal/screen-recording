import { ICONS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import DropdownList from "./DropdownList";

const Header = ({ subHeader, title, userImg }: SharedHeaderProps) => {
  return (
    <header className="header">
      <section className="header-container">
        <div className="details">
          {userImg && (
            <Image
              src={userImg}
              alt="User Icon"
              width={66}
              height={66}
              className="rounded-full"
            />
          )}

          <article>
            <p>{subHeader}</p>
            <h1>{title}</h1>
          </article>
        </div>

        <aside>
          <Link href="/upload">
            <Image
              src="/assets/icons/upload.svg"
              alt="Upload Icon"
              width={16}
              height={16}
            />
            <span>Upload a video</span>
          </Link>
          <div className="record">
            <button className="primary-btn">
              <Image
                src={ICONS.record}
                alt="Record Icon"
                width={16}
                height={16}
              />
              <span>Record a video </span>
            </button>
          </div>
        </aside>
      </section>

      <section className="search-filter">
        <div className="search">
          <input
            type="text"
            placeholder="Search for videos, tags and folders..."
          />
          <Image
            src="/assets/icons/search.svg"
            alt="search icon"
            width={16}
            height={16}
          />
        </div>

        {/* <DropdownList /> */}
        <DropdownList />
      </section>
    </header>
  );
};

export default Header;

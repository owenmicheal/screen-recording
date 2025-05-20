"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  const handleSign = async () => {
    return await authClient.signIn.social({ provider: "google" });
  };
  return (
    <main className="sign-in">
      <aside className="testimonial">
        <Link href="/">
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={33}
            height={33}
          />
          <h1>NajjiCast</h1>
        </Link>

        <div className="description">
          <section>
            <figure>
              {Array.from({ length: 5 }).map((_, index) => (
                <Image
                  key={index}
                  src="/assets/icons/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              ))}
            </figure>
            <p>
              NajjiCast has completely streamlined how I share screen recordings
              with my team and clients. It’s fast, intuitive, and eliminates the
              hassle of uploading to multiple platforms. Game-changer!
            </p>
            <article>
              <Image
                src="/assets/images/jason.png"
                alt="jason"
                width={64}
                height={64}
                className="rounded-full aspect-square"
              />

              <div>
                <h3>Kimbowa Owen</h3>
                <p>Software Engineer | OceanzHub</p>
              </div>
            </article>
          </section>
        </div>
        <p>
          &copy; Copyright {new Date().getFullYear()} NajjiCast. All rights
          reserved.
        </p>
      </aside>

      {/* Right Side */}
      <aside className="google-sign-in">
        <section>
          <Link href="/">
            <Image
              src="/assets/icons/logo.png"
              alt="logo"
              width={40}
              height={40}
            />
            <h1>NajjiCast</h1>
          </Link>
          <p>
            Create & share your very first <span>NajjiCast Video</span> in no
            time
          </p>

          <button onClick={handleSign}>
            <Image
              src="/assets/icons/google.svg"
              alt="google"
              width={22}
              height={22}
            />
            <span>Sign in with Google</span>
          </button>
        </section>
      </aside>

      <div className="overlay"></div>
    </main>
  );
};

export default page;

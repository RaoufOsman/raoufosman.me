import Image from "next/image";
import BaseLayout from "@/layouts/BaseLayout";
import classNames from "classnames";

import portraitImage from "@/public/images/ro-portrait.jpg";
import Link from "next/link";
import { Socials } from "@/components/SocialIcons";

function SocialLink({ className, href, children, icon: Icon }: any) {
  return (
    <li className={classNames(className, "flex")}>
      <a
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-white dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500 dark:fill-white-500" />
        <span className="ml-4">{children}</span>
      </a>
    </li>
  );
}

function MailIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
      />
    </svg>
  );
}

export default function About() {
  return (
    <BaseLayout title="RO - About" pageDescription="About RO">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col-reverse sm:flex-row">
          <div>
            <p className="my-5">
              Hi, I&apos;m RO - a passionate software engineer with a strong
              desire to use my skills and knowledge to make a positive impact in
              the world. I&apos;m an introvert, like most devs, but suffer from
              impostor system at times. I&apos;ve always found it challenging to
              put myself out there and share my ideas with others. However,
              I&apos;ve realized that my voice and my unique perspective are
              valuable, and I&apos;m determined to overcome my shyness and show
              the world what I have to offer.
            </p>

            <p className="my-5">
              Over the past few years, I&apos;ve honed my skills as a software
              engineer, working on a wide range of projects that have pushed me
              outside of my comfort zone. I&apos;ve had the privilege of working
              with a variety of clients, including private companies in Maryland
              and various government agencies. Through these experiences,
              I&apos;ve learned the value of perseverance, hard work, and
              collaboration, and I&apos;m constantly seeking out new challenges
              and opportunities to learn and grow.
            </p>

            <p className="my-5">
              As an African American software engineer in a field where there is
              somewhat a lack of diversity, I&apos;m committed to using my
              skills to not only make a positive impact in the world but also to
              inspire others from underrepresented communities to pursue careers
              in tech. I recognize the challenges that come with being a
              minority in this industry, and I want to use my experiences to
              help others overcome similar obstacles.
            </p>
            <p className="my-5">
              In my experience, a more diverse workforce in the tech industry
              brings fresh perspectives and ideas, leading to more innovative
              solutions and I want to help create a more inclusive industry for
              future generations.
            </p>
            <p className="my-5">
              I invite you to read my posts and share your comments with me via
              Twitter or email. I hope to provide a platform for sharing my
              experiences and insights with others in the software engineering
              community. I want to connect with like-minded individuals who are
              passionate about using technology to solve real-world problems and
              to learn from their experiences as well. By coming out of my shell
              and showing the world who I am, I hope to inspire others to do the
              same and to make a meaningful difference in the world through
              software engineering.
            </p>
          </div>
          <div className="basis-1/4">
            <div className="lg:pl-20">
              <div className="w-full sm:max-w-xs px-2.5 lg:max-w-none">
                <Image
                  src={portraitImage}
                  alt=""
                  sizes="(min-width: 1024px) 32rem, 20rem"
                  className="mt-10 aspect-square sm:rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
                />
              </div>
            </div>
            <div className="lg:pl-20">
              <ul role="list">
                <>
                  {Socials.map((s, i) => (
                    <SocialLink
                      href={s.href}
                      icon={s.icon}
                      className="mt-5"
                      key={i}
                    >
                      Follow on {s.name}
                    </SocialLink>
                  ))}
                  <SocialLink
                    href="mailto:raoufosman@gmail.com"
                    icon={MailIcon}
                    className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                  >
                    raoufosman@gmail.com
                  </SocialLink>
                </>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}

export async function getStaticProps() {
  return {
    props: {},
    revalidate: 5,
  };
}

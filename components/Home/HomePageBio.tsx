import RichText from "../Contentful/RichText";
import { Socials } from "../SocialIcons";

interface IHomePageBioProps {
  bio: any
}

export default function HomePageBio({ bio }: IHomePageBioProps) {
  return (
    <>
      {bio.content ? <RichText content={bio.content} /> : ""}
      <div className="mx-auto flex gap-x-4">
        {Socials.map((item, itemIdx) => (
          <a key={itemIdx} href={item.href} className="text-gray-400 hover:text-gray-500">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
    </>
  )
}
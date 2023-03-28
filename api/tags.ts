import { BLOG_TAG_IDS } from "@/lookups";
import { createClient } from "contentful";

const space = process.env.CONTENTFUL_SPACE_ID;
const environment = process.env.CONTENTFUL_ENVIRONMENT_ID;
const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN;
const host = "cdn.contentful.com";

export const getAllTags = async () => {
  try {
    if (space && environment && accessToken) {
      const client = createClient({
        space,
        environment,
        accessToken,
        host
      });

      const tags = await client.getTags();

      return tags.items;
    }

    return [];
  }
  catch (e: any) {
    console.error(e);
    return [];
  }
}

export const getPageMetadataByTagId = (tagId: string) => {
  switch (tagId) {
    case BLOG_TAG_IDS.MOTIVATION_MONDAY:
      return { title: "Motivation Monday", description: "Start your week off right with a dose of inspiration and motivation. We'll share tips on how to stay motivated, stories of success, and insights into how to overcome challenges." };
    case BLOG_TAG_IDS.TECHNICAL_TUESDAY:
      return { title: "Tech Tuesday", description: "Explore the exciting world of technology with our Tech Tuesday posts. We'll delve into the latest and greatest technologies, tools, and techniques that developers and engineers need to know. From tips and tricks to troubleshooting advice, our posts will provide you with the insights and information you need to stay ahead of the curve." };
    case BLOG_TAG_IDS.WISDOM_WEDNESDAY:
      return { title: "Widsom Wednesday", description: "Gain insights and broaden your horizons with our Wisdom Wednesday posts. We'll share quotes from thought leaders, lessons learned from industry experts, and other pearls of wisdom to help you grow both personally and professionally." };
    case BLOG_TAG_IDS.TUTORIAL_THURSDAY:
      return { title: "Tutorial Thursday", description: "Ready to master new skills? Our Tutorial Thursday posts are packed with step-by-step guides and how-to tutorials to help you level up your technical abilities." };
    case BLOG_TAG_IDS.FUNDAMENTAL_FRIDAY:
      return { title: "Fundamental Friday", description: "Wrap up your week with a focus on the basics. Our Fundamental Friday posts will cover essential concepts in software engineering, including coding principles, software architecture, and more." };

    case BLOG_TAG_IDS.BLOG:
    default:
      return { title: "All Blogs", description: "All posts" };
  }
}
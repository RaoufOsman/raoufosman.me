import { BLOG_TAG_IDS } from "@/lookups";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SITE_URL!
});

export const getAllTags = async () => {
  //console.log('about to send api request to get all tags');
  const response = await api.get('/api/tags');

  return response?.data?.tags;
  //return []
}

export const getPageMetadataByTagId = (tagId: string) => {
  switch (tagId) {
    case BLOG_TAG_IDS.MOTIVATION_MONDAY:
      return { title: "Motivation Monday", description: "Start your week off right with a dose of inspiration and motivation. We'll share tips on how to stay motivated, stories of success, and insights into how to overcome challenges." };
    case BLOG_TAG_IDS.TECHNICAL_TUESDAY:
      return { title: "Technical Tuesday", description: "Dive into the world of technology with our Technical Tuesday posts. We'll explore the latest tech trends, highlight new tools and technologies, and share tips and tricks for developers and engineers." };
    case BLOG_TAG_IDS.WISDOM_WEDNESDAY:
      return { title: "Widsom Wednesday", description: "Gain insights and broaden your horizons with our Wisdom Wednesday posts. We'll share quotes from thought leaders, lessons learned from industry experts, and other pearls of wisdom to help you grow both personally and professionally." };
    case BLOG_TAG_IDS.TUTORIAL_THURSDAY:
      return { title: "Tutorial Thursday", description: "Ready to master new skills? Our Tutorial Thursday posts are packed with step-by-step guides and how-to tutorials to help you level up your technical abilities." };
    case BLOG_TAG_IDS.FUNDAMENTAL_FRIDAY:
      return { title: "Fundamental Friday", description: "Wrap up your week with a focus on the basics. Our Fundamental Friday posts will cover essential concepts in software engineering, including coding principles, software architecture, and more." };
    default:
      return { title: "All Blogs", description: "All posts" };
      break;
  }

}
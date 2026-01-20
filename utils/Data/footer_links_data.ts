import { FooterLinksType } from "./footer_links_type";
export const UQAStandardFooterLinks: FooterLinksType[] = [
   {
    URL: `${process.env.UQA_Base_URL}/`, 
    LinkName: 'ultimate qa'

   }, 
    {
    URL: `${process.env.UQA_Base_URL}/about/`, 
    LinkName: 'About'
},
    {
    URL:`${process.env.UQA_Base_URL}/blog/`, 
    LinkName: 'Blog'
},
    {
    URL: 'https://ultimateqa.kit.com/academy-coming-soon', 
    LinkName: "Java SDET Academy"
},
    {
    URL: `${process.env.UQA_Base_URL}/contact/`, 
    LinkName: 'Contact Us'
},
    {
    URL: 'https://courses.ultimateqa.com/collections', 
    LinkName: 'Free Courses'
},
{
    URL: 'https://academy.ultimateqa.com/java-sdet', 
    LinkName: 'Selenium Java'
},
{
    URL: 'https://courses.ultimateqa.com/courses/selenium-with-c', LinkName: 'Selenium C#'
},
{
    URL: 'https://ultimateqa.com/best-selenium-webdriver-resources/', 
    LinkName: 'Selenium Resources'
},
{
    URL: `${process.env.UQA_Base_URL}/automation/`,
    LinkName: 'Automation Exercises'
}
];

export const UQASocialFooterLinks: FooterLinksType[] = [
{
    URL: 'https://www.linkedin.com/company/ultimate-qa',
    LinkName: ''
},
{
    URL: 'https://x.com/ultimateqahq',
    LinkName:  ''
  },
  {
    URL: 'https://www.facebook.com/Ultimateqa1',
    LinkName: ''
  },
  {
    URL: 'https://www.instagram.com/ultimate.qa',
    LinkName: ''
  },
  {
    URL: 'https://www.youtube.com/@UltimateQA',
    LinkName: ''   
  }
];

export const UQALegalFooterLinks: FooterLinksType[] = [
{
    URL: 'https://courses.ultimateqa.com/pages/terms',
    LinkName: 'Terms and conditions'    
},
{
    URL:'https://courses.ultimateqa.com/pages/privacy',
    LinkName: 'Privacy policy'
}
];
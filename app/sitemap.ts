import { MetadataRoute } from 'next'

const urls = [
    'https://www.anjaanbackpackers.com/',
    'https://www.anjaanbackpackers.com/about',
    'https://www.anjaanbackpackers.com/contacts',
    'https://www.anjaanbackpackers.com/blogs',

    
    'https://www.anjaanbackpackers.com/blogs/kedarnath-temple',
    'https://www.anjaanbackpackers.com/blogs/tungnath-temple',
    'https://www.anjaanbackpackers.com/blogs/top-15-places-to-visit-in-rishikesh-in-2024',
    'https://www.anjaanbackpackers.com/blogs/kartikswami-temple',
]

export default function sitemap(): MetadataRoute.Sitemap {

    console.log(urls.length);

    const allUrls: MetadataRoute.Sitemap =  urls.map((url) => ({
        url,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: url === 'https://www.anjaanbackpackers.com/' ? 1 : 0.8,
    }));

    return allUrls;
}
import PrivacyPolicy from '@/views/PrivacyPolicy';
import connectToDatabase from '@/lib/mongodb';
import PageSeo from '@/models/PageSeo';

export async function generateMetadata() {
  try {
    await connectToDatabase();
    const seo = await PageSeo.findOne({ pageUrl: '/privacy-policy' });
    if (seo && seo.metaTitle) {
      return {
        title: seo.metaTitle,
        description: seo.metaDescription || '',
        keywords: seo.metaKeywords || '',
        robots: seo.robots || 'index, follow',
        alternates: { canonical: '/privacy-policy' },
      };
    }
  } catch (e) {}
  return {
    title: 'Privacy Policy - दैनिक सबसे तेज़ News',
    alternates: { canonical: '/privacy-policy' },
  };
}

export default function Page() {
  return <PrivacyPolicy />;
}

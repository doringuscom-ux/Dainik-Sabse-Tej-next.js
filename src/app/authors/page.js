import ReportersList from '@/views/ReportersList';

import connectToDatabase from '@/lib/mongodb';
import PageSeo from '@/models/PageSeo';

export async function generateMetadata() {
  try {
    await connectToDatabase();
    const seo = await PageSeo.findOne({ pageUrl: '/authors' });
    if (seo && seo.metaTitle) {
      return {
        title: seo.metaTitle,
        description: seo.metaDescription || '',
        keywords: seo.metaKeywords || '',
        robots: seo.robots || 'index, follow',
      };
    }
  } catch (e) {}
  return {
    title: 'Our Authors & Journalists | दैनिक सबसे तेज़',
    description: 'Meet the dedicated journalists, field reporters, editors, and columnists delivering accurate, verified news daily at दैनिक सबसे तेज़.',
  };
}

export default function Page() {
  return <ReportersList />;
}

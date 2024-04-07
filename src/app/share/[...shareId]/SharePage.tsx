'use client';
import WebsiteDetails from 'app/(main)/websites/[websiteId]/WebsiteDetails';
import { useShareToken } from 'components/hooks';
import Page from 'components/layout/Page';
import Header from './Header';
import Footer from './Footer';
import styles from './SharePage.module.css';

export default function SharePage({ shareId }) {
  const { shareToken, isLoading } = useShareToken(shareId);

  if (isLoading || !shareToken) {
    return null;
  }

  return (
    <div className={styles.container}>
      <Page>
        <Header />
        <WebsiteDetails websiteId={shareToken.websiteId} />
        <Footer />
      </Page>
    </div>
  );
}

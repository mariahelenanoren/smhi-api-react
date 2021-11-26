import React from 'react';
import Fallback from '../layout/fallback/fallback';
import Page from '../layout/page/page';

export default function FallbackPage() {
  return (
    <Page title="Sidan kunde inte hittas">
      <Fallback />
    </Page>
  );
}

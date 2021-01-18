import React from 'react';
import SEO from 'components/seo';
import Layout from 'components/layout';
import Banner from 'sections/banner';
import Services from 'sections/services';
import Testimonials from 'sections/testimonials';
import OurTeam from 'sections/our-team';
import OtherServices from 'sections/other-services';
import WhyUs from 'sections/why-us';
import SubscribeUs from 'sections/subscribe-us';
import Blog from 'sections/blog';
import 'rc-tabs/assets/index.css';
import 'swiper/swiper-bundle.min.css';

export default function IndexPage() {
  return (
    <Layout>
      <SEO title="Startup agency" />
      <Banner />
      <Services />
      <Testimonials />
      <OurTeam />
      <OtherServices />
      <WhyUs />
      <Blog />
      <SubscribeUs />
    </Layout>
  );
}

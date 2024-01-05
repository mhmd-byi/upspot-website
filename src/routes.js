import {
  Home,
  About,
  Service,
  Career,
  Boost,
  Contact,
  Portfolio,
  SoftwareWebDevelopment, 
  SocialMediaOptimization, 
  SeoServices, 
  PaidMarketing, 
  MarketplaceManagement, 
  WhatsappServices, 
  ContentMarketing, 
  GraphicsDesigns, 
  Editing,
  // Saas, 
  ChokhiDhani,
  WBCS, 
  DesiDhaba, 
  Veeba, 
} from './pages'
import pp from './pages/pp'
import TNC from './pages/tnc/tnc'

import Sitemap from './sitemap'

export const routes = [
  {
    path: '/',
    component: Home,
    exact: true
  }, 
  {
    path: '/about',
    component: About,
    exact: true
  }, 
  {
    path: '/service',
    component: Service,
    exact: true
  }, 
  {
    path: '/careers',
    component: Career,
    exact: true
  }, 
  {
    path: '/boost',
    component: Boost,
    exact: true
  }, 
  {
    path: '/contact',
    component: Contact,
    exact: true
  }, 
  {
    path: '/portfolio',
    component: Portfolio,
    exact: true
  }, 
  {
    path: '/service/software-web-development',
    component: SoftwareWebDevelopment,
    exact: true
  }, 
  {
    path: '/service/social-media-optimization',
    component: SocialMediaOptimization,
    exact: true
  }, 
  {
    path: '/service/seo-services',
    component: SeoServices,
    exact: true
  }, 
  {
    path: '/service/paid-marketing',
    component: PaidMarketing,
    exact: true
  }, 
  {
    path: '/service/marketplace-management',
    component: MarketplaceManagement,
    exact: true
  }, 
  {
    path: '/service/whatsapp-services',
    component: WhatsappServices,
    exact: true
  }, 
  {
    path: '/service/content-marketing',
    component: ContentMarketing,
    exact: true
  }, 
  {
    path: '/service/graphics-designs',
    component: GraphicsDesigns,
    exact: true
  }, 
  {
    path: '/service/editing',
    component: Editing,
    exact: true
  }, 
  // {
  //   path: '/service/saas',
  //   component: Saas,
  //   exact: true
  // }, 
  {
    path: '/portfolio/chokhi-dhani',
    component: ChokhiDhani,
    exact: true
  }, 
  {
    path: '/portfolio/wbcs-edu-rev',
    component: WBCS,
    exact: true
  }, 
  {
    path: '/portfolio/desi-dhaba',
    component: DesiDhaba,
    exact: true
  }, 
  {
    path: '/portfolio/veeba',
    component: Veeba,
    exact: true
  }, 
  {
    path: '/sitemap.xml',
    component: Sitemap,
    exact: true
  },
  {
    path: '/tnc',
    component: TNC,
    exact: true
  }, 
  {
    path: '/pp',
    component: pp,
    exact: true
  }, 
]
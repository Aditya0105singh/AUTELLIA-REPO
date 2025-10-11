import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../Layout.jsx'
import { ThemeProvider } from './contexts/ThemeContext.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'

// Import Pages
import Platform from '../Pages/Platform.jsx'
import Solutions from '../Pages/Solutions.jsx'
import SolutionsOverview from '../Pages/SolutionsOverview.jsx'
import AIMLIntegration from '../Pages/AIMLIntegration.jsx'
import AutomationConsulting from '../Pages/AutomationConsulting.jsx'
import BOTDevelopment from '../Pages/BOTDevelopment.jsx'
import ProcessOptimization from '../Pages/ProcessOptimization.jsx'
import DataAnalytics from '../Pages/DataAnalytics.jsx'
import DocumentProcessing from '../Pages/DocumentProcessing.jsx'
import SoftwareDevelopment from '../Pages/SoftwareDevelopment.jsx'
import CloudAutomation from '../Pages/CloudAutomation.jsx'
import ManagedServices from '../Pages/ManagedServices.jsx'
import Careers from '../Pages/Careers.jsx'
import Demo from '../Pages/Demo.jsx'
import Perspectives from '../Pages/Perspectives.jsx'
import CaseStudies from '../Pages/CaseStudies.jsx'
import CallToAction from '../Pages/CallToAction.jsx'
import BlogKnowledgeHub from '../Pages/BlogKnowledgeHub.jsx'
import NotFound from '../Pages/NotFound.jsx'
import TermsOfService from '../Pages/TermsOfService.jsx'
import PrivacyPolicy from '../Pages/PrivacyPolicy.jsx'
import ThankYou from '../Pages/ThankYou.jsx'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout><Platform /></Layout>} />
          <Route path="/platform" element={<Layout><Platform /></Layout>} />
          <Route path="/solutions" element={<Layout><Solutions /></Layout>} />
          <Route path="/explore-solutions" element={<Layout><SolutionsOverview /></Layout>} />
          <Route path="/automation-consulting" element={<Layout><AutomationConsulting /></Layout>} />
          <Route path="/bot-development" element={<Layout><BOTDevelopment /></Layout>} />
          <Route path="/aiml-integration" element={<Layout><AIMLIntegration /></Layout>} />
          <Route path="/process-optimization" element={<Layout><ProcessOptimization /></Layout>} />
          <Route path="/data-analytics" element={<Layout><DataAnalytics /></Layout>} />
          <Route path="/document-processing" element={<Layout><DocumentProcessing /></Layout>} />
          <Route path="/software-development" element={<Layout><SoftwareDevelopment /></Layout>} />
          <Route path="/cloud-automation" element={<Layout><CloudAutomation /></Layout>} />
          <Route path="/managed-services" element={<Layout><ManagedServices /></Layout>} />
          <Route path="/careers" element={<Layout><Careers /></Layout>} />
          <Route path="/demo" element={<Layout><Demo /></Layout>} />
          <Route path="/perspectives" element={<Layout><Perspectives /></Layout>} />
          <Route path="/case-studies" element={<Layout><CaseStudies /></Layout>} />
          <Route path="/call-to-action" element={<Layout><CallToAction /></Layout>} />
          <Route path="/blog-knowledge-hub" element={<Layout><BlogKnowledgeHub /></Layout>} />
          <Route path="/terms-of-service" element={<Layout><TermsOfService /></Layout>} />
          <Route path="/privacy-policy" element={<Layout><PrivacyPolicy /></Layout>} />
          <Route path="/thank-you" element={<Layout><ThankYou /></Layout>} />
          {/* 404 Not Found - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

export default App

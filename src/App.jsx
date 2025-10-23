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
import CaseStudyUnistrut from '../Pages/CaseStudyUnistrut.jsx'
import CaseStudyHealthcare from '../Pages/CaseStudyHealthcare.jsx'
import CaseStudyTravelCounsellors from '../Pages/CaseStudyTravelCounsellors.jsx'
import CaseStudyEuromaster from '../Pages/CaseStudyEuromaster.jsx'
import CallToAction from '../Pages/CallToAction.jsx'
import BlogKnowledgeHub from '../Pages/BlogKnowledgeHub.jsx'
import BlogPostRPAScaling from '../Pages/BlogPost_RPAScaling.jsx'
import BlogPostDataSecurity from '../Pages/BlogPost_DataSecurity.jsx'
import BlogPostChangeManagement from '../Pages/BlogPost_ChangeManagement.jsx'
import BlogPostAIDocumentProcessing from '../Pages/BlogPost_AIDocumentProcessing.jsx'
import BlogPostROIFramework from '../Pages/BlogPost_ROIFramework.jsx'
import BlogPostRPAvsIA from '../Pages/BlogPost_RPAvsIA.jsx'
import BlogPostAgenticAI from '../Pages/BlogPost_AgenticAI.jsx'
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
          <Route path="/case-study-unistrut" element={<Layout><CaseStudyUnistrut /></Layout>} />
          <Route path="/case-study-healthcare" element={<Layout><CaseStudyHealthcare /></Layout>} />
          <Route path="/case-study-travel-counsellors" element={<Layout><CaseStudyTravelCounsellors /></Layout>} />
          <Route path="/case-study-euromaster" element={<Layout><CaseStudyEuromaster /></Layout>} />
          <Route path="/call-to-action" element={<Layout><CallToAction /></Layout>} />
          <Route path="/blog-knowledge-hub" element={<Layout><BlogKnowledgeHub /></Layout>} />
          <Route path="/blog/rpa-scaling-best-practices" element={<Layout><BlogPostRPAScaling /></Layout>} />
          <Route path="/blog/data-security-intelligent-automation" element={<Layout><BlogPostDataSecurity /></Layout>} />
          <Route path="/blog/change-management-automation-success" element={<Layout><BlogPostChangeManagement /></Layout>} />
          <Route path="/blog/ai-powered-document-processing" element={<Layout><BlogPostAIDocumentProcessing /></Layout>} />
          <Route path="/blog/roi-calculation-framework" element={<Layout><BlogPostROIFramework /></Layout>} />
          <Route path="/blog/rpa-vs-intelligent-automation" element={<Layout><BlogPostRPAvsIA /></Layout>} />
          <Route path="/blog/agentic-ai-enterprise" element={<Layout><BlogPostAgenticAI /></Layout>} />
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
